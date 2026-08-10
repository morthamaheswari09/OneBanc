import EveningSummary from "./EveningSummary";
import DayRecap from "./DayRecap";
import TomorrowPlan from "./TomorrowPlan";
import MascotHeader from "./MascotHeader";

function EveningDashboard({ data , streak }) {
  return (
    <>
      <MascotHeader state="evening" />

      <div className="dashboard-content">
        <EveningSummary
          data={data}
          streak={streak}
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