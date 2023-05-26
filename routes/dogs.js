const express = require('express')
const router = express.Router();

const {
    getAllDogs,
    getDog,
    createDog,
    updateDog,
    deleteDog
} = require ('../controllers/dogs')

router.get('/', getAllDogs)
router.get('/:id', getDog)
router.post('/', createDog)
router.patch('/:id', updateDog)
router.delete('/:id', deleteDog)

module.exports = router
