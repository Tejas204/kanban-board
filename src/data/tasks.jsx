export const cardArray = [
  {
    id: "100",
    state: "Draft",
    cards: [
      {
        _id: "1",
        title: "Create blog content",
        short_description:
          "Write a blog about your design process and get it ready for publishing",
        assigned_to: "Tejas Dhopavkar",
        priority: 1,
        state_id: "100",
        due_date: "2024-08-09",
      },
      {
        _id: "2",
        title: "Configure API",
        short_description: "Configure API to fetch card details",
        assigned_to: "Abhinav Sharma",
        priority: 2,
        state_id: "100",
        due_date: "2024-08-09",
      },
    ],
  },
  {
    id: "200",
    state: "Ready",
    cards: [
      {
        _id: "3",
        title: "Improve UI",
        short_description: "Redesign card UI",
        assigned_to: "Omkar Ghagare",
        priority: 3,
        state_id: "200",
        due_date: "2024-08-09",
      },
      {
        _id: "4",
        title: "Draggable components",
        short_description: "Make components draggable",
        assigned_to: "Advait Naik",
        priority: 1,
        state_id: "200",
        due_date: "2024-08-09",
      },
    ],
  },
  {
    id: "300",
    state: "Work in progress",
    cards: [
      {
        _id: "5",
        title: "Create Login API",
        short_description: "Design Login API",
        assigned_to: "Ninad",
        priority: 2,
        state_id: "300",
        due_date: "2024-08-09",
      },
    ],
  },
  {
    id: "400",
    state: "Review",
    cards: [
      {
        _id: "6",
        title: "Create Register API",
        short_description: "Design register API",
        assigned_to: "Ritesh",
        priority: 2,
        state_id: "400",
        due_date: "2024-08-09",
      },
    ],
  },
  {
    id: "500",
    state: "Complete",
    cards: [],
  },
];

export const stateArray = [
  {
    id: 1,
    state: "Draft",
  },
  {
    id: 2,
    state: "Ready",
  },
  {
    id: 3,
    state: "Work in Progress",
  },
  {
    id: 4,
    state: "Review",
  },
  {
    id: 5,
    state: "Complete",
  },
];

export const headerMenuItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Board",
    link: "/card",
  },
  {
    id: 3,
    name: "Login",
    link: "/login",
  },
  {
    id: 4,
    name: "Register",
    link: "/register",
  },
  {
    id: 5,
    name: "Logout",
    link: "/",
  },
];

export const priorities = [
  {
    id: 1,
    name: "High",
  },
  {
    id: 2,
    name: "Medium",
  },
  {
    id: 3,
    name: "Low",
  },
];
