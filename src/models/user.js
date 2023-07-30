'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [3, 50]
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};