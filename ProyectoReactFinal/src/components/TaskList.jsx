import React, { useState } from 'react';

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  const [texto, setTexto] = useState(null);
  const [textoEditado, setTextoEditado] = useState(''); 

  // primer boton de abajo de editar
  const editar = (index, text) => {
    setTexto(index);
    setTextoEditado(text);
  }; 
//confirmar del edit
  const editarConfirm = (index) => {
    if (textoEditado.trim()) {
      onEditTask(index, textoEditado); 
      setTexto(null); 
      setTextoEditado(''); 
    }
  };
//cancel del edit
  const editCancel = () => {
    setTexto(null); 
    setTextoEditado(''); 
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
       
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(index)}
            className="task-checkbox"
          />

   
          {texto === index ? (
            <input
              type="text"
              value={textoEditado}
              onChange={(e) => setTextoEditado(e.target.value)}
              className="task-edit-input"
            />
          ) : (
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
              className="task-text"
            >
              {task.text}
            </span>
          )}

    
          <div className="task-actions">
            {texto === index ? (
              <>
                <button
                  onClick={() => editarConfirm(index)}
                  className="task-button confirm-button"
                >
                  Confirmar
                </button>
                <button
                  onClick={editCancel}
                  className="task-button cancel-button"
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onDeleteTask(index)}
                  className="task-button delete-button"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => editar(index, task.text)}
                  className="task-button edit-button"
                >
                  Editar
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;