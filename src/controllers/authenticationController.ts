import { Request, Response } from 'express'
import { searchUsersFieldServices } from '../services/usersServices'
import jwt from 'jsonwebtoken'

export function authenticationController (req: Request, res: Response): void {
  const token = jwt.sign(
    {
      username: req.body.username
    },
    process.env.SECRET_KEY ?? 'Floppy123',
    { expiresIn: '3h' }
  )

  const user = req.body.username

  if (token === '') {
    res.status(500).json({ status: 500, message: 'error' })
    return
  }

  res.status(200).json({ status: 200, message: 'success', token, user })
}

export async function loginController (req: Request, res: Response): Promise<void> {
  const validUser = await searchUsersFieldServices({ username: req.body.username })

  if (validUser === null || validUser === undefined) {
    res.status(400).json({
      status: 400,
      message: 'There is no user in the database',
      data: req.body
    })
    return
  }

  const validPassword = await searchUsersFieldServices({ username: req.body.username, password: req.body.password })

  if (validPassword === null || validPassword === undefined) {
    res.status(400).json({
      status: 400,
      message: 'Incorrect password',
      data: req.body
    })
    return
  }

  /** Generamos token */
  authenticationController(req, res)
}
