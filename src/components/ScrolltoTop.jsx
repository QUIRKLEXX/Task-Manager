import React from 'react'

const ScrolltoTop = () => {
  function onTop (){
  window.scroll(0,0) 
  }
 return <p onClick={onTop} className='cursor-pointer font-[400] text-[#974FD0] text-center text-[26px] underline '>Back to Top</p> 
}


export default ScrolltoTop