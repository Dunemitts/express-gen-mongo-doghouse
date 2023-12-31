const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('models/Dog')
const Dog = mongoose.model('dogs')

router.get('/', (req, res) => {
    res.send('HI')
})

// Allow user to retrieve all documents in database in Json format
router.get('/dogs', async(req, res) => {
    const filter = {}
    const dogs = await Dog.find(filter)
    console.log(dogs)
    res.json(dogs)
})

// Get a specific number of dogs
router.get('/dogs/limit/:limit', async(req, res) => {
    const limit = parseInt(req.params.limit)
    const filter = {}
    const dogs = await Dog.find(filter).limit(limit)
    console.log(dogs)
    res.json(dogs)
})

// Get a specific name of dogs
router.get('/dogs/name/:name', async(req, res) => {
    const name = req.params.name
    const filter = { name: name}
    const dogs = await Dog.find(filter)
    console.log(dogs)
    res.json(dogs)
})

// Get all unique breed of dogs
router.get('/dogs/breed', async(req, res) => {
    const dogs = await Dog.distinct('breed')
    console.log(dogs)
    res.json(dogs)
})

// Get all unique treats of dogs
router.get('/dogs/treat', async(req, res) => {
    const dogs = await Dog.distinct('treat')
    console.log(dogs)
    res.json(dogs)
})

// Get a specific breed of dogs
router.get('/dogs/breed/:breed', async(req, res) => {
    const breed = req.params.breed
    const filter = { breed: breed}
    const dogs = await Dog.find(filter)
    console.log(dogs)
    res.json(dogs)
})

// Get a specific treat of dogs
router.get('/dogs/treat/:treat', async(req, res) => {
    const treat = req.params.treat
    const filter = { treat: treat}
    const dogs = await Dog.find(filter)
    console.log(dogs)
    res.json(dogs)
})

// Get a specific age of dogs
router.get('/dogs/age/:age', async(req, res) => {
    const age = req.params.age
    const filter = { age: age}
    const dogs = await Dog.find(filter)
    console.log(dogs)
    res.json(dogs)
})

// Get a specific age or younger of dogs
router.get('/dogs/youngage/:age', async(req, res) => {
    const age = req.params.age
    const filter = { age: { $lte: age}}
    const dogs = await Dog.find(filter)
    console.log(dogs)
    res.json(dogs)
})

// Get a specific age or older of dogs
router.get('/dogs/oldage/:age', async(req, res) => {
    const age = req.params.age
    const filter = { age: { $gte: age}}
    const dogs = await Dog.find(filter)
    console.log(dogs)
    res.json(dogs)
})

module.exports = router;