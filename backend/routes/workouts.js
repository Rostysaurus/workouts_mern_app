const express = require("express")
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutController")

const router = express.Router()

// GET all workouts (index)
router.get("/", getWorkouts)

// GET a single wotkout (show)
router.get("/:id", getWorkout)

// POST a new workout (create)
router.post("/", createWorkout)

//DELETE a workout (destroy)
router.delete("/:id", deleteWorkout)

// UPDATE a workout (update)
router.patch("/:id", updateWorkout)


module.exports = router
