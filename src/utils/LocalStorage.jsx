const employees = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare sales report",
        description:
          "Compile and prepare the monthly sales report for the management meeting.",
        date: "2025-07-05",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Follow up with client regarding contract renewal.",
        date: "2025-07-03",
        category: "Client Management",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data entry update",
        description: "Update customer records in the CRM.",
        date: "2025-07-04",
        category: "Data Entry",
      },
    ],
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design new flyer",
        description: "Create a promotional flyer for the upcoming webinar.",
        date: "2025-07-06",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit leave request",
        description: "Submit the leave request form for approval.",
        date: "2025-07-02",
        category: "Admin",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team meeting preparation",
        description: "Prepare agenda for the weekly team meeting.",
        date: "2025-07-07",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Budget planning",
        description: "Draft the Q3 budget proposal for review.",
        date: "2025-07-04",
        category: "Finance",
      },
    ],
  },
  {
    id: 3,
    email: "alice.johnson@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update social media",
        description:
          "Post the new product update on company social media accounts.",
        date: "2025-07-05",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Customer support",
        description: "Handle pending customer support tickets.",
        date: "2025-07-03",
        category: "Support",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Product testing",
        description: "Test the beta version of the upcoming feature.",
        date: "2025-07-06",
        category: "QA",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Create newsletter",
        description: "Draft the monthly newsletter content.",
        date: "2025-07-02",
        category: "Marketing",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Internal training",
        description:
          "Attend the internal training session on productivity tools.",
        date: "2025-07-07",
        category: "Training",
      },
    ],
  },
  {
    id: 4,
    email: "bob.brown@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update website content",
        description: "Revise the homepage banner and about section.",
        date: "2025-07-05",
        category: "Web",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Inventory check",
        description: "Perform weekly inventory check for office supplies.",
        date: "2025-07-03",
        category: "Logistics",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Vendor payment",
        description: "Process payment to vendor for last month’s services.",
        date: "2025-07-04",
        category: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Weekly reporting",
        description: "Generate weekly report for team performance.",
        date: "2025-07-06",
        category: "Reporting",
      },
    ],
  },
  {
    id: 5,
    email: "emma.wilson@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Onboarding new intern",
        description: "Assist with onboarding tasks for the new intern.",
        date: "2025-07-05",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Project update",
        description: "Send project status update to stakeholders.",
        date: "2025-07-03",
        category: "Project Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team feedback collection",
        description:
          "Collect and summarize team feedback for the recent sprint.",
        date: "2025-07-06",
        category: "Feedback",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  console.log(employee,admin)
}