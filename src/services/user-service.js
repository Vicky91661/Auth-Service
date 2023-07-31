const {UserRepository}=require('../repositories');
const userRepository = new UserRepository();
const status = require('http-status');
const AppError =require('../utils/errors/app-error')
async function createUser(data)
{
    console.log("inside service")
    try {
        console.log("inside Service");
        const user = await userRepository.create(data);
        return user;
    } catch (error) {
        if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            //console.log(explanation);
            throw new AppError(explanation, status.BAD_REQUEST);
    }
    throw new AppError('Cannot create a new user object', status.INTERNAL_SERVER_ERROR);
    }
}
module.exports={
    createUser
}