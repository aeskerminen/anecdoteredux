import { createSlice } from "@reduxjs/toolkit"

const notificationReducer = createSlice({
  name: 'notification',
  initialState: {content: '', displayed: false},
  reducers: {
    setNotification(state, action) {
        return {...state, content: action.payload}
    },
    
    setDisplayed(state, action) {
      return {...state, displayed: action.payload}
    }
  }
})


export const {setNotification, setDisplayed} = notificationReducer.actions
export default notificationReducer.reducer