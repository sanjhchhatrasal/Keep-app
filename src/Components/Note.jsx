import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion"

function Note(props,{reference}) {
  const deleteNote = () =>{
    props.deleteItem(props.id);
  };
  return (
    <motion.div drag dragConstraints={reference}  className='note'>
      <h1 className='font-semibold'>{props.title}</h1>
      <br />
      <p>{props.content}</p>
      <div className='delete' onClick={deleteNote}>
      <MdDeleteOutline className='delete-btn'/>
      </div>
    </motion.div>
  )
}

export default Note
