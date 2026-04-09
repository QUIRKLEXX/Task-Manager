import React from 'react'
import edit from '../assets/edit-symbol.svg'
import trash from '../assets/delete-sign.png'
import { Link } from 'react-router-dom'
const Mappedtasks = ({ _id, taskTitle, description, tag }) => {
    return (
        <>
            <div className='flex justify-between items-center border-b-[0.5px] border-[#B8B6B6]'>
                <h3 className={`${tag === 'Urgent' ? 'text-[#F38383]' : 'text-[#73C3A6]'} text-[24px] font[400]`}>{tag}</h3>
                <div className='font-[500] text-[24px] flex items-center gap-4 py-2 '>
                    <button className='flex items-center justify-center bg-[#974FD0] cursor-pointer rounded-[8px] text-[#FAF9FB] h-[42px] w-[50px] md:h-[50px] md:w-[126px] w-[]'>
                        <Link to={`/task-id/${_id}`} className='flex items-center gap-2'>
                            <img src={edit} alt="edit-logo" />
                            <span className='hidden md:block'>Edit</span>
                        </Link>
                    </button>
                    <button className='flex items-center justify-center border-1 border-[#974FD0] cursor-pointer rounded-[8px] text-[#974FD0] h-[42px] w-[50px] md:h-[50px] md:w-[126px]'>
                        <div className='flex items-center gap-2' >

                            <img src={trash} alt="trash-logo"/>
                            <span className='hidden md:block' >Delete</span>
                        </div>
                    </button>

                </div>
            </div>
            <div>
                <h1 className='font-[400] text-[28px] md:text-[35px] text-[#292929]'>
                    {taskTitle}
                </h1>

            </div>
            <div>
                <p className='text-[18px] md:text-[24px] font-[400] text-[#292929]'>
                    {description}
                </p>
            </div>

        </>
    )
}

export default Mappedtasks