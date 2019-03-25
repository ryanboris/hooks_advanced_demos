import React, { useState, useEffect, useContext } from 'react'
import Icon from '@material-ui/core/Icon'
import styled from 'styled-components/macro'
import NotesContext from '../context/notesContext'
import useMousePosition from '../hooks/useMousePosition'
const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)
  const position = useMousePosition()

  function removeNote(id) {
    dispatch({ type: 'DELETE_NOTE', id })
  }

  return (
    <div>
      <h3>{note.title}</h3>
      <div>
        <span>{note.content}</span>
        <p>
          {position.x}, {position.y}
        </p>
        <StyledIcon
          fontSize="small"
          onClick={() => removeNote(note.id)}
        >
          delete_outlined
        </StyledIcon>
      </div>
    </div>
  )
}

export default Note
