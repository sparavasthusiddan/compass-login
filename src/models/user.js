const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("compass_user", {
  
  id:{ type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
 
},
{
  tableName:"compass_users",
  underscored:true,
  
}
);

module.exports = User;
