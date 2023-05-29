const Dogs = require('../models/dogs')
const asyncWrapper = require('../middleware/async')

const getAllDogs = asyncWrapper( async (req,res) => {
    console.log("Called getAllDogs")
    // const dogs = await Dogs.find({}) ToDo
    res.status(200).json({ success: true })
})

const getDog = asyncWrapper( async (req,res) => {
    const { id: dogId } = req.body
    console.log(`Called getDog, id: ${dogId}`)
    res.status(200).json({ success: true })

})

const createDog = asyncWrapper( async (req,res) => {
    console.log(`Called createDog, body: ${req.body}`)
    res.status(200).json({ success: true, data: req.body })
})
const updateDog = asyncWrapper( async (req,res) => {
    const { id: dogId } = req.body
    console.log(`Called updateDog, id: ${dogId}, body: ${req.body}`)
    res.status(200).json({ success: true, data: req.body })
})

const deleteDog = asyncWrapper( async (req,res) => {
    const { id: dogId } = req.body
    console.log(`Called deleteDog, id: ${dogId}`)
})

module.exports = {
    getAllDogs,
    getDog,
    createDog,
    updateDog,
    deleteDog
}
