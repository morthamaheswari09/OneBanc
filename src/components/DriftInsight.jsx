function DriftInsight({ drift }) {
  return (
    <section className="drift-card">

      <div className="drift-icon">
        ⛅
      </div>

      <div className="drift-content">

        <p className="eyebrow">
          SLIGHT DRIFT
        </p>

        <h3>
          {drift.message}
        </h3>

        <p>
          ₹{drift.remaining} remains in this
          category's plan.
        </p>

      </div>

    </section>
  );
}

export default DriftInsight;