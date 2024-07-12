const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

export const changeFilter = filter => {
  const action = {
    type: 'SET_FILTER',
    payload: filter
  }

  return action
}


export default filterReducer