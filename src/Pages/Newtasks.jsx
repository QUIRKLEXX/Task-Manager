import React, { useState } from 'react'
import Formm from '../components/Formm'
const Newtasks = () => {
  const [formData, setformData] = useState({
    taskTitle:"",
    description:'',
    tag:''

  })
// syntax for onchange
  const handlechange = (e) =>{
    const {name,value} = e.target;
    setformData((prev)=>({...prev,[name]:value}))
  }
// syntax onsubmit
  const handlesubmit = (e)=>{
    e.preventDefault()
  }
  return ( 
    <>
        <main className='wrapper'>
            <Formm formTitle="New Task" formData={formData} onChange={handlechange} Onsubmit={handlesubmit}/>

        </main>
    </>
  )
}

export default Newtasks