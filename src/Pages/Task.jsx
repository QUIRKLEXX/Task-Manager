import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Formm from '../components/Formm'
import { taskData } from '../db'
const Task = () => {
   const [formData, setformData] = useState({
      taskTitle:"",
      description:'',
      tag:''
  
    })
    const {taskId} = useParams()
    const findTask = taskData.find((taskdatum)=>String(taskdatum._id) === String(taskId))

    const handlechange = (e) =>{
    const {name,value} = e.target;
    setformData((prev)=>({...prev,[name]:value}))
  }

   const handlesubmit = (e)=>{
    e.preventDefault()
  }

  useEffect(()=>{
    if(findTask){
      setformData({
        taskTitle:findTask.taskTitle || '',
        description:findTask.description || '',
        tag:findTask.tag || ""

      })
    }
  },[findTask])
  return (
    <>
    <main className='wrapper'>
      <Formm formTitle="Edit Task" formData={formData} onChange={handlechange} onSubmit={handlesubmit}/>
    </main>
  </>
  )
}

export default Task