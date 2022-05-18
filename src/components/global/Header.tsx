import Link from 'next/link'
import { LogoJsonLd } from 'next-seo'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Dropdown from 'src/components/Dropdown'
import Login from 'src/components/Login'
import PATHNAME from 'src/constants/pathname'
import styled from 'styled-components'

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
]

const Header = () => {
  const [login, setLogin] = useState(false)

  const { t } = useTranslation()

  const LoginModalOpen = () => {
    setLogin(!login)
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
          <Dropdown onClick={LoginModalOpen} />
        </RightWrapper>
      </Wrapper>
      {login && (
        <ModalWrapper>
          <Close onClick={LoginModalOpen}>X</Close>
          <Login />
        </ModalWrapper>
      )}
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
