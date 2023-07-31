const status = require('http-status');
const { UserService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


async function createUser(req,res)
{
    try {
        const response = await UserService.createUser({
            email:req.body.email,
            password:req.body.password
        });
        SuccessResponse.data = response;
        return res.status(status.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


module.exports={
    createUser
}