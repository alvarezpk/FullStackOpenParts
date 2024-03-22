import { useState } from 'react'
import Note from './components/Note'

const App = ({ notesProp }) => {
  const [notes, setNotes] = useState(notesProp)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  const handleChange = (event) => {

   
    setNewNote(event.target.value)
    
  }

  const handleClick = (event) => {

    event.preventDefault()
    console.log('crear nota')
    console.log(newNote)

    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    }

    console.log(noteObject)

    setNotes(notes.concat(noteObject))
    setNewNote('')
    
    console.log(noteObject)
    
  }

  const handleShowAll = () => {
    console.log("hi")
    setShowAll(() => !showAll)
  }

  


  return (
   <>
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show all"}</button>
      <ul>
        {notes

        .filter(note => {
          if (showAll === true) return note; 
          return note.important === true; //else solo los con important true
          
        })
        
        .map(noteMap => 
          <Note key={noteMap.id} note={noteMap} />
        )}
      </ul>
    </div>

    <form onSubmit={handleClick}>
     
      <input value={newNote} type='text' onChange={handleChange} />
      <button type='submit'>Save Note</button>
     
    </form>
   </>
  )
}

export default App