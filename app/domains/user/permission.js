const role = {
  ADMINISTRATOR: 'administrator',
  CUSTOMER: 'customer'
}

const permission = {
  BROWSE_AUTHORS: 'browse_authors',
  READ_AUTHOR: 'read_author',
  EDIT_AUTHOR: 'edit_author',
  ADD_AUTHOR: 'add_author',
  DELETE_AUTHOR: 'delete_author',

  BROWSE_PUBLISHERS: 'browse_publishers',
  READ_PUBLISHER: 'read_publisher',
  EDIT_PUBLISHER: 'edit_publisher',
  ADD_PUBLISHER: 'add_publisher',
  DELETE_PUBLISHER: 'delete_publisher',

  BROWSE_GENRES: 'browse_genres',
  READ_GENRE: 'read_genre',
  EDIT_GENRE: 'edit_genre',
  ADD_GENRE: 'add_genre',
  DELETE_GENRE: 'delete_genre',

  BROWSE_BOOKS: 'browse_books',
  READ_BOOK: 'read_book',
  EDIT_BOOK: 'edit_book',
  ADD_BOOK: 'add_book',
  DELETE_BOOK: 'delete_book'
}

const permissionAssignment = {
  [role.ADMINISTRATOR]: [
    permission.BROWSE_AUTHORS,
    permission.READ_AUTHOR,
    permission.EDIT_AUTHOR,
    permission.ADD_AUTHOR,
    permission.DELETE_AUTHOR,

    permission.BROWSE_PUBLISHERS,
    permission.READ_PUBLISHER,
    permission.EDIT_PUBLISHER,
    permission.ADD_PUBLISHER,
    permission.DELETE_PUBLISHER,

    permission.BROWSE_GENRES,
    permission.READ_GENRE,
    permission.EDIT_GENRE,
    permission.ADD_GENRE,
    permission.DELETE_GENRE,

    permission.BROWSE_BOOKS,
    permission.READ_BOOK,
    permission.EDIT_BOOK,
    permission.ADD_BOOK,
    permission.DELETE_BOOK
  ],

  [role.CUSTOMER]: [
    permission.BROWSE_AUTHORS,
    permission.READ_AUTHOR,

    permission.BROWSE_PUBLISHERS,
    permission.READ_PUBLISHER,

    permission.BROWSE_GENRES,
    permission.READ_GENRE,

    permission.BROWSE_BOOKS,
    permission.READ_BOOK
  ]
}

export { permission, permissionAssignment, role }
