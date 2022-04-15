import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>DSE00 Tutor</LogoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.mainTheme};
  color: #fff;
  padding: 20px 40px;
`

const LogoWrapper = styled.div`
  font-size: 20px;
`

export default Header
