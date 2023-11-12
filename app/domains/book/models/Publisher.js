import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class Publisher extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        location: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      {
        sequelize,
        modelName: 'Publisher',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'publishers'
      }
    )
  }
}

Publisher.init(sequelize, DataTypes)
export default Publisher
