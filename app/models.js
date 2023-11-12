import Author from './domains/book/models/Author.js'
import Book from './domains/book/models/Book.js'
import BookGenre from './domains/book/models/BookGenre.js'
import Genre from './domains/book/models/Genre.js'
import Publisher from './domains/book/models/Publisher.js'
import Permission from './domains/user/models/Permission.js'
import PermissionRole from './domains/user/models/PermissionRole.js'
import Role from './domains/user/models/Role.js'
import Token from './domains/user/models/Token.js'
import User from './domains/user/models/User.js'

Role.belongsToMany(Permission, {
  through: PermissionRole,
  foreignKey: 'role_id',
  as: 'permissions'
})

Permission.belongsToMany(Role, {
  through: PermissionRole,
  foreignKey: 'permission_id',
  as: 'roles'
})

User.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'role'
})

User.hasMany(Token, {
  foreignKey: 'user_id',
  as: 'tokens'
})

Token.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
})

Author.hasMany(Book, {
  foreignKey: 'author_id',
  as: 'books'
})

Publisher.hasMany(Book, {
  foreignKey: 'publisher_id',
  as: 'books'
})

Book.belongsTo(Author, {
  foreignKey: 'author_id',
  as: 'author'
})

Book.belongsTo(Publisher, {
  foreignKey: 'publisher_id',
  as: 'publisher'
})

Book.belongsToMany(Genre, {
  through: BookGenre,
  foreignKey: 'book_id',
  as: 'genres'
})

Genre.belongsToMany(Book, {
  through: BookGenre,
  foreignKey: 'genre_id',
  as: 'books'
})

export {
  Author,
  Book,
  BookGenre,
  Genre,
  Permission,
  PermissionRole,
  Publisher,
  Role,
  Token,
  User
}
