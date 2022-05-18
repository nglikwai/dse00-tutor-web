import 'bootstrap/dist/css/bootstrap.css'

import { env } from 'process'
import * as R from 'ramda'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from 'src/components/global/Footer'
import Header from 'src/components/global/Header'
import { toggleLoginButtonOpen } from 'src/redux/page'
import { StatusState } from 'src/redux/page/types'
import styled from 'styled-components'
type Props = {
  children: React.ReactNode
}

const PageWrapper = (props: Props) => {
  const { children, ...restProps } = props

  const dispatch = useDispatch()
  const { open } = useSelector((state: StatusState) => state.pageStatus)

  const onClickHandler = () => {
    if (open === true) {
      dispatch(toggleLoginButtonOpen())
    }
  }
  // edited
  return (
    <Wrapper {...restProps}>
      <InnerWrapper onClick={onClickHandler}>
        <Header />
        <ContentWrapper withTopPadding>{children}</ContentWrapper>
        <Footer />
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.backgroundColor};
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
