import { useState, useEffect } from "react";

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

  const [streak, setStreak] = useState(() => {
    const savedStreak = localStorage.getItem("onebancStreak");
    return savedStreak ? Number(savedStreak) : 0;
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

  /*
   * Evaluate today's budget only once.
   */
  const evaluateStreak = () => {
    const today = new Date()
      .toISOString()
      .split("T")[0];

    const lastEvaluatedDate =
      localStorage.getItem(
        "onebancLastEvaluatedDate"
      );

    // Already evaluated today
    if (lastEvaluatedDate === today) {
      return streak;
    }

    const budgetMaintained =
      eveningData.spent <= morningPlan.budget;

    let newStreak;

    if (!budgetMaintained) {
      // Budget exceeded
      newStreak = 0;
    } else {
      const yesterday = new Date();

      yesterday.setDate(
        yesterday.getDate() - 1
      );

      const yesterdayString =
        yesterday
          .toISOString()
          .split("T")[0];

      const previousStreak =
        Number(
          localStorage.getItem(
            "onebancStreak"
          )
        ) || 0;

      if (
        lastEvaluatedDate ===
        yesterdayString
      ) {
        // Consecutive successful day
        newStreak = previousStreak + 1;
      } else {
        // First successful day or streak was broken
        newStreak = 1;
      }
    }

    localStorage.setItem(
      "onebancStreak",
      newStreak
    );

    localStorage.setItem(
      "onebancLastEvaluatedDate",
      today
    );

    setStreak(newStreak);

    return newStreak;
  };

  /*
   * Evaluate streak when Evening state is opened.
   */
  const currentEveningData = getEveningData();

      useEffect(() => {
        if (currentTime !== "5:00 PM") {
          return;
        }

        evaluateStreak();
      }, [currentTime]);

  return (
    <main>
      <div className="dashboard">

        {/* Development time switch */}

        {/* { 
        <div className="dev-time-switch">

          <button
            onClick={() =>
              changeTime("9:00 AM")
            }
          >
            9 AM
          </button>

          <button
            onClick={() =>
              changeTime("2:00 PM")
            }
          >
            2 PM
          </button>

          <button
            onClick={() =>
              changeTime("5:00 PM")
            }
          >
            5 PM
          </button>

        </div>
        } */}

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
              currentEveningData,

            streak,

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