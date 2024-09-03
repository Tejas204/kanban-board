export const cardArray = [
  {
    id: 1,
    cards: [
      {
        'id': 1,
        'title': "Create blog content",
        'short_description': 'Write a blog about your design process and get it ready for publishing',
        'assigned_to': "Tejas Dhopavkar",
        'priority': "high",
        'state_id': 1,
        'due_date': "2024-08-09"
      },
      {
        'id': 2,
        'title': "Configure API",
        'short_description': 'Configure API to fetch card details',
        'assigned_to': "Abhinav Sharma",
        'priority': "medium",
        'state_id': 1,
        'due_date': "2024-08-09"
      }
    ]
  },
  {
    id: 2,
    cards: [
      {
        'id': 3,
        'title': "Improve UI",
        'short_description': 'Redesign card UI',
        'assigned_to': "Omkar Ghagare",
        'priority': "low",
        'state_id': 2,
        'due_date': "2024-08-09"
      },
      {
        'id': 4,
        'title': "Draggable components",
        'short_description': 'Make components draggable',
        'assigned_to': "Advait Naik",
        'priority': "high",
        'state_id': 2,
        'due_date': "2024-08-09"
      },
      {
        'id': 5,
        'title': "Create Login API",
        'short_description': 'Design Login API',
        'assigned_to': "Ninad",
        'priority': "medium",
        'state_id': 3,
        'due_date': "2024-08-09"
      },
      {
        'id': 6,
        'title': "Create Register API",
        'short_description': 'Design register API',
        'assigned_to': "Ritesh",
        'priority': "medium",
        'state_id': 4,
        'due_date': "2024-08-09"
      }
    ]
  },
  {
    id: 3,
    cards: [
      {
        'id': 5,
        'title': "Create Login API",
        'short_description': 'Design Login API',
        'assigned_to': "Ninad",
        'priority': "medium",
        'state_id': 3,
        'due_date': "2024-08-09"
      }
    ]
  },
  {
    id: 4,
    cards: [
      {
        'id': 6,
        'title': "Create Register API",
        'short_description': 'Design register API',
        'assigned_to': "Ritesh",
        'priority': "medium",
        'state_id': 4,
        'due_date': "2024-08-09"
      }
    ]
  }
]

export const stateArray = [
    {
        'id': 1,
        'state': 'Draft'
    },
    {
        'id': 2,
        'state': 'Ready'
    },
    {
        'id': 3,
        'state': 'Work in Progress'
    },
    {
        'id': 4,
        'state': 'Review'
    },
    {
        'id': 5,
        'state': 'Complete'
    }
    
]

export const headerMenuItems = [
  {
    'id': 1,
    'name': "Home",
    "link": "/"
  },
  {
    'id': 2,
    'name': "Board",
    "link": "/card"
  },
  {
    'id': 3,
    'name': "Login",
    "link": "/login"
  },
  {
    'id': 4,
    'name': "Register",
    "link": "/register"
  }
]
