import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import uuidv4 from 'uuid'

const NoteApp = () => {
  const [notes, setNotes] = useState([])
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
    const storedNotes = JSON.parse(localStorage.getItem('notes'))
    if (storedNotes) {
      setNotes(storedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.id} note={note} removeNote={removeNote} />
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

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log('Note', 'Setting up Note')

    return () => {
      console.log('cleaning up effect')
    }
  }, [])

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => removeNote(note.id)}>x</button>
    </div>
  )
}
ReactDOM.render(<NoteApp />, document.getElementById('root'))
