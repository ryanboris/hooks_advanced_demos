import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notesReducer'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'

const NoteApp = () => {
  const [state, dispatch] = useReducer(notesReducer, { notes: [] })

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
    <>
      <h1>Notes</h1>
      <p>Add Note:</p>
      <AddNoteForm dispatch={dispatch} />
      <NoteList notes={state.notes} removeNote={removeNote} />
    </>
  )
}

export default NoteApp
