import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Router from 'next/router'
import { getSession, signIn } from 'next-auth/client'
import * as R from 'ramda'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleLoginPageOpen } from 'src/redux/page'
import { loadUserRequest } from 'src/redux/user'
import styled from 'styled-components'

const Login = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const loginHandler = async (e: React.MouseEvent) => {
    dispatch(loadUserRequest())
    e.preventDefault()

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    dispatch(toggleLoginPageOpen())
  }
  return (
    <Wrapper>
      <Title>Log in or sign up</Title>
      <Welcome>Welcome to DSE00 Tutor</Welcome>
      <Input
        placeholder='username'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton color={'#cc0000'} onClick={loginHandler}>
        Continue
      </SubmitButton>
      <p>or</p>
      <SubmitButton primary='true'>Continue with Google</SubmitButton>
      <SubmitButton primary='true'>Continue with Apple</SubmitButton>
      <SubmitButton primary='true'>Continue with Facebook</SubmitButton>
    </Wrapper>
  )
}

const Welcome = styled.h5`
  padding: 30px 0 0 0;
  font-weight: bold;
`
const Input = styled.input`
  ::placeholder {
    color: #bbb;
    font-size: 18px;
  }
  padding: 10px 20px;
  width: 90%;
  margin: 20px 0;
  border-radius: 1rem;
  border: 1px solid #ddd;
`

const SubmitButton = styled((props) => (
  <button {...R.omit(['withTopPadding'], props)} />
))`
  padding: 10px 20px;
  width: 90%;
  margin: 20px 0;
  border-radius: 1rem;
  border: 1px solid #ddd;
  background: ${(props) => (props.color ? props.color : '#eee')};
  color: ${(props) => (props.primary ? 'black' : 'white')};
`

const ButtonWrapper = styled.div`
  border-top: 1px solid #ddd;
`
const Title = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
`
const Wrapper = styled.div`
  background-color: white;
  width: 500px;
  height: 700px;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

export default Login
