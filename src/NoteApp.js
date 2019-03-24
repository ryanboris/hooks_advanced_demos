import React, { useState, useEffect, useReducer } from 'react'
import notesReducer from './notesReducer'
import Note from './Note'
import uuidv4 from 'uuid'

const NoteApp = () => {
  const [state, dispatch] = useReducer(notesReducer, { notes: [] })
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function addNote(e) {
    e.preventDefault()
    dispatch({
      type: 'ADD_NOTE',
      payload: { id: uuidv4(), title, content }
    })
    setTitle('')
    setContent('')
  }

  function removeNote(id) {
    dispatch({ type: 'DELETE_NOTE', id })
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state.notes))
  }, [state.notes])

  return (
    <div>
      <h1>Notes</h1>
      {state.notes.map(note => (
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

export default NoteApp
