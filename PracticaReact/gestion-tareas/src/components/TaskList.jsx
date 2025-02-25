function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(index)}
            />
            <span style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}>
              {task.text}
            </span>
            <button onClick={() => onDeleteTask(index)}>
              Eliminar
            </button>
            <button onClick={() => onEditTask(index)}>
              editar
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;
  