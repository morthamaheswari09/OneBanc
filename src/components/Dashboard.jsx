import MorningDashboard from "./MorningDashboard";
import AfternoonDashboard from "./AfternoonDashboard";
import EveningDashboard from "./EveningDashboard";

function Dashboard({
  currentTime,
  morningProps,
}) {
  if (currentTime === "9:00 AM") {
    return (
      <MorningDashboard
        {...morningProps}
      />
    );
  }

  if (currentTime === "2:00 PM") {
    return (
      <AfternoonDashboard
        data={morningProps.afternoonData}
      />
    );
  }

  return (
    <EveningDashboard
      data={morningProps.eveningData}
    />
  );
}

export default Dashboard;