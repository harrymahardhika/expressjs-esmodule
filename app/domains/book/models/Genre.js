import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class Genre extends Model {}

Genre.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Genre',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'genres'
  }
)
export default Genre
