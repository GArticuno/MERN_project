import React, { useState } from 'react'
import axios from 'axios';
import "../styles/AddNotes.scss"

export default function AddNotes() {
  const [input, setInput]= useState({
    title: '',
    content: ''
  })
  const [sucess, setSucess]= useState(false);

  function handleChange(event: any){
    const {name, value} = event.target;
    return(
      setInput(prevInput => {
        return {
          ...prevInput,
          [name]: value
        }
      })
    )
  }

  function handleClick(event: any){
    event.preventDefault()
    const newNote = {
      title: input.title,
      content: input.content
    }
    axios.post('http://localhost:3001/create', newNote);
    setInput({title: '', content: ''})
    setSucess(true)
  }


  return (
    <div className='container'>
      <h1>Add Note</h1>
      <form>
        <div className='form-group'>
          <input 
            onChange={handleChange} 
            onClick={() => setSucess(false)}
            name='title' 
            value={input.title}
            autoComplete= 'off'
            className='form-control' 
            placeholder='note title'
          ></input>
        </div>
        <div className='form-group'>
          <textarea
            onChange={handleChange} 
            name='content' 
            value={input.content} 
            disabled={input.title === ''}
            autoComplete= 'off'
            className='form-control' 
            placeholder='note content'
          ></textarea>
        </div>
        <button 
          onClick={handleClick} 
          className='btn btn-lg'
          disabled={input.content === ''}
        >ADD</button>
      </form>
      {sucess ===true && <h5><span className="badge bg-success justify-content-center">Success</span></h5>}
    </div>
  )
}
