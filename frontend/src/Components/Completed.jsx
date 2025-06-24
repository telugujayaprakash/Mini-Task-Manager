import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Completed() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://mini-task-manager-uxvi.onrender.com/get')
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  });

  const handleDelete = (id) => {
    axios.delete(`https://mini-task-manager-uxvi.onrender.com/delete/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const completedTasks = tasks.filter(task => task.completed === true);

  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-xl font-semibold mb-4">Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <h3 className="text-gray-500">No tasks completed 😔</h3>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-md">
          {completedTasks.map(task => (
            <div key={task._id} className="flex items-center justify-between bg-green-100 p-4 rounded shadow" >
              <div className="flex items-center gap-2">
                <input type="checkbox" checked readOnly />
                <p className="line-through text-gray-700">{task.task}</p>
              </div>
              <button type="button" onClick={() => handleDelete(task._id)} className="text-red-600 hover:underline">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Completed;
