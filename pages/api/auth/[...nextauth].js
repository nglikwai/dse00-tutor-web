import dbConnect from 'config/dbConnect'
import User from 'models/user'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        dbConnect()

        const { name, password } = credentials

        if (!name || !password) {
          throw new Error('Please enter name or password')
        }

        const user = await User.findOne({ name }).select('+password')

        if (!user) {
          throw new Error('Invalid name or Password')
        }

        const isPasswordMatched = await user.comparePassword(password)

        if (!isPasswordMatched) {
          throw new Error('invalid name or password')
        }

        return Promise.resolve(user)
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user)
      return Promise.resolve(token)
    },
    session: async (session, user) => {
      session.user = user.user
      return Promise.resolve(session)
    },
  },
})
