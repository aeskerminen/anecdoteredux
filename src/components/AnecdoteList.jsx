import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayed, setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anectodes = useSelector(state => {
    if (state.filter === '')
      return state.anecdotes

    return state.anecdotes.filter(a => a.content.includes(state.filter))

  })

  const displayed = useSelector(state => state.notification.displayed)

  const vote = (id, anecdote) => {
    dispatch(voteAnecdote(id))

    if(!displayed) {
      dispatch(setDisplayed(true))
      dispatch(setNotification(`you voted "${anecdote}"`))
      setTimeout(() => {
        dispatch(setNotification(''))
        dispatch(setDisplayed(false))
      }, 5000);  
    }
    
  }


  return (
    <div>
      {[...anectodes].sort((a, b) => a.votes < b.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList