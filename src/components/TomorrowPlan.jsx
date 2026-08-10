function TomorrowPlan({ tomorrow }) {
  return (
    <section className="tomorrow-card">

      <div className="tomorrow-icon">
        →
      </div>

      <div className="tomorrow-content">

        <p className="eyebrow">
          TOMORROW
        </p>

        <h3>
          ₹{tomorrow.suggestedBudget.toLocaleString()}
        </h3>

        <p>
          {tomorrow.message}
        </p>

      </div>

    </section>
  );
}

export default TomorrowPlan;