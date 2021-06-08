let { items } = require('../data.js')

const getItems = (req, res) => {
    res.status(200).json({success: true, data:items})
}

const getItemsById = (req, res) => {
    const findItem = items.find((value) => value.id === +(req.params.id))
    res.status(200).json({success: true, data:findItem})
}

const postItem = (req, res) => {
    const { id, item } = req.body
    if (!item) {
    return res
        .status(400)
        .json({ success: false, msg: 'please provide item value' })
}
        res.status(201).json({ success: true, data: [...items, {id, item}] })
}

const putItem = (req, res) => {
    const { id } = req.params
    const { item } = req.body

    const findItem = items.find((findItem) => findItem.id === Number(id))

    if (!findItem) {
    return res
        .status(404)
        .json({ success: false, msg: `Item not available` })
}
    const addItem = items.map((findItem) => {
    if (findItem.id === Number(id)) {
        findItem.item = item
    }
    return findItem
})
    res.status(200).json({ success: true, data: addItem })
}

const deleteItem = (req, res) => {
    const findItem = items.find((findItem) => findItem.id === Number(req.params.id))
    
    if (!findItem) {
    return res
        .status(404)
        .json({ success: false, msg: `No item with id ${req.params.id}` })
}
    const addItem = items.filter(
        (findItem) => findItem.id !== Number(req.params.id)
    )
    
    return res.status(200).json({ success: true, data: addItem })
}

module.exports = {
    getItems,
    getItemsById,
    postItem,
    putItem,
    deleteItem
}