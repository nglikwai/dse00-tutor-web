import { GetServerSideProps } from 'next'
import type { SignInResponse } from 'next-auth/client'
import { getSession, signIn } from 'next-auth/client'
import * as R from 'ramda'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { toggleLoginPageOpen } from 'src/redux/page'
import { StatusState } from 'src/redux/page/types'
import { loadUserRequest } from 'src/redux/user'
import styled from 'styled-components'

const Login = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const { fetching } = useSelector((state: StatusState) => state.user)

  const loginHandler = async (e: React.MouseEvent) => {
    e.preventDefault()

    const result = (await signIn('credentials', {
      redirect: false,
      name,
      password,
    })) as unknown as SignInResponse

    if (result.error) {
      toast.error(result.error)
    } else {
      dispatch(loadUserRequest())
      dispatch(toggleLoginPageOpen(false))
    }
  }
  return (
    <Wrapper>
      <Title> {t('components.loginPage.loginOrSignin')}</Title>
      <Welcome>{t('common.welcome')}</Welcome>
      <Input
        placeholder='username'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {fetching === false && (
        <SubmitButton color={'#cc0000'} onClick={loginHandler}>
          {t('buttons.continue')}
        </SubmitButton>
      )}
      <p>{t('common.or')}</p>
      <SubmitButton primary='true'>{t('buttons.loginWithGoogle')}</SubmitButton>
      <SubmitButton primary='true'>{t('buttons.loginWithApple')}</SubmitButton>
      <SubmitButton primary='true'>
        {t('buttons.loginWithFacebook')}
      </SubmitButton>
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
