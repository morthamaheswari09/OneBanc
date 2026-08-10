function EveningSummary({ data }) {
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

    </section>
  );
}

export default EveningSummary;