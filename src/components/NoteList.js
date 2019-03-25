import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/notesContext'

export default function NoteList() {
  const { state } = useContext(NotesContext)
  const { notes } = state
  return notes.map(note => <Note key={note.id} note={note} />)
}
