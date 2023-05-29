const Cats = require('../models/cats')
const Logs = require('../models/logs') // ToDo
const knex = require('../db/mysqlConnect')

const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllCats = asyncWrapper( async (req,res) => {
    const cats = await Cats.query()
    res.status(200).json({ success: true, data: cats })
})

const getCat = asyncWrapper( async (req,res) => {
    const { id: catId } = req.params
    const cat = await Cats.query().findById(catId)
    // const cat = await Cats.query().where('id', '=', catId)
    if (!cat) {
        return next(createCustomError(`No cat with id : ${catId}`, 404))
    }
    res.status(200).json({ success: true, data: cat })
})

const createCat = asyncWrapper( async (req,res) => {
    const { name, age, race, vaccine, addopted } = req.body
    const cat = await Cats.query().insert({
        name: name,
        age: age,
        race: race,
        vaccine: vaccine,
        addopted: addopted
    })
    res.status(200).json({ success: true, data: cat })
})

const updateCat = asyncWrapper( async (req,res) => {
    const { id: catId } = req.params
    // Missing data validation (ToDo)
    const { name, age, race, vaccine, addopted } = req.body
    await Cats.query()
        .findById(catId)
        .patch(req.body)
    res.status(200).json({ success: true })
})

const deleteCat = asyncWrapper( async (req,res) => {
    const { id: catId } = req.params
    console.log(`Called deleteCat, id: ${catId}`)
    await Cats.query().delete().where('ids', '=', catId)
    res.status(200).json({ success: true })
})

const deleteAllCats = asyncWrapper( async (req,res) => {
    // Delete * from table
    await Cats.query().delete()
    res.status(200).json({ success: true })
})

module.exports = {
    getAllCats,
    getCat,
    createCat,
    updateCat,
    deleteCat,
    deleteAllCats
}
