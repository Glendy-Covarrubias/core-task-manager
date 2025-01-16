import { Request, Response } from 'express'
import { getUsersServices, setUserServices, updateUserServices, deleteUserServices, searchUserServices, searchUsersFieldServices } from '../services/usersServices'
import User from '../models/User'

export function getUsersController (_req: Request, res: Response): void {
  getUsersServices()
    .then((result) => {
      res.status(200).json({ status: 200, message: 'success', data: result })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}

export async function setUserController (req: Request, res: Response): Promise<void> {
  const validUser: User | null = await searchUsersFieldServices({ username: req.body.username })

  if (validUser != null) {
    res.status(400).json({
      status: 400,
      message: 'This user is already registered. Try username!',
      data: req.body
    })
    return
  }

  setUserServices(req.body)
    .then((result) => {
      res.status(200).json({ status: 200, message: 'success', data: result })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}

// Función para actualizar una tarea
export function updateUserController (req: Request, res: Response): void {
  const id = req.params.id
  const data = req.body
  updateUserServices(id, data)
    .then((result) => {
      res.status(200).json({ status: 200, message: 'success', data: result })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}

// Función para eliminar una tarea
export function deleteUserController (req: Request, res: Response): void {
  const id = req.params.id
  deleteUserServices(id)
    .then((_result) => {
      res.status(200).json({ status: 200, message: 'success', data: { id } })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}

// Función para buscar una tarea
export function searchUserController (req: Request, res: Response): void {
  const id = parseInt(req.params.id)
  searchUserServices(id)
    .then((result) => {
      res.status(200).json({ status: 200, message: 'success', data: result })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}

export function searchUserNameController (req: Request, res: Response): void {
  searchUsersFieldServices({ username: req.body.username })
    .then((result) => {
      res.status(200).json({ status: 200, message: 'success', result })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}
