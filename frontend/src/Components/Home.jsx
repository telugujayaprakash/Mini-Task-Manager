import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
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

  return (
    <div className="flex flex-col items-center mt-6">
      {tasks.length === 0 ? (
        <h3 className="text-gray-600">No Task Found</h3>
      ) : (
        <div className="flex flex-col gap-y-4 w-full max-w-md">
          {tasks.map((task) => (
            <div key={task._id} className="flex items-center justify-between bg-blue-100 p-4 rounded shadow" >
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={task.completed} onChange={() => handleCheck(task._id)} />
                <p className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.task}
                </p>
              </div>
              <button className="text-red-500 hover:underline" onClick={() => handleDelete(task._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
