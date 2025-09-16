const express = require('express')
const router = express.Router();
const {getAllProds,
        getProd,
        updateProd,
        deleteProd,
        createProd} = require("../controllers/controllers")

router.get('/', getAllProds)

router.get('/:id', getProd)

router.put('/:id', updateProd)

router.delete('/:id', deleteProd)

router.post('/', createProd)

module.exports = router