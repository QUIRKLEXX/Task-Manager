import React from 'react'
import previouslogo from '../assets/previouslogo.svg'
import { Link } from 'react-router-dom'
import ScrolltoTop from '../components/ScrolltoTop'
const Formm = ({ formTitle, formData, onChange, onSubmit }) => {

    return ( 
        <>
            <main>
                <div className='flex items-center gap-4 pb-15'>
                    <Link to='/all-tasks' className='flex items-center gap-4'>
                        <img src={previouslogo} alt="previous-logo" className='w-[15px] md:w[18px] h-[26px] md:h-[36px]' />
                        <span className='font-[400] text-[35px] md:text-[50px] text-[#292929]'>
                            {formTitle}
                        </span>
                    </Link>

                </div>
                <form OnSubmit={onSubmit} className='flex flex-col gap-110 md:gap-20' >
<div className='relative'>
    <label htmlFor="task-title" className='absolute bottom-15 left-9 bg-white font-[400] text-[30px] text-[#9C9C9C]'>Task Title</label>
    <input type="text" className='w-full border-1 border-[#B8B6B6] rounded-[5px] py-6 h-[84px] outline-none ps-10 placeholder:text-[#CCCCCC] placeholder:text-[20px] md:placeholder:text-[22px] placeholder:font-400' placeholder='E.g Project Defense Assignment ...' id='task-title' value={formData.taskTitle} onChange={onChange} name='taskTitle'/>
</div>
<div className='relative'>
    <label htmlFor="description" className='absolute bottom-58 left-9 bg-white font-[400] text-[30px] text-[#9C9C9C]'>Description</label>
<textarea name="description" id="description" className='w-full border-1 border-[#B8B6B6] rounded-[5px] py-6 h-[250px] outline-none ps-10 placeholder:text-[#CCCCCC] placeholder:text-[20px] md:placeholder:text-[22px] placeholder:font-400' value={formData.description} onChange={onChange} placeholder='Briefly describe your task...'></textarea>
</div>

<div className='flex flex-col relative'>
<label htmlFor="tag" className='absolute bottom-9 left-9 bg-white font-[400] text-[30px] text-[#9C9C9C]'>Tags</label>
<select name="tag" id="tag" className='border-1 outline-none h-15 border-[#B8B6B6] rounded-[15px] ps-9' value={formData.tag} onChange={onChange}>
    <option className='text-[red] font-[400] text-[22px]' value="" disabled selected > 
        {" "}
        Urgent / Important</option>
    <option value="Urgent">Urgent</option>
    <option value="Important">Important</option>
</select>
</div>
<div>
    <button className='text-[#FAF9FB] text-[35px] font-[500] w-full h-[70px] rounded-[8px] bg-[#974FD0] cursor-pointer'>DONE</button>
</div>
<div className='py-5'>
    <ScrolltoTop/>
</div>
                </form>

            </main>
        </>
    );
};

export default Formm