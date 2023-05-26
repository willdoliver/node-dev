const Dogs = require('../models/task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllDogs = asyncWrapper( async (req,res) => {
    try{
        console.log("Called getAllDogs")
        // const dogs = await Dogs.find({})
        res.status(200).json({ success: true })
    } catch (error) {
        return next(createCustomError( `Dog ${dogId} not found`, 404 ))
    }
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
