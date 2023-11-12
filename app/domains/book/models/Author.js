import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class Author extends Model {}

Author.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Author',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'authors'
  }
)
export default Author
