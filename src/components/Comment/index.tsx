import Router from 'next/router'
import * as R from 'ramda'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setLogin, toggleLoginPageOpen } from 'src/redux/page'
import styled from 'styled-components'

const Login = () => {
  const dispatch = useDispatch()

  return (
    <CommentWrapper>
      <img
        src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'
        width='90px'
        height='90px'
      />{' '}
      <RightWrapper>
        <Name>陳小明</Name>
        <Comment>
          lanning and design of all building types, with a passionated focus on
          vacation-homes, nature hotels and Boutique hotels.
        </Comment>
      </RightWrapper>
    </CommentWrapper>
  )
}

const Name = styled.div`
  font-weight: bold;
`
const Comment = styled.div`
  padding: 10px 0;
`

const CommentWrapper = styled.div`
  display: flex;
  margin: 30px 0;
`

const RightWrapper = styled.div`
  padding: 10px 20px;
`
export default Login
