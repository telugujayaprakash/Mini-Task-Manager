import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [tasks, settasks] = useState('');

  const addTask = (e) => {
    axios.post('https://mini-task-manager-uxvi.onrender.com/add', { task: tasks })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    
    e.preventDefault();
    settasks('');
  };

  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="bg-blue-50 p-4 rounded shadow flex gap-4 w-full max-w-md">
          <input type="text" placeholder="Enter Task" preventDefault onChange={(e) => settasks(e.target.value)} value={tasks} className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="button"  onClick={addTask} preventDefault  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Create;
