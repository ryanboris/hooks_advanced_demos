import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notesReducer'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notesContext'

const NoteApp = () => {
  const [state, dispatch] = useReducer(notesReducer, { notes: [] })

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
    <NotesContext.Provider value={{ state, dispatch }}>
      <h1>Notes</h1>
      <p>Add Note:</p>
      <AddNoteForm />
      <NoteList />
    </NotesContext.Provider>
  )
}

export default NoteApp
