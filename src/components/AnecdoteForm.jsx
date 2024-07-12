import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
    const dispatch = useDispatch()  

    const add = (e) => {
        e.preventDefault()
        const content = e.target.name.value
        e.target.name.value = ''

        dispatch(createAnecdote(content))
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