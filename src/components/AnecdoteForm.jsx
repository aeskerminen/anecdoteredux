import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayed, setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const displayed = useSelector(state => state.notification.displayed)

    const add = async (e) => {
        e.preventDefault()
        const content = e.target.name.value
        e.target.name.value = ''

        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))

        if (!displayed) {
            dispatch(setDisplayed(true))
            dispatch(setNotification(`you created "${content}"`))
            setTimeout(() => {
                dispatch(setNotification(''))
                dispatch(setDisplayed(false))
            }, 5000);
        }
    }


    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input type='text' name='name' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm