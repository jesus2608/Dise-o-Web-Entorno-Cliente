import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tasks");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [filter, setFilter] = useState('all'); 

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (index, newText) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    ));
  };

  // Returnea segun el estado
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed; 
    if (filter === 'pending') return !task.completed; 
    return true; 
  });

  return (
    <div className="app">
      <h1>Gestión de Tareas - 2º DAW</h1>
      <TaskForm onAddTask={addTask} />
      <div>

        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('completed')}>Completadas</button>
        <button onClick={() => setFilter('pending')}>Pendientes</button>
      </div>
      <TaskList
        tasks={filteredTasks} 
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        onEditTask={editTask}
      />
    </div>
  );
}

export default App;
