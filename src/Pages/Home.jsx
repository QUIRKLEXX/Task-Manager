import React from 'react'
import heroimage from '../assets/hero-img.svg'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <main className='wrapper grid lg:grid-cols-4 lg:gap-35 gap-10 items-center' >
                <section className='col-span-2 order-2 lg:order-1    md:pt-6'>
                    <h1 className='text-[36px] md:text-[40px] font-[500]'>
                        <span className='text-[#292929]' >
                            Manage your Tasks on
                            <br />
                        </span>
                        <span className='text-[#974FD0]'>
                            TaskDuty
                        </span>

                    </h1>
                    <p className='font-[400] text-[20px] md:text-[24px] text-[#737171] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
                    <div className='mt-5'>
                        <button  className='text-[#FAF9FB] rounded-[8px] w-full lg:w-[201px] md:h-[60px] h-[50px] bg-[#974FD0] font-[500px] text-[12px] md:text-[24px] py-1 px-4'>
                           <Link to="/all-tasks">
                           Go to My Tasks
                           </Link>
                        </button>
                    </div>
                </section>
                <section className='col-span-2 order-1 lg:order-2 pt-8'>
                <img src={heroimage} alt="hero-image" className='w-full' />
                </section>
            </main>
        </>
    )
}

export default Home