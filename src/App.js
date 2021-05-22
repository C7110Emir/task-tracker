import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Study React Pre-Class Notes',
      day: 'Feb 5th at 2:30pm',
      isDone: false,
    },
    {
      id: 2,
      text: 'Feed the Dog',
      day: 'Feb 6th at 1:30pm',
      isDone: false,
    },
    {
      id: 3,
      text: 'Attend in-Class',
      day: 'Feb 7th at 20:00pm',
      isDone: false,
    },
  ]);

  // Add Task

  // Delete Task
  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  // Toggle Done

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;