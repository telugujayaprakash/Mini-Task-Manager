import React, { useState, useEffect } from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {
    const [tasks, settasks] = useState([])
    useEffect(() => {
        axios.get('https://mini-task-manager-uxvi.onrender.com/get')
        .then(res=>settasks(res.data))
        .catch(err=>console.log(err))
    })
    const handlecheck=(id)=>{
        axios.put(`https://mini-task-manager-uxvi.onrender.com/update/${id}`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const handledelete=(id)=>{
        axios.delete(`https://mini-task-manager-uxvi.onrender.com/delete/${id}`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
  return (
    <>
        <h2>Mini Task Manager App</h2>
        <Create/>
        <div>
            {
            tasks.length===0 ? <h3>No Task Found</h3> :
                tasks.map((task)=>
                    <div key={task._id} className='flex'>
                        <div>
                            {
                                task.completed ? <input type="checkbox" onClick={()=>handlecheck(task._id)} defaultChecked/>: <input type="checkbox" onClick={()=>handlecheck(task._id)}/>
                            }
                            
                        </div>
                        <p>{task.task}</p>
                        <button onClick={()=>{handledelete(task._id)}}>Delete</button>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Home