const Database = require('../Database/Connection')
const { DataTypes } = require('sequelize')

module.exports = Database.define('favorties', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  propertyId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
})

// const addTable = async () => {
//   const table = await FavoriteProperty.sync()
//   try {
//     if (table) console.log('success')
//   } catch (e) {
//     console.log(e)
//   }
// }

// addTable()
