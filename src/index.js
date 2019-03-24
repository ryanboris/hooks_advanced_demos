import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import uuidv4 from 'uuid'

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem('notes'))
  const [notes, setNotes] = useState(notesData || [])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function addNote(e) {
    e.preventDefault()
    setNotes([
      ...notes,
      {
        title,
        content,
        id: uuidv4()
      }
    ])
    setTitle('')
    setContent('')
  }

  function removeNote(id) {
    setNotes(notes.filter(note => note.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  })

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => removeNote(note.id)}>x</button>
        </div>
      ))}
      <p>Add Note:</p>
      <form id="form" onSubmit={addNote}>
        <input
          type="text"
          value={title}
          form="form"
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
      <textarea
        cols="50"
        rows="5"
        form="form"
        maxLength="256"
        wrap="soft"
        placeholder="Write here"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
    </div>
  )
}

ReactDOM.render(<NoteApp />, document.getElementById('root'))
