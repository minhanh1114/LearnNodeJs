const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController')



// slug
router.use('/search',siteController.search);

//index cấp thấp hơn của news slug // (luôn nằm dưới để các tuyến đường khác lướt qua trước)
router.use('/',siteController.index);


module.exports = router;