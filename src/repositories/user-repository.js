const CrudRepostory = require('./CRUD-repository');
const { User } = require('../models');

class UserRepository extends CrudRepostory {
    constructor() {
        super(User);
    }
    
}

module.exports = UserRepository;