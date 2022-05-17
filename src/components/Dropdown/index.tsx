import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => void
}

const Dropdown = (props: Props) => {
  const [open, setOpen] = useState(false)

  const ButtonOnClick = () => {
    setOpen(!open)
  }

  const LoginButtonOnClick = () => {
    props.onClick()
    ButtonOnClick()
  }

  return (
    <>
      <Wrapper onClick={ButtonOnClick}>
        <FontAwesomeIcon icon={faBars} color='white' />
        <FontAwesomeIcon icon={faUser} />
      </Wrapper>
      {open === true && (
        <Menu id='-menu'>
          <MenuItem onClick={LoginButtonOnClick}>Login</MenuItem>

          <Link href='/'>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link href='/'>
            <MenuItem>語言：中文</MenuItem>
          </Link>
        </Menu>
      )}
    </>
  )
}

const Wrapper = styled.div`
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
