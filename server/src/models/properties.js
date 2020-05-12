const Database = require('../Database/Connection')
const { DataTypes } = require('sequelize')
module.exports = Database.define('properties', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  City: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  Zip: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false
  },
  lat: {
    type: DataTypes.DECIMAL(10, 6),
    allowNull: false
  },
  lng: {
    type: DataTypes.DECIMAL(10, 6),
    allowNull: false
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
    allowNull: false
  },
  propertyTax: {
    type: DataTypes.FLOAT(3, 2),
    allowNull: false
  },
  PropertyType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Population: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  MedianFamilyIncome: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  MedianAge: {
    type: DataTypes.STRING,
    allowNull: false
  },
  LocalTaxRate: {
    type: DataTypes.FLOAT(2, 1),
    allowNull: false
  },
  UnemploymentRate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  AreaFeel: {
    type: DataTypes.STRING,
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
//   const data = properties.sync()
//   try {
//     if (data) console.log('sucess')
//   } catch (e) {
//     console.log(e)
//   }
// }

// test()
