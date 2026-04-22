# RFP Hub — Powerhouse reference implementation

**A proof-of-concept RFP Hub built in response to the Ethereum Foundation's
"Standard RFP Object and Public Aggregation API" RFP.**

This repo is the backend half: document models, editors, and the apply-to
subgraph that together let a funder publish a grant pool and an applicant
submit a pre-filled application — all via signed, content-addressed documents
on a Powerhouse reactor. Every field maps losslessly to
[DAOIP-5](https://docs.daostar.org/Standards%20In%20Focus/The%20Grants%20Metadata%20Standard)
and projects to [schema.org/Grant](https://schema.org/Grant) so the same data
flows through any aggregator that speaks either standard.

## Live demo

| What | Link |
|---|---|
| Funder back office (Ethereum Foundation + published RFP, running on the remote switchboard) | [connect.light-fawn-92.vetra.io/?driveUrl=…/d/rfp-hub](https://connect.light-fawn-92.vetra.io/?driveUrl=https://switchboard.light-fawn-92.vetra.io/d/rfp-hub) |
| Fusion front-end (public index of open RFPs, applicants apply from here) | [rfp-hub.vetra.io](https://rfp-hub.vetra.io/) |
| Remote switchboard GraphQL endpoint | `https://switchboard.light-fawn-92.vetra.io/graphql` |

Click **Apply to this grant** on any pool in the Fusion app: the apply-to
subgraph provisions a fresh applicant drive, creates a project + grant
application pre-filled from the pool, and hands back a link that opens the
applicant's private workspace in Connect.

## What's in the box

### Five DAOIP-5 document models ([`document-models/`](document-models/))

| Type ID | Purpose |
|---|---|
| `rfp-hub/grant-system` | A funder (DAO, Foundation, Program). Verification lifecycle, publisher wallet, socials. |
| `rfp-hub/grant-pool` | A specific funding call (RFP, bounty, QF round, …). Supports all 31 DAOIP-5 mechanisms. |
| `rfp-hub/project` | An applicant profile — the "common application" that can be reused across pools. |
| `rfp-hub/grant-application` | A project's submission to a pool. Richer `reviewStage` projects to the DAOIP-5 6-value status. |
| `rfp-hub/governance` | Disputes, publisher allowlist decisions, policies, and schema RFCs. |

### Editors and apps ([`editors/`](editors/))

- One bespoke editor per document type (`grant-system-editor`, `grant-pool-editor`, …) — all styled against the shared Ethereal-Red design tokens in [`design-tokens.css`](editors/design-tokens.css).
- **`funder-back-office`** — dashboard for a grant system: pool lifecycle, kanban review queue, governance health, activity feed.
- **`applicant-workspace`** — dashboard for a single applicant: project profile, applications in flight.

### One custom subgraph ([`subgraphs/apply-to/`](subgraphs/apply-to/))

`applyToPool(grantPoolId, applicantName, applicantEmail?)` — the apply-button
endpoint the Fusion app calls. It:

1. Creates a private applicant drive (`apply-<pool>-<name>-<rand>`).
2. Creates a Project doc + GrantApplication doc as children of the drive.
3. Pre-fills the application from the pool (pool ref, project ref, funds asked seeded from `minGrant`, timestamps).
4. Mirrors a read-only file entry into the funder's drive so the pool owner sees the submission.
5. Returns a Connect redirect URL that opens the applicant's workspace.

## Architecture

```
┌─────────────────────────────┐      ┌─────────────────────────────┐
│  Fusion front-end           │      │  Connect                    │
│  (rfp-hub.to / vetra.io)    │      │  (editors + dashboards)     │
│  Public index of RFPs       │      │                             │
└──────────────┬──────────────┘      └──────────────┬──────────────┘
               │                                    │
               │ GraphQL (public read + apply)      │ WebSocket + HTTP sync
               ▼                                    ▼
        ┌──────────────────────────────────────────────────┐
        │  Switchboard (Powerhouse reactor + GraphQL)      │
        │  • auto-registered /graphql/<Model> subgraphs    │
        │  • /graphql/apply-to (this repo)                 │
        │  • per-drive document sync                       │
        └──────────────────────────────────────────────────┘
```

The reactor holds every document as a signed, append-only operation stream.
The Fusion app reads through the public GraphQL, Connect loads the editor
bundles for rich write operations, and the apply-to subgraph is the single
place that writes across drive boundaries (applicant ↔ funder).

## Quickstart

### Prerequisites

- Node 20+ and [Bun](https://bun.sh/)
- `ph` CLI: `bun add -g @powerhousedao/ph-cli`

### 1. Clone and install

```bash
git clone https://github.com/powerhouse-inc/rfp-hub-app.git
cd rfp-hub-app
bun install
```

### 2. Start the backend (Vetra)

```bash
ph vetra --watch
```

This boots:
- **Switchboard** at `http://localhost:4001/graphql` (reactor + every auto-registered subgraph)
- **Vetra Studio / Connect** at `http://localhost:3001` (the editor host)

Every editor change hot-reloads. A `vetra-*` drive holds the document models
and editor definitions; a `preview-*` drive gets demo instances.

### 3. Create the funder drive

Open Connect, create a new drive with the preferred editor set to
`funder-back-office`. Add documents for your organisation, pools, and
governance — or populate a realistic EF-ESP scenario via the MCP:

```bash
curl -X POST http://localhost:4001/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"createDocument","arguments":{"documentType":"rfp-hub/grant-system","name":"My Foundation","driveId":"<drive-id>"}}}'
```

(The reactor-mcp is the fastest way to seed realistic data — see the scripts
in the session history for a full EF-ESP populate run.)

### 4. Run the Fusion front-end locally

The Fusion app lives in a separate repo ([rfp-hub.to](https://github.com/powerhouse-inc/rfp-hub.to)).
Pointed at a local switchboard:

```bash
cd ../rfp-hub.to
cp .env.example .env.local
# NEXT_PUBLIC_SWITCHBOARD_URL=http://localhost:4001/graphql
pnpm install && pnpm dev     # http://localhost:3000
```

Your local RFPs now appear in the Fusion index. Clicking **Apply** calls
`applyToPool` on the local switchboard, which returns a redirect URL that
opens the applicant workspace in your local Connect.

## Build & deploy

```bash
bun run build           # bundles editors + subgraphs for the registry CDN
bun run connect         # starts just Connect against an existing switchboard
bun run reactor         # starts just the reactor
```

`build.ts` forces `react` / `react-dom` into the bundler's `external` list so
the published package shares the host Connect's React instance instead of
shipping its own — a fix for the "two Reacts / `useState` of null" error the
default `ph build` produces.

### Deployment-specific config

The apply-to subgraph reads two env vars (manifested in
`powerhouse.manifest.json` so the Vetra platform injects them) to build the
redirect URL that points applicants at the right Connect:

| Var | Example |
|---|---|
| `CONNECT_URL` | `https://connect.light-fawn-92.vetra.io/` |
| `SWITCHBOARD_URL` | `https://switchboard.light-fawn-92.vetra.io/graphql` |

Locally, a `.env` with the same keys (set to `http://localhost:3001` and
`http://localhost:4001/graphql`) is picked up by `dotenv` at subgraph startup.
If neither env nor `.env` sets them, the resolver falls back to the remote
`light-fawn-92` deployment — so misconfigured deploys still produce a
working redirect rather than a broken localhost link.

## Relation to the EF RFP

The Ethereum Foundation's
["Standard RFP Object and Public Aggregation API"](https://esp.ethereum.foundation/rfps/rfp-hub-standard-aggregation-api)
call asks for:

1. A canonical schema for grant pools (DAOIP-5 + schema.org/Grant).
2. A public aggregation API that indexes opportunities across ecosystems.
3. Documented exports and a transparent governance model for inclusion,
   verification, and dispute handling.

This repo demonstrates all three with working code:

- **(1)** The five document models *are* the canonical schema. Every field
  has a lossless DAOIP-5 projection; [`modules/rfps/jsonld.ts`](../rfp-hub.to/modules/rfps/jsonld.ts)
  in the Fusion front-end shows the schema.org/Grant projection.
- **(2)** The switchboard's per-model GraphQL subgraphs (auto-generated from
  each schema) *are* the public aggregation API. The Fusion front-end and
  any third-party aggregator hit the same `/graphql/GrantPool` endpoint.
- **(3)** Governance lives in its own document model with a published audit
  trail: policies, RFCs, publisher allowlist decisions, and disputes — not a
  README in a repo somewhere.

## Repo layout

```
rfp-hub-app/
  document-models/    5 DAOIP-5 models (state, reducers, generated types)
  editors/            5 per-model editors + funder / applicant apps
  subgraphs/
    apply-to/         custom apply-button subgraph
  processors/         (stubs — relational projections go here)
  build.ts            React-external build that publishes to the registry
  powerhouse.manifest.json
```

## Commands cheat sheet

| Command | Purpose |
|---|---|
| `ph vetra --watch` | Full local dev (switchboard + Connect, hot-reload) |
| `bun run tsc` | Type-check |
| `bun run lint:fix` | Lint + autofix |
| `bun run build` | Bundle for registry publish (with React externalised) |
| `bun run generate` | Regenerate codegen after document-model schema changes |

## License

AGPL-3.0-only.
