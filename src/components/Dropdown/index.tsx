import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setLogout,
  toggleLoginButtonOpen,
  toggleLoginPageOpen,
} from 'src/redux/page'
import { StatusState } from 'src/redux/page/types'
import styled from 'styled-components'

const Dropdown = () => {
  const dispatch = useDispatch()
  const { open, login } = useSelector((state: StatusState) => state.pageStatus)

  const LoginButtonOnClick = () => {
    dispatch(toggleLoginPageOpen())
    dispatch(toggleLoginButtonOpen())
  }

  return (
    <Wrapper>
      <span>{login && 'Hi, Lik Wai'}</span>

      <ButtonWrapper
        onClick={() => open === false && dispatch(toggleLoginButtonOpen())}
      >
        <FontAwesomeIcon icon={faBars} color='white' />
        <FontAwesomeIcon icon={faUser} />
      </ButtonWrapper>
      {open === true && (
        <Menu>
          {!login ? (
            <>
              <MenuItem onClick={LoginButtonOnClick}>Login</MenuItem>
              <MenuItem onClick={LoginButtonOnClick}>Register</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => dispatch(setLogout())}>Log out</MenuItem>
            </>
          )}

          <Link href='/'>
            <MenuItem>語言：中文</MenuItem>
          </Link>
        </Menu>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  width: 160px;
  justify-content: space-between;
  align-items: center;
`
const ButtonWrapper = styled.div`
  &:hover {
    box-shadow: 0 0px 20px white;
  }
  cursor: pointer;
  border: 1.5px solid white;
  border-radius: 3rem;
  padding: 8px 12px;
  transition: 0.5s;
  width: 70px;
  display: flex;
  justify-content: space-between;
`
const Menu = styled.div`
  position: absolute;
  background-color: rgba(256, 256, 256, 0.6);
  height: 160px;
  padding: 0 12px;
  border-radius: 1rem;
  top: 60px;
  z-index: 10;
`

const MenuItem = styled.div`
  &:hover {
    background-color: #eee;
  }
  background-color: white;
  color: #656565;
  padding: 8px 20px;
  margin: 8px 0;
  box-shadow: 0 4px 4px #eee;
  border-radius: 1.5rem;
  transition: 0.4s;
  cursor: pointer;
`

export default Dropdown
