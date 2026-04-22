// Load env before anything else so `process.env.CONNECT_URL` /
// `SWITCHBOARD_URL` (injected by the Vetra deployment platform via the
// manifest `config` section) are visible when `getResolvers` runs.
// No-op when there's no .env file (e.g. fresh CI, `ph vetra` with shell-set
// vars); dotenv silently skips a missing file.
import "dotenv/config";

import { BaseSubgraph } from "@powerhousedao/reactor-api";
import type { DocumentNode } from "graphql";
import { schema } from "./schema.js";
import { getResolvers } from "./resolvers.js";

export class ApplyToSubgraph extends BaseSubgraph {
  name = "apply-to";
  typeDefs: DocumentNode = schema;
  resolvers = getResolvers(this);
  additionalContextFields = {};
  async onSetup() {}
  async onDisconnect() {}
}
