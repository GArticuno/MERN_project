import { useEffect, useState } from 'react'
import '../styles/Notes.scss'

export default function Notes() {
  const [notes, setNotes] = useState([{
    title: '',
    content:''
  }]);

  useEffect(() => {
    fetch("/notes").then(response =>{
      if(response.ok){
        return response.json()
      }
    }).then(jsonResponse => setNotes(jsonResponse))
  })
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {notes.map((note, index) => (
          <div key={index} className='note'>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
          ))}
      </div>
      
    </div>
  )
}
