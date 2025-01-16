import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const validateToken = (req: Request, res: Response, next: NextFunction): void => {
  const headerToken = req.headers.authorization ?? ''

  if (headerToken.startsWith('Bearer ')) {
    try {
      const bearerToken = headerToken.slice(7) // Eliminar el prefijo "Bearer "
      jwt.verify(bearerToken, process.env.SECRET_KEY ?? 'Floppy123') // Validar token
      next()
    } catch (error) {
      res.status(401).json({
        status: 401,
        message: 'Token invalid',
        data: req.body
      })
    }
  } else {
    res.status(401).json({
      status: 401,
      message: 'Access denied',
      data: req.body
    })
  }
}

export default validateToken
