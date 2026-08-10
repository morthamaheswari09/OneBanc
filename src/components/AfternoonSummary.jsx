function AfternoonSummary({ data }) {
  return (
    <section className="afternoon-summary">

      <div className="summary-main">

        <div>
          <p className="eyebrow">
            SPENT TODAY
          </p>

          <h2>
            ₹{data.spent.toLocaleString()}
          </h2>

          <p className="muted">
            ₹{data.remaining.toLocaleString()} remaining
          </p>
        </div>

        <div className="spending-ring">
          <strong>{data.moneyProgress}%</strong>
          <span>used</span>
        </div>

      </div>

      <div className="pace-bar">

        <div
          className="pace-fill"
          style={{
            width: `${data.moneyProgress}%`,
          }}
        />

      </div>

      <div className="pace-labels">

        <span>
          Money used
        </span>

        <span>
          {data.moneyProgress}%
        </span>

      </div>

    </section>
  );
}

export default AfternoonSummary;