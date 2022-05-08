import React from 'react'
import styled from 'styled-components'
import Link from "next/link";

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>DSE00 Tutor</LogoWrapper>
      <Link href='/tutor/find'><StyledLink>揾學生</StyledLink></Link>
      <Link href='/student/find'><StyledLink>揾老師</StyledLink></Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.mainTheme};
  color: #fff;
  padding: 20px 40px;
  display:flex;
  align-items: center; 
  `

const LogoWrapper = styled.div`
  font-size: 20px;
  padding: 0 14px;
  font-weight: bold;


`

const StyledLink = styled.div`
    color:white;
    font-size:16px;
    text-decoration: none;
    font-weight: 500;
    padding: 0 14px;
    font-size: 18px;

`

export default Header
