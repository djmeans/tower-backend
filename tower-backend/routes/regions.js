const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get(('/'), (req, res) => {
    queries.getAllRegions().then(regions => res.json({ regions }))
})

router.get(('/:id'),(req, res)=>{
    queries.getRegionById(id).then(region => res.json({region}))
})

module.exports = router;