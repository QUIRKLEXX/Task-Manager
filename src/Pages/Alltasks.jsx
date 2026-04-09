import React from 'react'
import addsymbol from '../assets/plus image.svg'
import trashlogo from '../assets/delete-sign.png'
import editlogo from '../assets/edit-symbol.svg'
import { Link } from 'react-router-dom'
import { taskData } from '../db'
import Mappedtasks from '../components/mappedtasks'
import ScrolltoTop from '../components/ScrolltoTop'
const Alltasks = () => {
  return (
    <>
        <main className='wrapper'>
            <section className='flex justify-between items-center font-[500] py-2 md:py-4'>
              <h1 className='text-[25px] md:text-[50px] text-[#292929] font-[500]'>
              My Tasks
              </h1>
              <Link to= '/new-task' className='text-[20px] md:text-[24px] flex gap-3 items-center text-[#974FD0] font-[500]'>
              <img src={addsymbol} alt="add-symbol" className='w-[15px] h-[15px] md:w-[18px] md:h-[18px]'/>
              Add New Task
              </Link>

            </section>


            <section className='flex flex-col gap-10 md:gap-18 items-center'>
            {taskData.map((task)=>{
              const {_id,tag,taskTitle,description} = task
                    
           return(
            <div key={_id} className='border-[#B8B6B6] border-[0.5px] rounded-[10px] py-6 px-2 w-full h-full'>
           <Mappedtasks  taskTitle={taskTitle} _id={_id} description={description} tag={tag}></Mappedtasks>
            <h1>
            </h1>
            </div>
           )
            })}

            <ScrolltoTop/>
            </section>
        </main>
    </>
  )
}

export default Alltasks