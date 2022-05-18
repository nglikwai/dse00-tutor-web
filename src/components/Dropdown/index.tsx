import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLoginButtonOpen } from 'src/redux/page'
import styled from 'styled-components'

type Props = {
  onClick: () => void
}

type StatusState = {
  pageStatus: {
    open: boolean
  }
}

const Dropdown = (props: Props) => {
  const dispatch = useDispatch()
  const { open } = useSelector((state: StatusState) => state.pageStatus)

  const LoginButtonOnClick = () => {
    props.onClick()
    dispatch(toggleLoginButtonOpen())
  }

  return (
    <Wrapper>
      <ButtonWrapper onClick={() => dispatch(toggleLoginButtonOpen())}>
        <FontAwesomeIcon icon={faBars} color='white' />
        <FontAwesomeIcon icon={faUser} />
      </ButtonWrapper>
      {open === true && (
        <Menu>
          <MenuItem onClick={LoginButtonOnClick}>Login</MenuItem>

          <Link href='/'>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link href='/'>
            <MenuItem>語言：中文</MenuItem>
          </Link>
        </Menu>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div``
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
  padding: 0 4px;
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
