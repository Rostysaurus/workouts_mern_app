import React from 'react'
import { useState } from "react";
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"

export default function WorkoutsForm() {
  const {dispatch} = useWorkoutsContext()
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const [error, SetError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, load, reps}

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()

    if (!response.ok) {
      SetError(data.error)
    }

    if (response.ok) {
      setTitle("")
      setLoad("")
      setReps("")
      SetError(null)
      console.log("New Workout added", data)
      dispatch({type: "CREATE_WORKOUT", payload: data})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>

      <label>Exercise title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

      <label>Exercise load:</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />

      <label>Exercise reps:</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />

        <button>Add workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}
