const Database = require('../Database/Connection')
const { DataTypes } = require('sequelize')

module.exports = Database.define('property_Images', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  properties_id: {
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

// const test = async () => {
//   const data = propertyImages.sync()
//   try {
//     if (data) console.log('sucess')
//   } catch (e) {
//     console.log(e)
//   }
// }

// test()
