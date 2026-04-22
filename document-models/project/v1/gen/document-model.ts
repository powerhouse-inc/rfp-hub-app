import type { DocumentModelGlobalState } from "document-model";

export const documentModel: DocumentModelGlobalState = {
  id: "rfp-hub/project",
  name: "Project",
  author: {
    name: "Powerhouse",
    website: "https://www.powerhouse.inc/",
  },
  extension: "rfpr",
  description:
    "DAOIP-5 Project \u2014 the applicant's persistent profile ('common application'). Lives in the applicant's own drive and is referenced by grant-application documents.",
  specifications: [
    {
      state: {
        local: {
          schema: "",
          examples: [],
          initialValue: "",
        },
        global: {
          schema:
            "type ProjectState {\n  # DAOIP-5 canonical Project fields\n  name: String\n  description: String\n  contentURI: URL\n  email: EmailAddress\n  membersURI: URL\n  attestationIssuersURI: URL\n  relevantTo: [RelevantPool!]!\n  image: URL\n  coverImage: URL\n  licenseURI: URL\n  socials: [ProjectSocial!]!\n  extensions: String\n\n  # schema.org addition\n  sameAs: [URL!]!\n\n  # Hub additions\n  ownerDid: String\n  code: String\n}\n\ntype RelevantPool {\n  id: OID!\n  poolId: PHID!\n  poolName: String!\n}\n\ntype ProjectSocial {\n  id: OID!\n  name: String!\n  value: URL!\n}\n",
          examples: [],
          initialValue:
            '{"name": null, "description": null, "contentURI": null, "email": null, "membersURI": null, "attestationIssuersURI": null, "relevantTo": [], "image": null, "coverImage": null, "licenseURI": null, "socials": [], "extensions": null, "sameAs": [], "ownerDid": null, "code": null}',
        },
      },
      modules: [
        {
          id: "profile-module",
          name: "profile",
          description: "Core DAOIP-5 project identity fields",
          operations: [
            {
              id: "pr-set-project-name",
              name: "SET_PROJECT_NAME",
              description: "",
              schema: "input SetProjectNameInput {\n    name: String!\n}",
              template: "",
              reducer: "state.name = action.input.name;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-description",
              name: "SET_PROJECT_DESCRIPTION",
              description: "",
              schema:
                "input SetProjectDescriptionInput {\n    description: String\n}",
              template: "",
              reducer: "state.description = action.input.description || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-content-uri",
              name: "SET_CONTENT_URI",
              description: "",
              schema: "input SetContentUriInput {\n    contentURI: URL\n}",
              template: "",
              reducer: "state.contentURI = action.input.contentURI || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-email",
              name: "SET_PROJECT_EMAIL",
              description: "",
              schema:
                "input SetProjectEmailInput {\n    email: EmailAddress\n}",
              template: "",
              reducer: "state.email = action.input.email || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-members-uri",
              name: "SET_MEMBERS_URI",
              description: "",
              schema: "input SetMembersUriInput {\n    membersURI: URL\n}",
              template: "",
              reducer: "state.membersURI = action.input.membersURI || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-image",
              name: "SET_PROJECT_IMAGE",
              description: "",
              schema: "input SetProjectImageInput {\n    image: URL\n}",
              template: "",
              reducer: "state.image = action.input.image || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-cover-image",
              name: "SET_PROJECT_COVER_IMAGE",
              description: "",
              schema:
                "input SetProjectCoverImageInput {\n    coverImage: URL\n}",
              template: "",
              reducer: "state.coverImage = action.input.coverImage || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-license-uri",
              name: "SET_LICENSE_URI",
              description: "",
              schema: "input SetLicenseUriInput {\n    licenseURI: URL\n}",
              template: "",
              reducer: "state.licenseURI = action.input.licenseURI || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-code",
              name: "SET_PROJECT_CODE",
              description: "",
              schema: "input SetProjectCodeInput {\n    code: String\n}",
              template: "",
              reducer: "state.code = action.input.code || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-owner-did",
              name: "SET_OWNER_DID",
              description: "",
              schema: "input SetOwnerDidInput {\n    ownerDid: String!\n}",
              template: "",
              reducer: "state.ownerDid = action.input.ownerDid;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-set-project-extensions",
              name: "SET_PROJECT_EXTENSIONS",
              description: "",
              schema:
                "input SetProjectExtensionsInput {\n    extensions: String\n}",
              template: "",
              reducer: "state.extensions = action.input.extensions || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
          ],
        },
        {
          id: "attestations-module",
          name: "attestations",
          description: "Attestation issuer references",
          operations: [
            {
              id: "pr-set-attestation-issuers-uri",
              name: "SET_PROJECT_ATTESTATION_ISSUERS_URI",
              description: "",
              schema:
                "input SetProjectAttestationIssuersUriInput {\n    attestationIssuersURI: URL\n}",
              template: "",
              reducer:
                "state.attestationIssuersURI = action.input.attestationIssuersURI || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
          ],
        },
        {
          id: "relevance-module",
          name: "relevance",
          description:
            "Relevant grant pools the project is applying to or interested in",
          operations: [
            {
              id: "pr-add-relevant-pool",
              name: "ADD_RELEVANT_POOL",
              description: "",
              schema:
                "input AddRelevantPoolInput {\n    id: OID!\n    poolId: PHID!\n    poolName: String!\n}",
              template: "",
              reducer:
                "state.relevantTo.push({\n  id: action.input.id,\n  poolId: action.input.poolId,\n  poolName: action.input.poolName,\n});",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-remove-relevant-pool",
              name: "REMOVE_RELEVANT_POOL",
              description: "",
              schema: "input RemoveRelevantPoolInput {\n    id: OID!\n}",
              template: "",
              reducer:
                "const idx = state.relevantTo.findIndex((r) => r.id === action.input.id);\nif (idx === -1) {\n  throw new RelevantPoolNotFoundError(`Relevant pool ${action.input.id} not found`);\n}\nstate.relevantTo.splice(idx, 1);",
              errors: [
                {
                  id: "err-pr-relevant-pool-not-found",
                  name: "RelevantPoolNotFoundError",
                  code: "RELEVANT_POOL_NOT_FOUND",
                  description: "Relevant pool entry not found.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
          ],
        },
        {
          id: "links-module",
          name: "links",
          description: "Social media + schema.org identity links",
          operations: [
            {
              id: "pr-add-project-social",
              name: "ADD_PROJECT_SOCIAL",
              description: "",
              schema:
                "input AddProjectSocialInput {\n    id: OID!\n    name: String!\n    value: URL!\n}",
              template: "",
              reducer:
                "state.socials.push({\n  id: action.input.id,\n  name: action.input.name,\n  value: action.input.value,\n});",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-remove-project-social",
              name: "REMOVE_PROJECT_SOCIAL",
              description: "",
              schema: "input RemoveProjectSocialInput {\n    id: OID!\n}",
              template: "",
              reducer:
                "const idx = state.socials.findIndex((s) => s.id === action.input.id);\nif (idx === -1) {\n  throw new ProjectSocialNotFoundError(`Social ${action.input.id} not found`);\n}\nstate.socials.splice(idx, 1);",
              errors: [
                {
                  id: "err-pr-social-not-found-remove",
                  name: "ProjectSocialNotFoundError",
                  code: "PROJECT_SOCIAL_NOT_FOUND_REMOVE",
                  description: "Social entry not found.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-update-project-social-url",
              name: "UPDATE_PROJECT_SOCIAL_URL",
              description: "",
              schema:
                "input UpdateProjectSocialUrlInput {\n    id: OID!\n    value: URL!\n}",
              template: "",
              reducer:
                "const s = state.socials.find((x) => x.id === action.input.id);\nif (!s) {\n  throw new ProjectSocialNotFoundError(`Social ${action.input.id} not found`);\n}\ns.value = action.input.value;",
              errors: [
                {
                  id: "err-pr-social-not-found-update",
                  name: "ProjectSocialNotFoundUpdateError",
                  code: "PROJECT_SOCIAL_NOT_FOUND_UPDATE",
                  description: "Social entry not found for update.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-add-project-same-as",
              name: "ADD_PROJECT_SAME_AS",
              description: "",
              schema: "input AddProjectSameAsInput {\n    url: URL!\n}",
              template: "",
              reducer:
                "if (state.sameAs.includes(action.input.url)) {\n  throw new SameAsAlreadyExistsError(`URL already present`);\n}\nstate.sameAs.push(action.input.url);",
              errors: [
                {
                  id: "err-pr-same-as-exists",
                  name: "SameAsAlreadyExistsError",
                  code: "SAME_AS_ALREADY_EXISTS_PROJECT",
                  description: "URL already in sameAs.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "pr-remove-project-same-as",
              name: "REMOVE_PROJECT_SAME_AS",
              description: "",
              schema: "input RemoveProjectSameAsInput {\n    url: URL!\n}",
              template: "",
              reducer:
                "const idx = state.sameAs.indexOf(action.input.url);\nif (idx === -1) {\n  throw new SameAsNotFoundError(`URL not found`);\n}\nstate.sameAs.splice(idx, 1);",
              errors: [
                {
                  id: "err-pr-same-as-not-found",
                  name: "SameAsNotFoundError",
                  code: "SAME_AS_NOT_FOUND_PROJECT",
                  description: "URL not in sameAs.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
          ],
        },
      ],
      version: 1,
      changeLog: [],
    },
  ],
};
