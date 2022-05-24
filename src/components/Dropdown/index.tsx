import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { signOut } from 'next-auth/client'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLoginButtonOpen, toggleLoginPageOpen } from 'src/redux/page'
import { StatusState } from 'src/redux/page/types'
import { changeIsTutor } from 'src/redux/user'
import styled from 'styled-components'

const Dropdown = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { open } = useSelector((state: StatusState) => state.pageStatus)
  const { isTutor, isLogin, name } = useSelector(
    (state: StatusState) => state.user,
  )

  const LoginButtonOnClick = () => {
    dispatch(toggleLoginPageOpen(true))
    dispatch(toggleLoginButtonOpen())
  }

  return (
    <Wrapper>
      <Link href='/tutor/1'>
        <Name>
          {isLogin ? `${t('profile.hi')}, ${name.toUpperCase()}` : ''}
        </Name>
      </Link>

      <ButtonWrapper
        onClick={() => open === false && dispatch(toggleLoginButtonOpen())}
      >
        <FontAwesomeIcon icon={faBars} color='white' />
        <FontAwesomeIcon icon={faUser} />
      </ButtonWrapper>
      {open === true && (
        <Menu>
          {!isLogin ? (
            <>
              <MenuItem onClick={LoginButtonOnClick}>
                {t('buttons.login')}
              </MenuItem>
              <MenuItem onClick={LoginButtonOnClick}>
                {t('buttons.signup')}
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => signOut()}>
                {t('buttons.logout')}
              </MenuItem>
            </>
          )}

          <Link href='/'>
            <MenuItem onClick={() => dispatch(changeIsTutor())}>
              {t('buttons.switch_to')}{' '}
              {!isTutor ? `${t('common.tutor')}` : `${t('common.student')}`}
            </MenuItem>
          </Link>
        </Menu>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  width: 200px;
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

const Name = styled.span`
  &:hover {
    text-shadow: 0 0 20px white;
  }
  &:active {
    background-color: #dd1111;
  }
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 2rem;
`

export default Dropdown
