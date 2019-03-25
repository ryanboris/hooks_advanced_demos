import React, { useState, useContext } from 'react'
import uuidv4 from 'uuid'
import styled from 'styled-components'
import NotesContext from '../context/notesContext'

const FormWrapper = styled.form`
  display: flex;
  height: 50vh;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;

  input {
    width: 48vw;
  }

  textarea {
    margin: 5px 0 20px;
  }
`

export default function addNote() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { dispatch } = useContext(NotesContext)

  function addNote(e) {
    e.preventDefault()
    dispatch({
      type: 'ADD_NOTE',
      payload: { id: uuidv4(), title, content }
    })
    setTitle('')
    setContent('')
  }

  return (
    <FormWrapper id="form" onSubmit={addNote}>
      <input
        type="text"
        value={title}
        form="form"
        onChange={e => setTitle(e.target.value)}
      />
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
      <button type="submit">Add Note</button>
    </FormWrapper>
  )
}
