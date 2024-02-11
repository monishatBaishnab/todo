const router = require('express').Router();

router.get('/health', async (req, res, next) => {
    res.send('"Server is running successfully.');
})

module.exports = router;