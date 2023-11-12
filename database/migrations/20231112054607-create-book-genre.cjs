/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('book_genre', {
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'books'
          },
          key: 'id'
        }
      },
      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'genres'
          },
          key: 'id'
        }
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('book_genre')
  }
}
