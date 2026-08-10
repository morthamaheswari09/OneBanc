import EveningSummary from "./EveningSummary";
import DayRecap from "./DayRecap";
import TomorrowPlan from "./TomorrowPlan";

function EveningDashboard({ data }) {
  return (
    <>

      <header className="evening-header">

        <div>

          <p className="greeting">
            Good evening, Mahi
          </p>

          <h1>
            You made it through the day.
          </h1>

        </div>

        <div className="weather-state">

          <span className="weather-icon smooth">
            🌤️
          </span>

          <div>

            <strong>
              Smooth finish
            </strong>

            <p>
              You stayed within your plan.
            </p>

          </div>

        </div>

      </header>


      <div className="dashboard-content">

        <EveningSummary
          data={data}
        />

        <DayRecap
          categories={data.categories}
        />

        <TomorrowPlan
          tomorrow={data.tomorrow}
        />

      </div>

    </>
  );
}

export default EveningDashboard;