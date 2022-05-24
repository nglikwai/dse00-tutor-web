import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Dropdown from 'src/components/Dropdown'
import Login from 'src/components/Login'
import PATHNAME from 'src/constants/pathname'
import { toggleLoginPageOpen } from 'src/redux/page'
import { StatusState } from 'src/redux/page/types'
import styled from 'styled-components'

const Header = () => {
  const dispatch = useDispatch()
  const { loginPage } = useSelector((state: StatusState) => state.pageStatus)
  const { isTutor } = useSelector((state: StatusState) => state.user)

  const { t } = useTranslation()

  return (
    <OuterWrapper>
      <Wrapper>
        <LeftWrapper>
          <StyledLink href={PATHNAME.HOME_PAGE}>
            <LogoWrapper>{t('common.product_name')}</LogoWrapper>
          </StyledLink>
          {isTutor && (
            <StyledLink href={PATHNAME.FIND_STUDENT}>
              <LinkWrapper>{t('nav.find_student')}</LinkWrapper>
            </StyledLink>
          )}
          {!isTutor && (
            <>
              <StyledLink href={PATHNAME.FIND_STUDENT}>
                <LinkWrapper>{t('nav.find_tutor')}</LinkWrapper>
              </StyledLink>
              <StyledLink href='/case/new'>
                <LinkWrapper>{t('nav.create_case')}</LinkWrapper>
              </StyledLink>
            </>
          )}
        </LeftWrapper>
        <RightWrapper>
          <Dropdown />
        </RightWrapper>
      </Wrapper>
      {loginPage === true && (
        <ModalWrapper>
          <Close onClick={() => dispatch(toggleLoginPageOpen(false))}>X</Close>
          <Login />
        </ModalWrapper>
      )}
    </OuterWrapper>
  )
}
const OuterWrapper = styled.div`
  background: ${({ theme }) => theme.palette.mainTheme};
  box-shadow: 0 0 4px #bbb;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: 0.5s;
`
const Wrapper = styled.div`
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.width};
`

const LeftWrapper = styled.div``

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const LogoWrapper = styled.span`
  &:hover {
    text-shadow: 0 0 20px #fff;
  }
  transition: 0.4s;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  padding: 0 20px 0 0;
`

const LinkWrapper = styled.span`
  &:hover {
    text-shadow: 0 0 20px #fff;
  }
  transition: 0.4s;
  font-size: 18px;
  cursor: pointer;
  padding: 0 20px;
`

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Close = styled.button`
  &:hover {
    color: #aa0000;
  }
  border: none;
  color: #aaa;
  font-size: 20px;
  border-radius: 3rem;
  padding: 8px 16px;
`
const StyledLink = styled(Link)``

export default Header
