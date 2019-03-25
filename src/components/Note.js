import React, { useEffect } from 'react'
import Icon from '@material-ui/core/Icon'
import styled from 'styled-components/macro'

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

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
