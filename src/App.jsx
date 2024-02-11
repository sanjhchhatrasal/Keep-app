import React, { useRef, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Createnotes from './Components/Createnotes'
import Note from './Components/Note'
import LeftNav from './Components/LeftNav'


function App() {
  const ref = useRef(null);

  const [addItem, setAddItem] = useState([])

    const addNote = (note) =>{
      setAddItem((prevData)=>{
        return [...prevData, note];
      });
    }

    const onDelete= (id)=>{
      setAddItem((oldData)=>{
        return oldData.filter((currdata, indx)=>{
          return indx !== id;
        })
      })
   /*  let copyTask = [...prevData];
    copyTask.splice(i,1)
    setAddItem(copyTask)
 */
    }

  return (
    <div>
      <Header/>
      <hr />
      <LeftNav/>
      <Createnotes passNote={addNote}/>
      <div ref={ref} className='w-full h-screen top-0 left-0 flex gap-10 flex-wrap p-8 ml-52'>
      { addItem.map((val, index) => {
        return <Note reference={ref} key={index} id={index} title={val.title} content = {val.content} deleteItem={onDelete}/>
      })}
      </div>
     
      <Footer/>
    </div>
  )
}

export default App
