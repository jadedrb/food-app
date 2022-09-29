// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Bring in controller functions (destructure methods)
const { 
    findAllFruits, 
    showNewView, 
    createNewFruit,
    seedStarterData,
    showOneFruit,
    showEditView,
    updateOneFruit,
    deleteOneFruit,
    clearAllFruit
} = require('../controllers/fruitController')

// Bring in controller object (with methods attached)
// const fruitController = require('../controllers/fruitController')
// Example: router.get('/', fruitController.findAllFruits)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllFruits)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneFruit)

// Setup "update" route
router.put('/:id', updateOneFruit)

// Setup "create" route
router.post('/', createNewFruit)

// Setup "edit" route
router.get('/:id/edit', showEditView)   

// Setup "seed" route
router.get('/seed', seedStarterData)

// Setup "clear" route
router.get('/clear', clearAllFruit)

// Setup "show" route  
router.get('/:id', showOneFruit)


module.exports = router



/*
    TASK:
        1. Work on delete and edit functionality for other food groups
        2. Separate your route logic into controller files (and a controller folder)
        3. Create a "seed" route and "clear" route (which deletes all documents)
        4. OPTIONAL: Organize and save your routes in Postman
*/