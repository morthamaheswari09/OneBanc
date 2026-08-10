import React from "react";
import morningMascot from "../assets/mascot/morning.png";
import afternoonMascot from "../assets/mascot/afternoon.png";
import eveningMascot from "../assets/mascot/evening.png";

const MASCOT_STATES = {
  morning: {
    greeting: "Good morning, Mahi 👋",
    subheading: "Let's set your money rhythm.",
    weatherTitle: "Clear day ahead",
    weatherText: "Your plan is ready.",
    badge: "26°C Sunny",
    // bubble: "Fresh start! ☀️",
    gradient: "morning",
    image: morningMascot,
  },

  afternoon: {
    greeting: "Good afternoon, Mahi 👋",
    subheading: "How's your day going?",
    weatherTitle: "A little warm outside",
    weatherText: "Keep an eye on your pace.",
    badge: "31°C Hot",
    // bubble: "Phew... a bit warm! 🥵",
    gradient: "afternoon",
    image: afternoonMascot,
  },

  evening: {
    greeting: "Good evening, Mahi 👋",
    subheading: "You made it through the day.",
    weatherTitle: "A smooth evening",
    weatherText: "Time to see how you did.",
    badge: "27°C Clear",
    // bubble: "What a day! 🌤️",
    gradient: "evening",
    image: eveningMascot,
  },

  rainy: {
    greeting: "Stay dry, Mahi 👋",
    subheading: "Rainy day ahead.",
    weatherTitle: "Looks rainy outside",
    weatherText: "A cozy day for mindful spending.",
    badge: "21°C Rainy",
    bubble: "Staying dry! 🌧️",
    gradient: "rainy",
    image: "/assets/mascot/rainy.png",
  },

  winter: {
    greeting: "Brrr, Mahi! 👋",
    subheading: "It's chilly outside.",
    weatherTitle: "Cold weather today",
    weatherText: "Stay cozy and keep your money warm.",
    badge: "10°C Cold",
    bubble: "So cozy! ❄️",
    gradient: "winter",
    image: "/assets/mascot/winter.png",
  },
};

function MascotHeader({ state = "morning" }) {
  const mascot = MASCOT_STATES[state] || MASCOT_STATES.morning;

  return (
    <div className={`mascot-header mascot-${mascot.gradient}`}>

      {/* TOP SECTION */}
      <div className="mascot-top">

        <div>
          <p className="mascot-greeting">
            {mascot.greeting}
          </p>

          <h1>
            {mascot.subheading}
          </h1>
        </div>

        <div className="mascot-weather-badge">
          {mascot.badge}
        </div>

      </div>

      {/* WEATHER */}
      <div className="mascot-weather">

        <div className="mascot-weather-icon">
          {state === "rainy"
            ? "🌧️"
            : state === "winter"
            ? "❄️"
            : state === "afternoon"
            ? "☀️"
            : state === "evening"
            ? "🌤️"
            : "☀️"}
        </div>

        <div>
          <strong>{mascot.weatherTitle}</strong>
          <p>{mascot.weatherText}</p>
        </div>

      </div>

      {/* MASCOT AREA */}
      <div className="mascot-stage">

        <img
          src={mascot.image}
          alt="Lippy, your money companion"
          className="mascot-image"
        />

        {/* SPEECH BUBBLE */}
        {/* <div className="mascot-bubble">
          {mascot.bubble}

          <span className="bubble-tail" />
        </div> */}

      </div>

    </div>
  );
}

export default MascotHeader;