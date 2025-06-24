import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const [tasks, settasks] = useState('')
    const addTask=(e)=> {
        axios.post('https://mini-task-manager-uxvi.onrender.com/add', {task:tasks})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        e.preventDefault();
        settasks('')
    }
    return (
        <>
            <div>
                <input type="text" placeholder='Enter Task' onChange={(e)=>settasks(e.target.value)} value={tasks}/>
                <button type='button' onClick={addTask}>Add</button>
            </div>
        </>
    )
}

export default Create