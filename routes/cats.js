const express = require('express')
const router = express.Router();

const {
    getAllCats,
    getCat,
    createCat,
    updateCat,
    deleteCat,
} = require('../controllers/cats')

router.get('/', getAllCats)
router.get('/:id', getCat)
router.post('/', createCat)
router.patch('/:id', updateCat)
router.delete('/:id', deleteCat)

module.exports = router;
