import React from 'react'
import navlogo from '../assets/nav-logo.svg'
import { Link, useMatch } from 'react-router-dom'
import Navlinks from '../components/Navlinks'

const Navbar = () => {
    const isTask = useMatch('/all-tasks');
    const isNew = useMatch('/new-task')
    return (
        <>
            <nav className='wrapper flex justify-between border-b-1 border-b-[#B8B6B6]'>

                <div className='flex items-center gap-2'>
                    <Link to='/' className='flex items-center gap-2'>
                        <img src={navlogo} alt="nav-logo" className='w-[39px]' />
                        <span className='font-[600] text-[27px] text-[#2D0050]'>
                            TaskDuty
                        </span>
                    </Link>
                </div>
               <Navlinks isTask={isTask} isNew={isNew}/>
                
            </nav>
        </>
    )
}

export default Navbar   