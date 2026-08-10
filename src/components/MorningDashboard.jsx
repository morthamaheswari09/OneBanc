import { useState } from "react";

import MascotHeader from "./MascotHeader";
import MoneyPlan from "./MoneyPlan";
import FlexPocket from "./FlexPocket";
import DailyInsight from "./DailyInsight";

function MorningDashboard({
  initialBudget,
  initialCategories,
  insight,
  onPlanChange,
}) {
  const [budget, setBudget] = useState(initialBudget);

  const [categories, setCategories] =
    useState(initialCategories);

  const categoryTotal = categories.reduce(
    (total, category) =>
      total + category.amount,
    0
  );

  const flexAmount =
    budget - categoryTotal;

  const handleSave = ({
    budget,
    categories,
  }) => {
    setBudget(budget);
    setCategories(categories);

    onPlanChange({
      budget,
      categories,
    });
  };

  return (
    <>
      <MascotHeader state="morning" />

      <div className="dashboard-content">

        <MoneyPlan
          budget={budget}
          categories={categories}
          onSave={handleSave}
        />

        <FlexPocket
          amount={Math.max(flexAmount, 0)}
        />

        <DailyInsight
          insight={insight}
        />

      </div>
    </>
  );
}

export default MorningDashboard;