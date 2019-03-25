import React from 'react'
import Note from './Note'

export default function NoteList({ notes, removeNote }) {
  return notes.map(note => (
    <Note key={note.id} note={note} removeNote={removeNote} />
  ))
}
