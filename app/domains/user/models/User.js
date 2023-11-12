import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'User',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'users'
      }
    )
  }
}

User.init(sequelize, DataTypes)
export default User
