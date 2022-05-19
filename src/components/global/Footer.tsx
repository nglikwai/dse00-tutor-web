import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <FooterWrapper>
      <ItemWrapper>
        <Item>© 2022 DSE00 Tutor</Item>
        <Item>{t('footer.privacy')}</Item>
        <Item>{t('footer.term')}</Item>
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
  background: ${({ theme }) => theme.palette.backgroundColor};
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
