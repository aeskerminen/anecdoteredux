import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = async (e) => {
        e.preventDefault()
        const content = e.target.name.value
        e.target.name.value = ''

        dispatch(createAnecdote(content))
        dispatch(setNotification(`you created '${content}'`, 3))
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