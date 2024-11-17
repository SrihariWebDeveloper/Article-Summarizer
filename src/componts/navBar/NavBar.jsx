import React from 'react'
import Logo from '../../assets/summarizer.png'
import User from '../../assets/profile_icon.png'

const NavBar = () => {
  return (
    <div className="flex w-full flex-wrap bg-slate-100 justify-between h-[110px]">
      <div className="p-5 h-[100px] w-[250px]">
        <img src={Logo} alt="" className='cursor-pointer max-sm:w-[200px]'/>
      </div>
      <div className="p-5 h-[100px] w-[100px]">
        <img src={User} alt="" className='bg-blue-100 p-3 rounded-3xl cursor-pointer'/>
      </div>
    </div>
  )
}

export default NavBar
