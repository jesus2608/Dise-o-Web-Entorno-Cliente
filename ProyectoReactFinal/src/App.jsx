import React, { useState, useEffect, useContext } from "react";
import { AuthProvider, AuthContext } from "./components/AuthContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import "./App.css";

const AppContent = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const { isLoggedIn, logout } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("/tasks.json")
        .then((response) => response.json())
        .then((data) => setTasks(data));
    }
  }, [isLoggedIn]);
//Añadimos una tarea nueva
  const onAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
//Borrar 
  const deleteTask = (index) => {
    const tarea = tasks.filter((_, i) => i !== index);
    setTasks(tarea);
  };
//Checkboss de completada
  const completada = (index) => {
    const tarea = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(tarea);
  };
//Actualizar que no lo hice bien en la practica pasada y ahora me ha tocado hacerlo bien
  const update = (index, newText) => {
    const tarea = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(tarea);
  };
//filtado
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Gestión de Tareas</h1>
      {isLoggedIn ? (
        <>
          <button onClick={logout} className="logout-button">
            Cerrar Sesión
          </button>
          <TaskForm onAddTask={onAddTask} />
          <div className="filter-buttons">
            <button onClick={() => setFilter("all")}>Todas</button>
            <button onClick={() => setFilter("completed")}>Completadas</button>
            <button onClick={() => setFilter("pending")}>Pendientes</button>
          </div>
          <TaskList
            tasks={filteredTasks}
            onDeleteTask={deleteTask}
            onToggleTask={completada}
            onEditTask={update}
          />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;