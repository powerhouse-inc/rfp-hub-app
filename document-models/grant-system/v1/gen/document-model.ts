import type { DocumentModelGlobalState } from "document-model";

export const documentModel: DocumentModelGlobalState = {
  id: "rfp-hub/grant-system",
  name: "GrantSystem",
  author: {
    name: "Powerhouse",
    website: "https://www.powerhouse.inc/",
  },
  extension: "rfps",
  description:
    "DAOIP-5 Grant System \u2014 the organizational entity (DAO, Foundation, Program) that administers grant pools and issues RFPs.",
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
            "type GrantSystemState {\n  # DAOIP-5 canonical\n  name: String\n  type: GrantSystemType\n  grantPoolsURI: URL\n  extensions: String\n\n  # schema.org/Grant additions (non-breaking)\n  sameAs: [URL!]!\n\n  # Powerhouse profile additions\n  code: String\n  description: String\n  image: URL\n  coverImage: URL\n  email: EmailAddress\n  contactName: String\n  socials: [Social!]!\n\n  # Publisher verification lifecycle\n  verificationState: VerificationState!\n  verificationMethod: VerificationMethod\n  verifiedAt: DateTime\n  verifiedBy: String\n  revokedAt: DateTime\n  revocationReason: String\n  publisherWallet: EthereumAddress\n}\n\nenum GrantSystemType {\n  DAO\n  FOUNDATION\n  PROTOCOL\n  COMPANY\n  PROGRAM\n  PERSON\n  OTHER\n}\n\nenum VerificationState {\n  UNVERIFIED\n  PENDING_REVIEW\n  VERIFIED\n  SUSPENDED\n  REVOKED\n}\n\nenum VerificationMethod {\n  MANUAL_REVIEW\n  DOMAIN_VERIFICATION\n  WALLET_SIGNATURE\n  THIRD_PARTY_ATTESTATION\n}\n\ntype Social {\n  id: OID!\n  platform: SocialPlatform!\n  url: URL!\n}\n\nenum SocialPlatform {\n  TWITTER\n  DISCORD\n  TELEGRAM\n  GITHUB\n  LINKEDIN\n  FARCASTER\n  LENS\n  MIRROR\n  WEBSITE\n}\n",
          examples: [],
          initialValue:
            '{"name": null, "type": null, "grantPoolsURI": null, "extensions": null, "sameAs": [], "code": null, "description": null, "image": null, "coverImage": null, "email": null, "contactName": null, "socials": [], "verificationState": "UNVERIFIED", "verificationMethod": null, "verifiedAt": null, "verifiedBy": null, "revokedAt": null, "revocationReason": null, "publisherWallet": null}',
        },
      },
      modules: [
        {
          id: "identity-module",
          name: "identity",
          description: "Core DAOIP-5 identity + Powerhouse profile fields",
          operations: [
            {
              id: "gs-set-type",
              name: "SET_TYPE",
              description: "",
              schema: "input SetTypeInput {\n    type: GrantSystemType!\n}",
              template: "",
              reducer: "state.type = action.input.type;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-set-code",
              name: "SET_CODE",
              description: "",
              schema: "input SetCodeInput {\n    code: String\n}",
              template: "",
              reducer: "state.code = action.input.code || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-set-description",
              name: "SET_DESCRIPTION",
              description: "",
              schema: "input SetDescriptionInput {\n    description: String\n}",
              template: "",
              reducer: "state.description = action.input.description || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-set-grant-pools-uri",
              name: "SET_GRANT_POOLS_URI",
              description: "",
              schema:
                "input SetGrantPoolsUriInput {\n    grantPoolsURI: URL\n}",
              template: "",
              reducer:
                "state.grantPoolsURI = action.input.grantPoolsURI || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-set-extensions",
              name: "SET_EXTENSIONS",
              description: "",
              schema: "input SetExtensionsInput {\n    extensions: String\n}",
              template: "",
              reducer: "state.extensions = action.input.extensions || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-set-image",
              name: "SET_IMAGE",
              description: "",
              schema: "input SetImageInput {\n    image: URL\n}",
              template: "",
              reducer: "state.image = action.input.image || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-set-cover-image",
              name: "SET_COVER_IMAGE",
              description: "",
              schema: "input SetCoverImageInput {\n    coverImage: URL\n}",
              template: "",
              reducer: "state.coverImage = action.input.coverImage || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-set-email",
              name: "SET_EMAIL",
              description: "",
              schema: "input SetEmailInput {\n    email: EmailAddress\n}",
              template: "",
              reducer: "state.email = action.input.email || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-set-contact-name",
              name: "SET_CONTACT_NAME",
              description: "",
              schema: "input SetContactNameInput {\n    contactName: String\n}",
              template: "",
              reducer: "state.contactName = action.input.contactName || null;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-set-org-name",
              name: "SET_ORG_NAME",
              description: "",
              schema: "input SetOrgNameInput {\n    name: String!\n}",
              template: "",
              reducer: "state.name = action.input.name;",
              errors: [],
              examples: [],
              scope: "global",
            },
          ],
        },
        {
          id: "links-module",
          name: "links",
          description: "Schema.org identity aliases and social media links",
          operations: [
            {
              id: "gs-add-same-as",
              name: "ADD_SAME_AS",
              description: "",
              schema: "input AddSameAsInput {\n    url: URL!\n}",
              template: "",
              reducer:
                "if (state.sameAs.includes(action.input.url)) {\n  throw new SameAsAlreadyExistsError(`URL ${action.input.url} already in sameAs list`);\n}\nstate.sameAs.push(action.input.url);",
              errors: [
                {
                  id: "err-same-as-exists",
                  name: "SameAsAlreadyExistsError",
                  code: "SAME_AS_ALREADY_EXISTS",
                  description:
                    "Attempted to add a URL that is already present in the sameAs list.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-remove-same-as",
              name: "REMOVE_SAME_AS",
              description: "",
              schema: "input RemoveSameAsInput {\n    url: URL!\n}",
              template: "",
              reducer:
                "const idx = state.sameAs.indexOf(action.input.url);\nif (idx === -1) {\n  throw new SameAsNotFoundError(`URL ${action.input.url} not in sameAs list`);\n}\nstate.sameAs.splice(idx, 1);",
              errors: [
                {
                  id: "err-same-as-not-found",
                  name: "SameAsNotFoundError",
                  code: "SAME_AS_NOT_FOUND",
                  description:
                    "Attempted to remove a URL that is not present in the sameAs list.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-add-social",
              name: "ADD_SOCIAL",
              description: "",
              schema:
                "input AddSocialInput {\n    id: OID!\n    platform: SocialPlatform!\n    url: URL!\n}",
              template: "",
              reducer:
                "state.socials.push({\n  id: action.input.id,\n  platform: action.input.platform,\n  url: action.input.url,\n});",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-remove-social",
              name: "REMOVE_SOCIAL",
              description: "",
              schema: "input RemoveSocialInput {\n    id: OID!\n}",
              template: "",
              reducer:
                "const idx = state.socials.findIndex((s) => s.id === action.input.id);\nif (idx === -1) {\n  throw new SocialNotFoundError(`Social with id ${action.input.id} not found`);\n}\nstate.socials.splice(idx, 1);",
              errors: [
                {
                  id: "err-social-not-found-remove",
                  name: "SocialNotFoundError",
                  code: "SOCIAL_NOT_FOUND_REMOVE",
                  description:
                    "Attempted to remove a social link with an unknown id.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-update-social-url",
              name: "UPDATE_SOCIAL_URL",
              description: "",
              schema:
                "input UpdateSocialUrlInput {\n    id: OID!\n    url: URL!\n}",
              template: "",
              reducer:
                "const social = state.socials.find((s) => s.id === action.input.id);\nif (!social) {\n  throw new SocialNotFoundError(`Social with id ${action.input.id} not found`);\n}\nsocial.url = action.input.url;",
              errors: [
                {
                  id: "err-social-not-found-update",
                  name: "SocialNotFoundUpdateError",
                  code: "SOCIAL_NOT_FOUND_UPDATE",
                  description:
                    "Attempted to update a social link with an unknown id.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
          ],
        },
        {
          id: "verification-module",
          name: "verification",
          description: "Publisher verification lifecycle operations",
          operations: [
            {
              id: "gs-set-publisher-wallet",
              name: "SET_PUBLISHER_WALLET",
              description: "",
              schema:
                "input SetPublisherWalletInput {\n    publisherWallet: EthereumAddress!\n}",
              template: "",
              reducer: "state.publisherWallet = action.input.publisherWallet;",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-request-verification",
              name: "REQUEST_VERIFICATION",
              description: "",
              schema:
                "input RequestVerificationInput {\n    requestedAt: DateTime!\n}",
              template: "",
              reducer:
                'if (state.verificationState !== "UNVERIFIED") {\n  throw new InvalidStateTransitionError(\n    `Cannot request verification from state ${state.verificationState}; must be UNVERIFIED`\n  );\n}\nstate.verificationState = "PENDING_REVIEW";',
              errors: [
                {
                  id: "err-invalid-transition-request",
                  name: "InvalidStateTransitionError",
                  code: "INVALID_STATE_TRANSITION_REQUEST",
                  description:
                    "Invalid state transition for verification lifecycle.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-approve-verification",
              name: "APPROVE_VERIFICATION",
              description: "",
              schema:
                "input ApproveVerificationInput {\n    verifiedBy: String!\n    method: VerificationMethod!\n    verifiedAt: DateTime!\n}",
              template: "",
              reducer:
                'if (state.verificationState !== "PENDING_REVIEW") {\n  throw new InvalidStateTransitionError(\n    `Cannot approve verification from state ${state.verificationState}; must be PENDING_REVIEW`\n  );\n}\nstate.verificationState = "VERIFIED";\nstate.verifiedBy = action.input.verifiedBy;\nstate.verificationMethod = action.input.method;\nstate.verifiedAt = action.input.verifiedAt;\nstate.revokedAt = null;\nstate.revocationReason = null;',
              errors: [
                {
                  id: "err-invalid-transition-approve",
                  name: "InvalidApproveStateError",
                  code: "INVALID_STATE_TRANSITION_APPROVE",
                  description:
                    "Cannot approve verification unless state is PENDING_REVIEW.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-reject-verification",
              name: "REJECT_VERIFICATION",
              description: "",
              schema:
                "input RejectVerificationInput {\n    reason: String!\n    rejectedAt: DateTime!\n}",
              template: "",
              reducer:
                'if (state.verificationState !== "PENDING_REVIEW") {\n  throw new InvalidStateTransitionError(\n    `Cannot reject verification from state ${state.verificationState}; must be PENDING_REVIEW`\n  );\n}\nstate.verificationState = "UNVERIFIED";',
              errors: [
                {
                  id: "err-invalid-transition-reject",
                  name: "InvalidRejectStateError",
                  code: "INVALID_STATE_TRANSITION_REJECT",
                  description:
                    "Cannot reject verification unless state is PENDING_REVIEW.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-suspend-verification",
              name: "SUSPEND_VERIFICATION",
              description: "",
              schema:
                "input SuspendVerificationInput {\n    reason: String!\n    suspendedAt: DateTime!\n}",
              template: "",
              reducer:
                'if (state.verificationState !== "VERIFIED") {\n  throw new InvalidStateTransitionError(\n    `Cannot suspend from state ${state.verificationState}; must be VERIFIED`\n  );\n}\nstate.verificationState = "SUSPENDED";\nstate.revocationReason = action.input.reason;',
              errors: [
                {
                  id: "err-invalid-transition-suspend",
                  name: "InvalidSuspendStateError",
                  code: "INVALID_STATE_TRANSITION_SUSPEND",
                  description: "Cannot suspend unless state is VERIFIED.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-revoke-verification",
              name: "REVOKE_VERIFICATION",
              description: "",
              schema:
                "input RevokeVerificationInput {\n    reason: String!\n    revokedAt: DateTime!\n}",
              template: "",
              reducer:
                'if (state.verificationState !== "VERIFIED") {\n  throw new InvalidStateTransitionError(\n    `Cannot revoke from state ${state.verificationState}; must be VERIFIED`\n  );\n}\nstate.verificationState = "REVOKED";\nstate.revokedAt = action.input.revokedAt;\nstate.revocationReason = action.input.reason;',
              errors: [
                {
                  id: "err-invalid-transition-revoke",
                  name: "InvalidRevokeStateError",
                  code: "INVALID_STATE_TRANSITION_REVOKE",
                  description: "Cannot revoke unless state is VERIFIED.",
                  template: "",
                },
              ],
              examples: [],
              scope: "global",
            },
            {
              id: "gs-reinstate-verification",
              name: "REINSTATE_VERIFICATION",
              description: "",
              schema:
                "input ReinstateVerificationInput {\n    reinstatedBy: String!\n    verifiedAt: DateTime!\n}",
              template: "",
              reducer:
                'if (state.verificationState !== "SUSPENDED" && state.verificationState !== "REVOKED") {\n  throw new InvalidStateTransitionError(\n    `Cannot reinstate from state ${state.verificationState}; must be SUSPENDED or REVOKED`\n  );\n}\nstate.verificationState = "VERIFIED";\nstate.verifiedBy = action.input.reinstatedBy;\nstate.verifiedAt = action.input.verifiedAt;\nstate.revokedAt = null;\nstate.revocationReason = null;',
              errors: [
                {
                  id: "err-invalid-transition-reinstate",
                  name: "InvalidReinstateStateError",
                  code: "INVALID_STATE_TRANSITION_REINSTATE",
                  description:
                    "Cannot reinstate unless state is SUSPENDED or REVOKED.",
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
