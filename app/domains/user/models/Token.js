import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class Token extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'Token',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'tokens'
      }
    )
  }
}

Token.init(sequelize, DataTypes)
export default Token
