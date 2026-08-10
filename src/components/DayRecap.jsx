function DayRecap({ categories }) {
  return (
    <section className="day-recap card">

      <div className="recap-header">

        <div>
          <p className="eyebrow">
            TODAY'S BREAKDOWN
          </p>

          <h2>
            Where it went
          </h2>
        </div>

        <span className="recap-icon">
          ✓
        </span>

      </div>

      <div className="recap-list">

        {categories.map((category) => (
          <div
            className="recap-row"
            key={category.id}
          >

            <div className="category-info">

              <span className="category-icon">
                {category.icon}
              </span>

              <span>
                {category.name}
              </span>

            </div>

            <strong>
              ₹{category.spent}
            </strong>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DayRecap;