const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController') 

const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET a single Workout
router.get('/:id', getWorkout)

//POST a new Workout
router.post('/', createWorkout);

//DELETE a Workout
router.delete('/:id', (req, res) => {
    res.json({mssg : 'Delete a workout'})
})

//UPDATE a Workout
router.patch('/:id', (req, res) => {
    res.json({mssg : 'Update the workout'})
})



module.exports = router