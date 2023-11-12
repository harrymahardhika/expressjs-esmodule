import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    page_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Book',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'books'
  }
)
export default Book
