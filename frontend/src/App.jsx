import "./App.css";
import { useState } from "react";
import AddTaskInput from "./components/AddTaskInput.jsx";
import DisplayTasks from "./components/DisplayTasks.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [refreshTasks, setRefreshTasks] = useState(0);

  return (
    <>
      <Header />
      <AddTaskInput onTaskAdded={() => setRefreshTasks((prev) => prev + 1)} />
      <DisplayTasks refreshTrigger={refreshTasks} />
    </>
  );
}

export default App;
