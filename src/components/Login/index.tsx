import * as R from 'ramda'
import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Wrapper>
      <Title>Log in or sign up</Title>
      <Welcome>Welcome to DSE00 Tutor</Welcome>
      <Input placeholder='username' type='text' />
      <Input placeholder='password' type='password' />
      <SubmitButton color={'#cc0000'}>Continue</SubmitButton>
      <p>or</p>
      <SubmitButton primary>Continue with Google</SubmitButton>
      <SubmitButton primary>Continue with Apple</SubmitButton>
      <SubmitButton primary>Continue with Facebook</SubmitButton>
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

export default Login
