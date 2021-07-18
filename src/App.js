// Hi!

// We'll be creating a "Todo App", which is a well-known app type
// for learning basic concepts of web/mobile frameworks.

// We will go through slides and build the app together during the
// React intro workshops at Selleo.

const todos = [
  { title: "Learn ReactJS", isDone: false, isArchived: false },
  { title: "Attend ReactJS workshops", isDone: true, isArchived: false },
  { title: "Learn Ruby on Rails", isDone: true, isArchived: false },
  { title: "Attend Ruby on Rails workshops", isDone: true, isArchived: false },
  {
    title: "This one shouldn't be visible - archived",
    isDone: true,
    isArchived: true,
  },
];

const App = () => {
  return (
    <div className="main__wrapper">
      <h1 className="main__title">👋 Hello from Selleo</h1>
    </div>
  );
};

export default App;
