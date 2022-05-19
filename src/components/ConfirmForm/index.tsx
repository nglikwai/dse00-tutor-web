import * as R from 'ramda'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleConfirmPageOpen } from 'src/redux/page'
import { StatusState } from 'src/redux/page/types'
import { confirmReserve } from 'src/redux/user'
import { CaseUnit } from 'src/types'
import styled from 'styled-components'
type Props = {
  caseUnit: CaseUnit
}

const ConfirmForm = (props: Props) => {
  const { caseUnit } = props
  const dispatch = useDispatch()
  const { reserveNumber } = useSelector((state: StatusState) => state.user)

  const loginHandler = () => {
    dispatch(toggleConfirmPageOpen())
    dispatch(confirmReserve(caseUnit.case))
  }
  return (
    <Wrapper>
      <Title />
      <Welcome>{`${caseUnit.case} : ${caseUnit.name}同學${caseUnit.subject}的補習個案`}</Welcome>
      <Item>最快開始日期 ： 30-06-2022</Item>
      <Item>每星期{reserveNumber}</Item>
      <Input placeholder='留言' />
      <SubmitButton
        color={reserveNumber.includes(caseUnit.case) ? 'green' : '#cc0000'}
        onClick={loginHandler}
      >
        確認預約
      </SubmitButton>
    </Wrapper>
  )
}

const Welcome = styled.h5`
  padding: 30px 0 0 0;
  font-weight: bold;
`
const Input = styled.input`
  ::placeholder {
    color: #bbb;
    font-size: 18px;
  }
  padding: 10px 20px;
  width: 90%;
  margin: 20px 0;
  border-radius: 1rem;
  border: 1px solid #ddd;
`

const SubmitButton = styled((props) => (
  <button {...R.omit(['withTopPadding'], props)} />
))`
  padding: 10px 20px;
  width: 90%;
  margin: 20px 0;
  border-radius: 1rem;
  border: 1px solid #ddd;
  background: ${(props) => (props.color ? props.color : '#eee')};
  color: ${(props) => (props.primary ? 'black' : 'white')};
`

const Item = styled.div`
  padding: 20px 0;
`
const Title = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
`
const Wrapper = styled.div`
  background-color: white;
  width: 500px;
  height: 410px;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default ConfirmForm
