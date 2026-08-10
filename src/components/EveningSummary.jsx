function EveningSummary({ data , streak }) {
  const budgetMaintained =
    data.spent <= data.budget;
  return (
    <section className="evening-summary">

      <div className="evening-label">
        <p className="eyebrow">
          TODAY'S MONEY STORY
        </p>
      </div>

      <div className="evening-result">

        <p className="evening-intro">
  You planned ₹{data.budget.toLocaleString()}.
</p>

        <h2>
          ₹{data.remaining}
        </h2>

        <p className="remaining-message">
          stayed yours today.
        </p>

      </div>

      <div className="evening-stats">

        <div>
          <span>Spent</span>
          <strong>
            ₹{data.spent}
          </strong>
        </div>

        <div>
          <span>Remaining</span>
          <strong>
            ₹{data.remaining}
          </strong>
        </div>

      </div>
        <div className="streak-card">

        <div className="streak-icon">
          🔥
        </div>

        <div className="streak-content">

          <strong>
            {budgetMaintained
              ? `${streak} day streak`
              : "Streak reset"}
          </strong>

          <p>
            {budgetMaintained
              ? "You stayed within the budget you set."
              : "You went over today's budget."}
          </p>

        </div>

      </div>
    </section>
  );
}

export default EveningSummary;