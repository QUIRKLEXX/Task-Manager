import React from 'react'
import { Link  } from 'react-router-dom'
import profileimage from '../assets/face-logo.svg'
import menu from '../assets/menuu.svg'


const Navlinks = (isNew, isTask) => {
    return (
        <>
            <main>
                <div className='hidden md:flex items-center- gap-10'>
                    <ul className='flex items-center gap-10 font-[500] text-[22px] text-[#292929]'>
                        {!isNew && <Link to='/new-task'>New task</Link>}
                        {!isTask && <Link to='/all-tasks'>All Tasks</Link>}

                    </ul>
                    <div>
                        <img src={profileimage} alt="profile-img" />
                    </div>
                </div>
                {/* dropdown */}
                <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn rounded-lg bg-[#974FD0]"><img src={menu} alt="menu-image" /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-[500] text-[22px] text-[#974FD0] border-1 border-[#974FD0]">

                        <li>
                            <Link to='/new-task'>New task</Link>
                        </li>

                        <li>
                            <Link to='/all-tasks'>All Tasks</Link>
                        </li>


                    </ul>
                </div>

            </main>
        </>
    )
}

export default Navlinks     