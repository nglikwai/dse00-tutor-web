import 'bootstrap/dist/css/bootstrap.css'

import * as R from 'ramda'
import React from 'react'
import styled from 'styled-components'

import Header from './Header'
type Props = {
  children: React.ReactNode
}

const PageWrapper = (props: Props) => {
  const { children, ...restProps } = props

  return (
    <Wrapper {...restProps}>
      <InnerWrapper>
        <Header />
        <ContentWrapper withTopPadding>{children}</ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #fffcf8;
  display: flex;
  flex-direction: column;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  font-family: “Helvetica Neue”, Helvetica, Arial, “PingFang HK”, 微软雅黑,
    “Microsoft YaHei”, 华文细黑, STHeiti, sans-serif;
`

// https://stackoverflow.com/a/31835167
const InnerWrapper = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrapper = styled((props) => (
  <div {...R.omit(['withTopPadding'], props)} />
))`
  flex: auto;
  padding-top: ${({ withTopPadding }) => (withTopPadding ? '0px' : '0px')};
  position: relative;
`

export default PageWrapper
