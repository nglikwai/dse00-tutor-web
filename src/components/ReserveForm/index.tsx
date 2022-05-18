import React from 'react'
import styled from 'styled-components'

const ReserveForm = () => {
  return (
    <Wrapper>
      <h4>$180 / 小時</h4>
      <Input type='number' placeholder='聯絡電話' />
      <ReserveButton>預約學生</ReserveButton>
      <ItemsWrapper>
        <Item>
          <span>每堂時數</span>
          <span>2 小時</span>
        </Item>
        <Item>
          <span>每月堂數</span>
          <span>8 堂</span>
        </Item>
        <Item>
          <span>預計每月收入</span>
          <span>$ {180 * 8}</span>
        </Item>
      </ItemsWrapper>
      <Item>
        <span>開始日期</span>
        <span>2022年5月22日</span>
      </Item>
      <Item>
        <span>上堂地址</span>
        <span>導家提供場地</span>
      </Item>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 360px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 8px #ccc;
`
const Input = styled.input`
  ::-webkit-input-placeholder {
    color: #bbb;
  }
  border-radius: 10px;
  border: 1px solid #bbb;
  padding: 4px 10px;
  margin: 10px 0;
`

const ReserveButton = styled.button`
  &:hover {
    background-color: #dd0000;
  }
  background-color: #cc0000;
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  margin: 10px 0;
  color: white;
  transition: 1s;
`

const ItemsWrapper = styled.div`
  padding: 10px 0;
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
`
export default ReserveForm
