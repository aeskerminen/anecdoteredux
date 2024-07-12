import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'

const AnecdoteList = () => {
  const dispatch = useDispatch()  
  const anectodes = useSelector(state => {
    if(state.filter === '')
      return state.anecdotes

    return state.anecdotes.filter(a => a.content.includes(state.filter))

  })

  const vote = (id) => dispatch(voteAnecdote(id))
    
    return(
        <div>
             {anectodes.sort((a,b) => a.votes < b.votes).map(anecdote =>
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
        </div>
    )
}

export default AnecdoteList