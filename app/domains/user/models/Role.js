import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Role',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'roles'
  }
)
export default Role
