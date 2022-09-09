const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewController')



// slug
router.use('/:slug',newsController.show);

//index cấp thấp hơn của news slug // (luôn nằm dưới để các tuyến đường khác lướt qua trước)
router.use('/',newsController.index);


module.exports = router;