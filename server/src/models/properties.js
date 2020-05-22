const Database = require('../Database/Connection')
const { DataTypes } = require('sequelize')

module.exports = Database.define('properties', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  cityState: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  zipcode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false
  },
  lat: {
    type: DataTypes.DECIMAL(10, 6),
    allowNull: true
  },
  lng: {
    type: DataTypes.DECIMAL(10, 6),
    allowNull: true
  },
  Beds: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Baths: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  SqFt: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Garages: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  DaysOnMarket: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  PropertyType: {
    type: DataTypes.STRING,
    allowNull: true
  },
  users_id: {
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
//   const data = Property.sync()
//   try {
//     if (data) console.log('sucess')
//   } catch (e) {
//     console.log(e)
//   }
// }

// test()
