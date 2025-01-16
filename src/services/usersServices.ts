import User from '../models/User'

export async function getUsersServices (): Promise<any> {
  try {
    const options: { order: Array<[string, string]> } = {
      order: [['id', 'ASC']]
    }
    return await User.findAll(options)
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function setUserServices (data: any): Promise<any> {
  try {
    return await User.create(data)
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function updateUserServices (id: any, data: any): Promise<any> {
  try {
    const user = await User.findByPk(id)

    if (user == null) {
      throw new Error('Task not found')
    }

    user.firstName = data.firstName
    user.lastName = data.lastName
    user.gender = data.gender
    return await user.save()
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function deleteUserServices (id: any): Promise<any> {
  try {
    return await User.destroy({ where: { id } })
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function searchUserServices (id: any): Promise<any> {
  try {
    return await User.findByPk(id)
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function searchUsersFieldServices (searchFields: any): Promise<any> {
  try {
    return await User.findOne({ where: searchFields })
  } catch (error: any) {
    throw Error(error)
  }
}
