const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get(('/'), (req, res) => {
    queries.getAllVarietals().then(varietals => res.json({ varietals }))
})
router.get(('/:varietal'), req, res) => {
    queries.getVarietalByVarietal().then(varietal => res.json({ varietal }))
}
module.exports = router;