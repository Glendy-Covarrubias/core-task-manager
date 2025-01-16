import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/db'
import { Process } from '../interface/types'

class Task extends Model {
  declare id: number
  declare createdAt: Date
  declare updatedAt: Date
  declare title: string
  declare description: string | null
  declare status: Process
}

Task.init(
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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM('Pendiente', 'En Progreso', 'Completada'),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'task'
  }
)

export default Task
