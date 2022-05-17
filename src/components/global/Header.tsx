import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { LogoJsonLd } from 'next-seo'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PATHNAME from 'src/constants/pathname'
import styled from 'styled-components'

const Header = () => {
  const { t } = useTranslation()

  const LoginButtonOnClick = () => {
    alert('hi')
  }

  return (
    <OuterWrapper>
      <Wrapper>
        <LeftWrapper>
          <StyledLink href={PATHNAME.HOME_PAGE}>
            <LogoWrapper>{t('common.product_name')}</LogoWrapper>
          </StyledLink>
          <StyledLink href={PATHNAME.FIND_STUDENT}>
            <LinkWrapper>{t('nav.find_student')}</LinkWrapper>
          </StyledLink>
          <StyledLink href={PATHNAME.FIND_TUTOR}>
            <LinkWrapper>{t('nav.find_tutor')}</LinkWrapper>
          </StyledLink>
        </LeftWrapper>
        <RightWrapper>
          <LoginWrapper onClick={LoginButtonOnClick}>
            <FontAwesomeIcon icon={faBars} color='white' />
            <FontAwesomeIcon icon={faUser} />
          </LoginWrapper>
          <LoginMenu id='login-menu'>
            <LoginMenuItem>Login</LoginMenuItem>
            <LoginMenuItem>Register</LoginMenuItem>
            <LoginMenuItem>語言：中文</LoginMenuItem>
          </LoginMenu>
        </RightWrapper>
      </Wrapper>
    </OuterWrapper>
  )
}
const OuterWrapper = styled.div`
  background: ${({ theme }) => theme.palette.mainTheme};
  width: 100%;
  display: flex;
  justify-content: center;
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
const LoginWrapper = styled.div`
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
const LoginMenu = styled.div`
  position: absolute;
  top: 68px;
  z-index: 10;
`
const LoginMenuItem = styled.div`
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

const LogoWrapper = styled.span`
  transition: 0.4s;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  padding: 0 20px 0 0;
`

const LinkWrapper = styled.span`
  transition: 0.4s;
  font-size: 18px;
  cursor: pointer;
  padding: 0 20px;
`

const StyledLink = styled(Link)``

export default Header
