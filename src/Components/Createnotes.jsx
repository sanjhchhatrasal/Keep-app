import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

function Createnotes(props) {

  const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    const inputEvent = (event) =>{

      // const value = event.target.value;
      // const name = event.target.name;

        const{value,name} = event.target;

        setNote((prevData) =>{
            return {
                ...prevData,
                [name]: value,
            }
        })
    }
    const addEvent = () =>{
     props.passNote(note);
     setNote({
        title: "",
        content: "",

     })
    }

    const expandIt = ()=>{
      setExpand(true)
    }
    const normal = ()=>{
      setExpand(false)
    }

  return (
    <div className='create-note'>
      <form onDoubleClick={normal}>
       
        <input type="text" name='title' value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off' onClick={expandIt} />
        { expand? 
        <textarea name="content" cols="" rows="" value={note.content} onChange={inputEvent} placeholder='Write a note...' ></textarea>:null}
       {expand? 
        <div className='plus-div' onClick={addEvent}>
        <FaPlus className='plus' />
        </div>:null}
      </form>
    </div>
  )
}

export default Createnotes
