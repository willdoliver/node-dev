const Dogs = require('../models/dogs')
const asyncWrapper = require('../middleware/async')

const getAllDogs = asyncWrapper( async (req,res) => {
    const dogs = await Dogs.find({}).select('name race age')
    res.status(200).json({ success: true, data: dogs })
})

const getDog = asyncWrapper( async (req,res) => {
    const { id: dogId } = req.params
    const dog = await Dogs.findById(dogId)
    res.status(200).json({ success: true, data: dog })
})

const createDog = asyncWrapper( async (req,res) => {
    const dog = await Dogs.create(req.body)
    res.status(200).json({ success: true, data: dog })
})

const updateDog = asyncWrapper( async (req,res) => {
    const { id: dogId } = req.params
    const updated = await Dogs.findByIdAndUpdate(dogId,req.body, {new: true} )
    res.status(200).json({ success: true, data: updated })
})

const deleteDog = asyncWrapper( async (req,res) => {
    const { id: dogId } = req.params
    await Dogs.findByIdAndDelete(dogId)
    res.status(200).json({ success: true })
})

module.exports = {
    getAllDogs,
    getDog,
    createDog,
    updateDog,
    deleteDog
}
