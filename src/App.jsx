import { useState } from "react";

import "./App.css";

import Dashboard from "./components/Dashboard";
import BottomNav from "./components/BottomNav";

import {
  dayData,
  afternoonData,
  eveningData,
} from "./data/mockData";
const getTimeState = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "9:00 AM";
  }

  if (hour < 17) {
    return "2:00 PM";
  }

  return "5:00 PM";
};
function App() {
  const [currentTime, setCurrentTime] =
    useState(getTimeState);

  const [morningPlan, setMorningPlan] =
    useState({
      budget: dayData.budget,
      categories: dayData.categories,
    });
    const changeTime = (time) => {
  setCurrentTime(time);
};
    const getAfternoonData = () => {
  const updatedCategories =
    afternoonData.categories.map((category) => {
      const morningCategory =
        morningPlan.categories.find(
          (item) => item.id === category.id
        );

      return {
        ...category,
        planned:
          morningCategory?.amount ??
          category.planned,
      };
    });

  return {
    ...afternoonData,

    categories: updatedCategories,

    remaining:
      morningPlan.budget -
      afternoonData.spent,

    moneyProgress:
      Math.round(
        (afternoonData.spent /
          morningPlan.budget) *
          100
      ),
  };
};
const getEveningData = () => {
  return {
    ...eveningData,

    budget: morningPlan.budget,

    remaining:
      morningPlan.budget -
      eveningData.spent,
  };
};
  return (
    <main className="app">

      <div className="dashboard">
        {/* <div className="dev-time-switch">
            <button onClick={() => changeTime("9:00 AM")}>
              9 AM
            </button>

            <button onClick={() => changeTime("2:00 PM")}>
              2 PM
            </button>

            <button onClick={() => changeTime("5:00 PM")}>
              5 PM
            </button>
          </div> */}
        <Dashboard
          currentTime={currentTime}

          morningProps={{
            initialBudget:
              morningPlan.budget,

            initialCategories:
              morningPlan.categories,

            insight:
              dayData.insight,

            afternoonData:
              getAfternoonData(),

            eveningData:
              getEveningData(),

            onPlanChange:
              setMorningPlan,
          }}
        />

        <BottomNav />

      </div>

    </main>
  );
}

export default App;