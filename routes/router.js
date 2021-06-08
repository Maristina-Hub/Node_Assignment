const express = require('express');
const router = express.Router()

const {
    getItems,
    getItemsById,
    postItem,
    putItem,
    deleteItem } = require('../controller/items.js')

router.get('/items', getItems)

router.get('/items/:id', getItemsById)

router.post('/items', postItem)

router.put('/items/:id', putItem)

router.delete('/items/:id', deleteItem)

module.exports = router