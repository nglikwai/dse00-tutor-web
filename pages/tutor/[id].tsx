import type { NextPage } from 'next'
import {
  faBook,
  faHeart,
  faLocation,
  faMarsDouble,
  faCalendarDay,
  faSackDollar,
  faCalendarAlt,
  faClockFour,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Calendar from 'src/components/Calendar'
import ReserveForm from 'src/components/ReserveForm'
import Map from 'src/components/Map/index'
import PageWrapper from 'src/components/global/PageWrapper'
import BasicSearch from 'src/components/Search/BasicSearch'
import { searchTutorRequest } from 'src/redux/search'
import {
  isFetchingSelector,
  searchResultSelector,
} from 'src/redux/search/selectors'
import { Tutor } from 'src/types'
import styled from 'styled-components'


type Props = {
  results: Tutor[]
}

const Cases: NextPage = (props: Props) => {
  const router = useRouter()
  const { query } = router
  const { results } = props
  const { t } = useTranslation()

  // const router = useRouter()

  const dispatch = useDispatch()

  const tutors = useSelector(searchResultSelector)

  const isFetching = useSelector(isFetchingSelector)

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <Header>
            <ItemTitle>AA001 陳老師</ItemTitle>
            <p>Tai Po 大埔</p>
          </Header>
          <LowerWrapper>
            <LeftBarWrapper>
              <Brief>
                <div>
                  <ItemTitle>李同學的補習個案</ItemTitle>
                  <p>中三，化學，女性</p>
                </div>
                <Avator />
              </Brief>
              <ItemsWrapper>
                <Item>
                  <FontAwesomeIcon icon={faCalendarAlt} color='#aaa' size='lg' />
                  <ItemInner>刊登時間
                    <ItemText>20 May 2022</ItemText>
                  </ItemInner>
                </Item>
                <Item>
                  <FontAwesomeIcon icon={faCalendarDay} color='#aaa' size='lg' />
                  <ItemInner>每星期堂數
                    <ItemText>2 堂</ItemText>
                  </ItemInner>
                </Item>
                <Item>
                  <FontAwesomeIcon icon={faClockFour} color='#aaa' size='lg' />
                  <ItemInner>每堂時間
                    <ItemText>2 小時</ItemText>
                  </ItemInner>
                </Item>
              </ItemsWrapper>
              <ItemsWrapper>
                <ItemTitle>選擇你開始的日期<ItemText>2022年5月22日</ItemText></ItemTitle>
                
                <Calendar/>
              </ItemsWrapper>
            </LeftBarWrapper>

            <RightBarWrapper>
            <ReserveForm/>
            </RightBarWrapper>
          </LowerWrapper>
          <ItemsWrapper>
            <ItemTitle>補習地點</ItemTitle>
            <p>Tai Po Center , 大埔中心</p>
            <Map/></ItemsWrapper>
          
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}
const Header = styled.div`
  padding: 30px 0;
`
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const LowerWrapper = styled.div`
  display: flex;
`

const LeftBarWrapper = styled.div`
width:800px;
padding:10px 60px 0 0;
`
const RightBarWrapper = styled.div`

`

const Avator = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png');
  display: inline-block;
`

const Brief = styled.div`
  display: flex;
  padding:0 0 20px 0;
  justify-content: space-between;
  border-bottom:1px solid #ccc;

`

const ItemsWrapper = styled.div`
  padding:20px 0;
  border-bottom:1px solid #ccc;

`

const Item = styled.div`
display:flex;
  padding:10px 0 
`
const ItemTitle = styled.h4`
  padding: 20px 0;
  font-weight:bold;
`
const ItemInner = styled.div`
padding: 0 12px;
`
const ItemText = styled.span`
  display:block;
  color:#bbb;
  font-size:14px;
`


export default Cases
