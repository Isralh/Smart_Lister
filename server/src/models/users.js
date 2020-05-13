const Database = require('../Database/Connection')
const { DataTypes } = require('sequelize')

module.exports = Database.define('users', ({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 6
    }
  },
  confirmPassword: {
    type: DataTypes.STRING,
    allowNull: false
  }
}))

// const usersTable = async () => {
//   const table = await Users.sync()

//   try {
//     table ? console.log('success:', table) : console.log('uanble to add table')
//   } catch (e) {
//     console.log(e)
//   }
// }

// usersTable()
