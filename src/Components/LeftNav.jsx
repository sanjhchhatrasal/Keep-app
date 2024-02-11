import React from 'react'
import { MdOutlineLightbulb } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import { MdOutlineArchive } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

function LeftNav() {
  return (
    <div className='w-[16%] h-[100%] '>
      <div className='left-note side-menu flex items-center gap-10 mt-5 pl-5 bg-[#FEEFC3] p-3'>
    <MdOutlineLightbulb className='bulb'/>
    <h6 className='text-lg'>Notes</h6>
      </div>
      <div className='side-menu flex items-center gap-10 mt-5 ml-5'>
    <FaRegBell className='bulb'/>
    <h6 className='text-lg'>Reminders</h6>
      </div>
      <div className='side-menu flex items-center gap-10 mt-5 ml-5'>
    <LuPencil className='bulb'/>
    <h6 className='text-lg'>Edit labels</h6>
      </div>
      <div className='side-menu flex items-center gap-10 mt-5 ml-5'>
    <MdOutlineArchive className='bulb'/>
    <h6 className='text-lg'>Archieve</h6>
      </div>
      <div className='side-menu flex items-center gap-10 mt-5 ml-5'>
    <RiDeleteBinLine className='bulb'/>
    <h6 className='text-lg'>Bin</h6>
      </div>
    </div>
  )
}

export default LeftNav
