const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   res.json({
      msg: 'API - Agenda da beleza V1',
   });
});

module.exports = router;
