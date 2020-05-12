const Sequelize = require('sequelize').Sequelize
const Database = new Sequelize('the_smith_group', 'root', '1992', {
  host: 'localhost',
  dialect: 'mysql'
})

// const test = async () => {
//   try {
//     await Database.authenticate()
//     console.log('Connection has been established successfully.')
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
// }

// test()

module.exports = Database
