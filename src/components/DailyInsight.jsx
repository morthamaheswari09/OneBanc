function DailyInsight({ insight }) {
  return (
    <section className="insight-card">

      <div className="insight-icon">
        💡
      </div>

      <div>
        <p className="eyebrow">{insight.title}</p>

        <p className="insight-text">
          {insight.description}
        </p>
      </div>

      <button className="arrow-button">
        →
      </button>

    </section>
  );
}

export default DailyInsight;