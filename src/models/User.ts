import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/db'
import Task from './Task'

class User extends Model {
  declare id: number
  declare createdAt: Date
  declare updatedAt: Date
  declare firstName: string
  declare lastName: string
  declare gender: Enumerator
  declare username: string
  declare password: string
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('Female', 'Male', 'Others'),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'user'
  }
)

User.hasMany(Task, {
  sourceKey: 'id',
  foreignKey: 'ownerId',
  as: 'task'
})

Task.belongsTo(User, {
  targetKey: 'id',
  foreignKey: 'ownerId'
})

export default User
