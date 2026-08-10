import { useState } from "react";

function MoneyPlan({ budget, categories, onSave }) {
  const [isEditing, setIsEditing] = useState(false);

  const [draftBudget, setDraftBudget] = useState(budget);

  const [draftCategories, setDraftCategories] =
    useState(categories);

  const categoryTotal = draftCategories.reduce(
    (total, category) => total + category.amount,
    0
  );

  const flexAmount = draftBudget - categoryTotal;

 const handleChange = (id, value) => {
  const amount = normalizeAmount(value);

  setDraftCategories((current) =>
    current.map((category) =>
      category.id === id
        ? { ...category, amount }
        : category
    )
  );
};
  const normalizeAmount = (value) => {
  if (value === "") {
    return 0;
  }

  return Number(value);
};
 const handleBudgetChange = (value) => {
  setDraftBudget(normalizeAmount(value));
};

  const handleEdit = () => {
    setDraftBudget(budget);
    setDraftCategories(categories);
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave({
      budget: draftBudget,
      categories: draftCategories,
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraftBudget(budget);
    setDraftCategories(categories);
    setIsEditing(false);
  };

  return (
    <>
      <section className="money-plan card">

        <div className="section-header">
          <div>
            <p className="eyebrow">MY DAY</p>

            <h2>₹{budget.toLocaleString()}</h2>

            <p className="muted">
              planned for today
            </p>
          </div>

          <button
            className="edit-button"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>

        <div className="category-list">

          {categories.map((category) => (
            <div
              className="category-row"
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

              <span className="category-amount">
                ₹{category.amount}
              </span>

            </div>
          ))}

        </div>

        <div className="allocated">

          <span>
            ₹{budget.toLocaleString()} planned
          </span>

          <span>
            Flex included
          </span>

        </div>

      </section>

      {isEditing && (

        <div className="edit-overlay">

          <div className="edit-sheet">

            <div className="sheet-handle" />

            <div className="sheet-header">

              <div>

                <p className="eyebrow">
                  MY DAY
                </p>

                <h2>
                  Set your plan
                </h2>

                <p className="sheet-description">
                  Adjust today's budget and categories.
                </p>

              </div>

              <button
                className="close-button"
                onClick={handleCancel}
              >
                ×
              </button>

            </div>


            {/* DAILY BUDGET */}

            <div className="budget-editor">

              <div>

                <p className="eyebrow">
                  TODAY'S BUDGET
                </p>

                <p className="budget-helper">
                  Your total spending plan
                </p>

              </div>

              <div className="budget-input">

                <span>₹</span>

                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={draftBudget}
                  onChange={(e) =>
                    handleBudgetChange(
                      e.target.value
                    )
                  }
                />

              </div>

            </div>


            {/* ALLOCATION */}

            <p className="allocation-label">
              YOUR ALLOCATION
            </p>

            <div className="edit-category-list">

              {draftCategories.map((category) => (

                <div
                  className="edit-category"
                  key={category.id}
                >

                  <div className="edit-category-name">

                    <span className="category-icon">
                      {category.icon}
                    </span>

                    <span>
                      {category.name}
                    </span>

                  </div>

                  <div className="amount-input">

                    <span>₹</span>

                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={category.amount}
                        onChange={(e) =>
                            handleChange(
                            category.id,
                            e.target.value
                            )
                        }
                        />

                  </div>

                </div>

              ))}

            </div>


            {/* FLEX */}

            <div
              className={`flex-preview ${
                flexAmount < 0
                  ? "flex-negative"
                  : ""
              }`}
            >

              <span>
                ✦ Flex Pocket
              </span>

              <strong>
                ₹{Math.max(flexAmount, 0)}
              </strong>

            </div>


            {flexAmount < 0 && (

              <p className="budget-warning">

                Your categories are ₹
                {Math.abs(flexAmount)}
                {" "}over today's budget.

                <br />

                Increase your budget or
                adjust an allocation.

              </p>

            )}


            <button
              className="save-plan-button"
              onClick={handleSave}
              disabled={
                draftBudget <= 0 ||
                flexAmount < 0
              }
            >
              Save today's plan
            </button>

          </div>

        </div>

      )}

    </>
  );
}

export default MoneyPlan;