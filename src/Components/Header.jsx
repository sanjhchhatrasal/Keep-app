import React from 'react'
import { SiGooglekeep } from "react-icons/si";
import { IoMenuOutline } from "react-icons/io5";

function Header() {
  return (
    <div className='flex items-center pl-14  p-7 '>
      {<IoMenuOutline className='menu'/>}
     <h1 className='text-slate-900 font-bold text-3xl flex items-center gap-3'><SiGooglekeep className='keep-logo'/>Sanjh's Keep App  </h1>
    </div>
  )
}

export default Header
