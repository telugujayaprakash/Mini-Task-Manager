import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Pending() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://mini-task-manager-uxvi.onrender.com/get')
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  });

  const handleCheck = (id) => {
    axios.put(`https://mini-task-manager-uxvi.onrender.com/update/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`https://mini-task-manager-uxvi.onrender.com/delete/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const pendingTasks = tasks.filter(task => task.completed === false);

  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-xl font-semibold mb-4">Pending Tasks</h2>
      {pendingTasks.length === 0 ? (
        <h3 className="text-gray-500">No pending tasks 😊</h3>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-md">
          {pendingTasks.map(task => (
            <div
              key={task._id}
              className="flex items-center justify-between bg-yellow-100 p-4 rounded shadow"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onClick={() => handleCheck(task._id)}
                />
                <p className="text-gray-800">{task.task}</p>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(task._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Pending;
