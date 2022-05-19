import dbConnect from 'config/dbConnect'
import crypto from 'crypto'
import { isAuthenticatedUser } from 'middlewares/auth'
import User from 'models/user'
import next from 'next'
import nc from 'next-connect'

const handler = nc({})
dbConnect()

const currentUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    res.status(200).json({
      success: true,
      user,
    })
  } catch (error) {
    console.log(error)
  }
}

handler.use(isAuthenticatedUser).get(currentUserProfile)

export default handler
