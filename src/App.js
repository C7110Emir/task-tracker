import { useState,useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import axios from 'axios';


function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json();
    setTasks(data)
  }

  useEffect(()=>{
    fetchTasks();
  })

  
  // Add Task
  const addTask = async (task) =>{
    const res = await fetch("http://localhost:5000/tasks", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    fetchTasks()
  }

  // Delete Task
  const deleteTask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"DELETE"
    })
    fetchTasks()
  }

  // Toggle Done
  const toggleDone = async (toggleDoneId) => {
    const res = await fetch(`http://localhost:5000/tasks/${toggleDoneId}`)
    const data = await res.json()
    const updatedTask = {...data, isDone: !data.isDone}

  const updatedRes = await fetch(`http://localhost:5000/tasks/${toggleDoneId}`,{
    method:"PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedTask)
  })
  fetchTasks()
  };

  // Toggle Show
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;