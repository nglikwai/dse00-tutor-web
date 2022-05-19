import next from 'next'
import { getSession } from 'next-auth/client'

import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from './catchAsyncErrors'

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const session = await getSession({ req })

  if (!session) {
    return next(new ErrorHandler('Login first'), 401)
  }
  req.user = session.user
  console.log(req.user)

  next()
})

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role(${req.user.role}) is not allowed to access`,
          403,
        ),
      )
    }
    next()
  }
}

export { authorizeRoles, isAuthenticatedUser }
