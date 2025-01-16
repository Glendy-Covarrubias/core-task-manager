import { Router } from 'express' // ESModules
import { loginController } from '../controllers/authenticationController'
import { getUsersController, setUserController, updateUserController, deleteUserController, searchUserController, searchUserNameController } from '../controllers/userControllers'
import { getTasksController, setTaskController, updateTaskController, deleteTaskController, searchTaskController } from '../controllers/taskControllers'
import validateToken from './validateTokens'

const router = Router()

router.post('/login', loginController)
router.get('/users', validateToken, getUsersController)
router.post('/user', validateToken, setUserController)
router.put('/user/:id', validateToken, updateUserController)
router.delete('/user/:id', validateToken, deleteUserController)
router.get('/user/:id', validateToken, searchUserController)
router.post('/userName', searchUserNameController)

router.get('/tasks', validateToken, getTasksController)
router.post('/task', validateToken, setTaskController)
router.put('/task/:id', validateToken, updateTaskController)
router.delete('/task/:id', validateToken, deleteTaskController)
router.get('/task/:id', validateToken, searchTaskController)

export default router
