import { addAnecdote, voteAnecdote } from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()  
  const anectodes = useSelector(state => state)

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  const add = (e) => {
    e.preventDefault()
    const content = e.target.name.value
    e.target.name.value = ''

    dispatch(addAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anectodes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input type='text'  name='name' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App