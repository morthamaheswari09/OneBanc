export const dayData = {
  budget: 1200,

  categories: [
    {
      id: "food",
      name: "Food",
      icon: "🍔",
      amount: 350,
    },
    {
      id: "grocery",
      name: "Grocery",
      icon: "🛒",
      amount: 250,
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: "🛍",
      amount: 180,
    },
    {
      id: "travel",
      name: "Travel",
      icon: "🚕",
      amount: 180,
    },
    {
      id: "others",
      name: "Others",
      icon: "•••",
      amount: 90,
    },
  ],

  flexPocket: 150,

  insight: {
    title: "A little heads-up",
    description: "Your electricity bill of ₹850 is due today.",
  },
};


/* =========================
   2 PM — DRIFTING
========================= */
export const afternoonData = {
  time: "2:00 PM",

  spent: 550,

  remaining: 650,

  categories: [
    {
      id: "food",
      name: "Food",
      icon: "🍔",
      planned: 350,
      spent: 280,
    },
    {
      id: "grocery",
      name: "Grocery",
      icon: "🛒",
      planned: 250,
      spent: 120,
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: "🛍",
      planned: 180,
      spent: 20,
    },
    {
      id: "travel",
      name: "Travel",
      icon: "🚕",
      planned: 180,
      spent: 130,
    },
    {
      id: "others",
      name: "Others",
      icon: "•••",
      planned: 90,
      spent: 0,
    },
  ],

  dayProgress: 58,
  moneyProgress: 46,

  drift: {
    category: "Travel",
    message:
      "Travel is moving a little faster than planned.",
    remaining: 50,
  },
};

/* =========================
   5 PM — SMOOTH
========================= */

export const eveningData = {
  time: "5:00 PM",

  spent: 1300,

  remaining: 380,

  categories: [
    {
      id: "food",
      name: "Food",
      icon: "🍔",
      spent: 320,
    },
    {
      id: "grocery",
      name: "Grocery",
      icon: "🛒",
      spent: 180,
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: "🛍",
      spent: 120,
    },
    {
      id: "travel",
      name: "Travel",
      icon: "🚕",
      spent: 150,
    },
    {
      id: "others",
      name: "Others",
      icon: "•••",
      spent: 50,
    },
  ],

  insight: {
    title: "Nice. ₹380 stayed yours.",
    description:
      "You finished today below your planned spending.",
  },

  tomorrow: {
    suggestedBudget: 1150,
    message:
      "A little lower than today, based on how you spent.",
  },
};