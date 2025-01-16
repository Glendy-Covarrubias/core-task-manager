import { Request, Response } from 'express'
import { getTasksServices, setTaskServices, updateTaskServices, deleteTaskServices, searchTaskServices } from '../services/tasksServices'

// Función para obtener las tareas
export function getTasksController (_req: Request, res: Response): void {
  getTasksServices()
    .then((result) => {
      res.status(200).json({ status: 200, message: 'success', result })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}

// Función para crear una tarea
export function setTaskController (req: Request, res: Response): void {
  setTaskServices(req.body)
    .then((result) => {
      res.status(200).json({ status: 200, message: 'success', result })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}

// Función para actualizar una tarea
export function updateTaskController (req: Request, res: Response): void {
  const id = req.params.id
  const data = req.body
  updateTaskServices(id, data)
    .then((result) => {
      res.status(200).json({ status: 200, message: 'success', result })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}

// Función para eliminar una tarea
export function deleteTaskController (req: Request, res: Response): void {
  const id = req.params.id
  deleteTaskServices(id)
    .then((_result) => {
      res.status(200).json({ status: 200, message: 'success', id })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}

// Función para buscar una tarea
export function searchTaskController (req: Request, res: Response): void {
  const id = parseInt(req.params.id)
  searchTaskServices(id)
    .then((result) => {
      res.status(200).json({ status: 200, message: 'success', result })
    })
    .catch((error: any) => {
      res.status(500).json({ status: 500, message: error.message })
    })
}
