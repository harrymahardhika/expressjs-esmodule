import { DataTypes, Model } from 'sequelize'
import sequelize from '../../../../config/sequelize.js'

class PermissionRole extends Model {}

PermissionRole.init(
  {
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'PermissionRole',
    tableName: 'permission_role',
    timestamps: false
  }
)

export default PermissionRole
