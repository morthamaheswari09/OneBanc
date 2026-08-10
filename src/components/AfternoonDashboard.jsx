import MascotHeader from "./MascotHeader";

import AfternoonSummary from "./AfternoonSummary";
import MoneyCompass from "./MoneyCompass";
import DriftInsight from "./DriftInsight";

function AfternoonDashboard({ data }) {
  return (
    <>
      <MascotHeader state="afternoon" />

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