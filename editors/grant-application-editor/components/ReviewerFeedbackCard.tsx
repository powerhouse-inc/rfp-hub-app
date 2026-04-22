export function ReviewerFeedbackCard({
  feedback,
}: {
  feedback: string;
}) {
  return (
    <section className="rfp-feedback-card">
      <h3 className="rfp-feedback-card-title">Reviewer feedback</h3>
      <p className="rfp-feedback-card-body">{feedback}</p>
    </section>
  );
}
