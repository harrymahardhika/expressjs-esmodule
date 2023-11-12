const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const publishers = await queryInterface.sequelize.query('SELECT * FROM publishers', {
      type: queryInterface.sequelize.QueryTypes.SELECT
    })

    const authors = await queryInterface.sequelize.query('SELECT * FROM authors', {
      type: queryInterface.sequelize.QueryTypes.SELECT
    })

    const genres = await queryInterface.sequelize.query('SELECT * FROM genres', {
      type: queryInterface.sequelize.QueryTypes.SELECT
    })

    const insertBooks = []
    for (let i = 0; i < 50; i++) {
      insertBooks.push({
        title: faker.music.songName(),
        isbn: faker.commerce.isbn(),
        page_count: Math.floor(Math.random() * 1000) + 1,
        published_at: faker.date.past(),
        publisher_id: publishers[Math.floor(Math.random() * publishers.length)].id,
        author_id: authors[Math.floor(Math.random() * authors.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      })
    }

    await queryInterface.bulkInsert('books', insertBooks)

    const books = await queryInterface.sequelize.query('SELECT * FROM books', {
      type: queryInterface.sequelize.QueryTypes.SELECT
    })

    const bookGenres = []
    books.forEach(async (book) => {
      for (let i = 0; i < 3; i++) {
        bookGenres.push({
          book_id: book.id,
          genre_id: genres[Math.floor(Math.random() * genres.length)].id
        })
      }
    })

    await queryInterface.bulkInsert('book_genre', bookGenres)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('book_genre', null, {})
    await queryInterface.bulkDelete('books', null, {})
  }
}
