import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class Permission extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'Permission',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'permissions'
      }
    )
  }
}

Permission.init(sequelize, DataTypes)
export default Permission
