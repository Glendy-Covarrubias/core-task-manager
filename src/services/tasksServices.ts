import Task from '../models/Task'

export async function getTasksServices (): Promise<any> {
  try {
    const options: { order: Array<[string, string]> } = {
      order: [['id', 'ASC']]
    }
    return await Task.findAll(options)
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function setTaskServices (data: any): Promise<any> {
  try {
    return await Task.create(data)
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function updateTaskServices (id: any, data: any): Promise<any> {
  try {
    const task = await Task.findByPk(id)

    if (task == null) {
      throw new Error('Task not found')
    }

    task.title = data.title
    task.description = data.description
    task.status = data.status
    return await task.save()
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function deleteTaskServices (id: any): Promise<any> {
  try {
    return await Task.destroy({ where: { id } })
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function searchTaskServices (id: any): Promise<any> {
  try {
    return await Task.findByPk(id)
  } catch (error: any) {
    throw new Error(error)
  }
}
