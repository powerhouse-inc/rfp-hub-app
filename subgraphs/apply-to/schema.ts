import { gql } from "graphql-tag";
import type { DocumentNode } from "graphql";

export const schema: DocumentNode = gql`
  type ApplyToQueries {
    example(driveId: String!): String
  }

  type Query {
    applyTo: ApplyToQueries!
  }

  type Mutation {
    """
    Fusion "Apply" entry point: loads the grant pool, provisions an
    applicant-workspace drive (project + new grant-application), pre-fills the
    application with pool and project refs, links the application to the
    funder drive when the pool is found there, and returns deep-link fields.

    Each call creates a new, distinctly-named applicant drive so multiple
    applicants can apply to the same grant pool without collision.
    """
    applyToPool(input: ApplyToPoolInput!): ApplyToPoolOutput!
  }

  input ApplyToPoolInput {
    """Grant pool PHID the applicant is applying to."""
    grantPoolId: PHID!
    """
    Applicant display name. Required — used as the primary differentiator
    in drive and project naming so funders can tell applicants apart at a glance.
    """
    applicantName: String!
    """
    Optional applicant contact email. When provided, stored on the applicant's
    project document so reviewers can reach out.
    """
    applicantEmail: String
  }

  type ApplyToPoolOutput {
    success: Boolean!
    data: ApplyToPoolData
    errors: [String!]!
  }

  type ApplyToPoolData {
    driveId: PHID!
    applicationId: PHID!
    projectId: PHID!
    driveSlug: String!
    """
    Local Connect open URL; includes document id for opening the new application when supported.
    """
    redirectUrl: String!
  }
`;
