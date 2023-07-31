const express=require('express');
const router = express.Router();
const {infoController}= require('../../controllers');
const userRoutes= require('./user-routes');


router.get('/info',infoController.info); 
router.use('/signup', userRoutes)

module.exports=router;