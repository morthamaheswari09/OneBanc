import AfternoonSummary from "./AfternoonSummary";
import MoneyCompass from "./MoneyCompass";
import DriftInsight from "./DriftInsight";

function AfternoonDashboard({ data }) {
  return (
    <>

      <header className="afternoon-header">

        <div>

          <p className="greeting">
            Good afternoon, Mahi
          </p>

          <h1>
            How's your day going?
          </h1>

        </div>

        <div className="weather-state">

          <span className="weather-icon drifting">
            ⛅
          </span>

          <div>

            <strong>
              Slight drift
            </strong>

            <p>
              Still within your plan.
            </p>

          </div>

        </div>

      </header>

      <div className="dashboard-content">

        <AfternoonSummary
          data={data}
        />

        <MoneyCompass
          categories={data.categories}
        />

        <DriftInsight
          drift={data.drift}
        />

      </div>

    </>
  );
}

export default AfternoonDashboard;