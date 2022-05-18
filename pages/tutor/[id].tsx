import {
  faBook,
  faBookBookmark,
  faCheck,
  faHouse,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import * as R from 'ramda'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Comment from 'src/components/Comment'
import PageWrapper from 'src/components/global/PageWrapper'
import styled from 'styled-components'

const Cases: NextPage = () => {
  const { t } = useTranslation()

  // const router = useRouter()

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <Wrapper>
            <LeftBarWrapper>
              <Avator />
              <ItemTitle>
                <FontAwesomeIcon icon={faShieldAlt} color='#444' size='lg' />
                <ItemInner>已驗證</ItemInner>
              </ItemTitle>
              <Item>
                <FontAwesomeIcon icon={faCheck} color='#444' size='lg' />
                <ItemInner>電話號碼</ItemInner>
              </Item>
              <Item>
                <FontAwesomeIcon icon={faCheck} color='#444' size='lg' />
                <ItemInner>考試證書</ItemInner>
              </Item>
            </LeftBarWrapper>
            <RightBarWrapper>
              <Header>
                <ItemTitle>
                  你好，我是陳加文老師 <ItemText>自 05-05-2022 加入</ItemText>
                </ItemTitle>
              </Header>

              <Brief>
                <div>
                  <ItemTitle>關於陳老師</ItemTitle>
                  <p>
                    I Søren Sarup (born 1975) lives in Aarhus, Fanø and Agger. I
                    am an independent Danish architect that works professionally
                    with planning and design of all building types, with a
                    passionated focus on vacation-homes, nature hotels and
                    Boutique hotels.
                  </p>
                </div>
              </Brief>
              <ItemsWrapper>
                <Item>
                  <FontAwesomeIcon icon={faHouse} color='#555' size='lg' />
                  <ItemInner>住在大埔</ItemInner>
                </Item>
                <Item>
                  <FontAwesomeIcon icon={faBook} color='#555' size='lg' />
                  <ItemInner>教授化學、生物</ItemInner>
                </Item>
                <Item>
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    color='#555'
                    size='lg'
                  />
                  <ItemInner>就讀香港中文大學</ItemInner>
                </Item>
              </ItemsWrapper>
              <ItemsWrapper>
                <ItemTitle>課堂筆記</ItemTitle>
                <Notes src='https://1.bp.blogspot.com/-sP6euyqs1pc/XUMAy04i4gI/AAAAAAAGpAM/MThDM11XjO8B3WoScwLaGsvnz_uVhaN-QCLcBGAs/s1600/StockSnap_TBJ9OPDGMK%2B%255B2%255D.jpg' />
                <Notes src='https://1.bp.blogspot.com/-sP6euyqs1pc/XUMAy04i4gI/AAAAAAAGpAM/MThDM11XjO8B3WoScwLaGsvnz_uVhaN-QCLcBGAs/s1600/StockSnap_TBJ9OPDGMK%2B%255B2%255D.jpg' />
              </ItemsWrapper>
              <ItemsWrapper>
                <ItemTitle>學生留言</ItemTitle>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <MoreButton>更多留言</MoreButton>
              </ItemsWrapper>
            </RightBarWrapper>
          </Wrapper>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}
const Header = styled.div`
  padding: 30px 0;
`
const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftBarWrapper = styled.div`
  width: 300px;
  height: 400px;
  padding: 30px;
  margin: 60px;
  border: 1px #ddd solid;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RightBarWrapper = styled.div`
  padding: 0 20px;
  margin: 20px 0;
  width: 700px;
`

const Avator = styled((props) => (
  <div {...R.omit(['withTopPadding'], props)} />
))`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.width ? props.height : '160px')};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png');
  display: inline-block;
`

const Brief = styled.div`
  display: flex;
  padding: 0 0 20px 0;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`

const ItemsWrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
`
const Notes = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 1rem;
  margin: 0 20px 0 0;
`

const Item = styled.div`
  display: flex;
  padding: 10px 0;
`
const ItemTitle = styled.h4`
  padding: 20px 0;
  font-weight: bold;
`
const ItemInner = styled.span`
  padding: 0 12px;
`
const ItemText = styled.span`
  display: block;
  color: #bbb;
  font-size: 14px;
`

const MoreButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  padding: 10px 50px;
  margin: 0 0 50px 0;
  color: #444;
  border: 1px solid #444;
`

export default Cases
