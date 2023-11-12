import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class BookGenre extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        book_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        genre_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'BookGenre',
        tableName: 'book_genre',
        timestamps: false
      }
    )
  }
}

BookGenre.init(sequelize, DataTypes)
export default BookGenre
