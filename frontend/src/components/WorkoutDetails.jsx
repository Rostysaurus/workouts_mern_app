import React from 'react'
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"

export default function WorkoutDetails({ workout }) {
  const {dispatch} = useWorkoutsContext()

  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE"
    })

    const data = await response.json()

    if (response.ok) {
      dispatch({type: "DELETE_WORKOUT", payload: data})
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load: </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>Delete</span>
    </div>
  )
}
