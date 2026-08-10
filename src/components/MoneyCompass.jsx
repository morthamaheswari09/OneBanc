function MoneyCompass({ categories }) {
  return (
    <section className="money-compass card">

      <div className="compass-header">

        <div>
          <p className="eyebrow">
            MONEY COMPASS
          </p>

          <h2>
            Plan vs reality
          </h2>
        </div>

        <span className="compass-symbol">
          ◎
        </span>

      </div>

      <div className="compass-list">

        {categories.map((category) => {

          const percentage =
            Math.min(
              (category.spent / category.planned) * 100,
              100
            );

          return (
            <div
              className="compass-row"
              key={category.id}
            >

              <div className="compass-title">

                <div className="category-info">

                  <span className="category-icon">
                    {category.icon}
                  </span>

                  <span>
                    {category.name}
                  </span>

                </div>

                <span className="compass-amount">
                  ₹{category.spent}
                  <small>
                    {" "}/ ₹{category.planned}
                  </small>
                </span>

              </div>

              <div className="compass-track">

                <div
                  className="compass-progress"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

      <p className="compass-caption">
        Spending compared with your morning plan.
      </p>

    </section>
  );
}

export default MoneyCompass;