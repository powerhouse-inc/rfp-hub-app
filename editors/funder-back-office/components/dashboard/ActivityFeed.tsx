import { setSelectedNode } from "@powerhousedao/reactor-browser";
import type { PHDocument } from "document-model";
import type { GrantApplicationDocument } from "../../../../document-models/grant-application/v1/gen/types.js";
import type { GrantPoolDocument } from "../../../../document-models/grant-pool/v1/gen/types.js";
import type { GrantSystemDocument } from "../../../../document-models/grant-system/v1/gen/types.js";
import type { ProjectDocument } from "../../../../document-models/project/v1/gen/types.js";
import { formatRelativeTime } from "./constants.js";

type ActivityItem = {
  key: string;
  docId: string;
  title: string;
  subtitle: string;
  iso: string;
};

const ACTIVITY_LIMIT = 50;

function docTitle(doc: PHDocument): string {
  const type = doc.header.documentType;
  const fallback = doc.header.name?.trim();
  switch (type) {
    case "rfp-hub/grant-system": {
      const s = (doc as GrantSystemDocument).state.global;
      return s.name?.trim() || fallback || "Unnamed organization";
    }
    case "rfp-hub/grant-pool": {
      const s = (doc as GrantPoolDocument).state.global;
      return s.name?.trim() || fallback || "Untitled pool";
    }
    case "rfp-hub/grant-application": {
      const s = (doc as GrantApplicationDocument).state.global;
      return (
        s.projectName?.trim() ||
        fallback ||
        "Unnamed application"
      );
    }
    case "rfp-hub/project": {
      const s = (doc as ProjectDocument).state.global;
      return s.name?.trim() || fallback || "Unnamed project";
    }
    default:
      return fallback || "Untitled document";
  }
}

function docKindLabel(type: string): string {
  switch (type) {
    case "rfp-hub/grant-system":
      return "Grant system";
    case "rfp-hub/grant-pool":
      return "Grant pool";
    case "rfp-hub/grant-application":
      return "Application";
    case "rfp-hub/governance":
      return "Governance";
    case "rfp-hub/project":
      return "Project";
    default:
      return type.replace(/^rfp-hub\//, "").replace(/-/g, " ");
  }
}

/** Turn `SET_PROJECT_NAME` → `Set project name`. */
function humanizeActionType(actionType: string): string {
  const raw = actionType.replace(/_/g, " ").toLowerCase();
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

/**
 * Extract a tiny hint from the action input so the event reads in plain
 * English. Keeps output short and safe for mixed / unknown inputs.
 */
function describeActionInput(
  actionType: string,
  input: unknown,
): string | null {
  if (!input || typeof input !== "object") return null;
  const o = input as Record<string, unknown>;

  const pick = (...keys: string[]): string | null => {
    for (const k of keys) {
      const v = o[k];
      if (typeof v === "string" && v.trim()) return v.trim();
      if (typeof v === "number") return String(v);
      if (typeof v === "boolean") return v ? "yes" : "no";
    }
    return null;
  };

  // Common amount-carrying actions.
  if (actionType === "ADD_FUNDS_ASKED" || actionType === "ADD_FUNDS_APPROVED") {
    const amount = o.amount as { value?: number; unit?: string } | undefined;
    if (amount?.value != null && amount.unit) {
      return `${amount.value.toLocaleString()} ${amount.unit}`;
    }
  }
  if (
    actionType === "SET_FUNDS_ASKED_USD" ||
    actionType === "SET_FUNDS_APPROVED_USD"
  ) {
    const usd = (o.fundsAskedInUSD ?? o.fundsApprovedInUSD) as
      | { value?: number }
      | undefined;
    if (usd?.value != null) return `$${usd.value.toLocaleString()} USD`;
  }

  // Review / stage / lifecycle transitions.
  const stage = pick("reviewStage", "stage", "lifecycle", "verificationState");
  if (stage) return stage.replace(/_/g, " ").toLowerCase();

  // Common identity fields.
  const shortFields = pick(
    "name",
    "projectName",
    "grantPoolName",
    "applicantName",
    "email",
    "title",
  );
  if (shortFields) {
    const trimmed =
      shortFields.length > 48
        ? `${shortFields.slice(0, 45)}…`
        : shortFields;
    return `"${trimmed}"`;
  }
  return null;
}

export function ActivityFeed({ documents }: { documents: PHDocument[] }) {
  const items: ActivityItem[] = [];

  for (const doc of documents) {
    const title = docTitle(doc);
    const kind = docKindLabel(doc.header.documentType);
    const ops = doc.operations?.global ?? [];

    if (ops.length === 0) {
      const iso =
        doc.header.lastModifiedAtUtcIso ?? doc.header.createdAtUtcIso;
      if (iso) {
        items.push({
          key: `${doc.header.id}:init`,
          docId: doc.header.id,
          title: `${kind} "${title}" created`,
          subtitle: kind,
          iso,
        });
      }
      continue;
    }

    for (const op of ops) {
      if (!op.timestampUtcMs) continue;
      const actionType = op.action?.type ?? "";
      if (!actionType) continue;

      const verb = humanizeActionType(actionType);
      const hint = describeActionInput(actionType, op.action?.input);
      const subtitle = hint
        ? `${kind} · ${hint}`
        : `${kind}`;

      items.push({
        key: `${doc.header.id}:${op.id}:${op.index}`,
        docId: doc.header.id,
        title: `${verb} — ${title}`,
        subtitle,
        iso: new Date(Number(op.timestampUtcMs)).toISOString(),
      });
    }
  }

  items.sort((a, b) => new Date(b.iso).getTime() - new Date(a.iso).getTime());
  const visible = items.slice(0, ACTIVITY_LIMIT);

  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-row" style={{ justifyContent: "space-between" }}>
        <h2 className="rfp-section-subtitle">
          Recent activity {items.length > 0 ? `· ${items.length}` : null}
        </h2>
        <span className="rfp-meta">Newest first</span>
      </div>
      <hr className="rfp-divider" />
      {visible.length === 0 ? (
        <div className="rfp-empty">No activity yet.</div>
      ) : (
        <ul className="rfp-list rfp-activity-scroll" style={{ gap: 4 }}>
          {visible.map((item) => (
            <li
              key={item.key}
              className="rfp-activity-row"
              onClick={() => setSelectedNode(item.docId)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setSelectedNode(item.docId);
              }}
              title={new Date(item.iso).toLocaleString()}
            >
              <span className="rfp-activity-dot" />
              <div className="rfp-activity-body">
                <div className="rfp-activity-title">{item.title}</div>
                <div className="rfp-activity-meta">
                  {item.subtitle} · {formatRelativeTime(item.iso)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
