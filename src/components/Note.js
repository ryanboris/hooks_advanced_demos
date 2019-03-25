import React, { useEffect } from 'react'
import Icon from '@material-ui/core/Icon'
import styled from 'styled-components/macro'

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const Note = ({ note, dispatch }) => {
  useEffect(() => {
    console.log('Note', 'Setting up Note')

    return () => {
      console.log('cleaning up effect')
    }
  }, [])

  function removeNote(id) {
    dispatch({ type: 'DELETE_NOTE', id })
  }

  return (
    <div>
      <h3>{note.title}</h3>
      <div>
        <span>{note.content}</span>
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
