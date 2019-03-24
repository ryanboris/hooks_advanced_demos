const notesReducer = (state, { payload, type, notes, id }) => {
  switch (type) {
    case 'POPULATE_NOTES':
      return {
        notes
      }
    case 'ADD_NOTE':
      return {
        notes: [...state.notes, payload]
      }
    case 'DELETE_NOTE':
      return {
        notes: state.notes.filter(note => note.id !== id)
      }
    default:
      return state
  }
}

export default notesReducer
