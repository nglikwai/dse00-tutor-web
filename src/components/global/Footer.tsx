import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <ItemWrapper>
        <Item>© 2022 DSE00 Tutor</Item>
        <Item>Privacy</Item>
        <Item>Terms</Item>
      </ItemWrapper>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  background: #fffcf8;
`

const ItemWrapper = styled.div`
  width: ${({ theme }) => theme.width};
  height: 48px;
  display: flex;
  justify-content: space-arround;
  align-items: center;
`

const Item = styled.div`
  margin: 0 12px;
  color: #888;
`
