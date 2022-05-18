import {
  faCalendarAlt,
  faCalendarDay,
  faClockFour,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Calendar from 'src/components/Calendar'
import PageWrapper from 'src/components/global/PageWrapper'
import Map from 'src/components/Map/index'
import ReserveForm from 'src/components/ReserveForm'
import BasicSearch from 'src/components/Search/BasicSearch'
import { searchTutorRequest } from 'src/redux/search'
import {
  isFetchingSelector,
  searchResultSelector,
} from 'src/redux/search/selectors'
import { CaseUnit } from 'src/types'
import styled from 'styled-components'

type Props = {
  caseUnit: CaseUnit
}

const Cases: NextPage = (props: Props) => {
  const router = useRouter()
  const { query } = router
  const { caseUnit } = props
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
            <ItemTitle>
              A00{caseUnit.case} 田家炳中三{caseUnit.subject}補習
            </ItemTitle>
            <p>{caseUnit.region}</p>
          </Header>
          <LowerWrapper>
            <LeftBarWrapper>
              <Brief>
                <div>
                  <ItemTitle>
                    {caseUnit.name.substring(0, 1)}同學的補習個案
                  </ItemTitle>
                  <p>
                    中{caseUnit.form}，{caseUnit.subject}，{caseUnit.gender}
                  </p>
                </div>
                <Avator />
              </Brief>
              <ItemsWrapper>
                <Item>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    color='#aaa'
                    size='lg'
                  />
                  <ItemInner>
                    刊登時間
                    <ItemText>{caseUnit.createdAt}</ItemText>
                  </ItemInner>
                </Item>
                <Item>
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    color='#aaa'
                    size='lg'
                  />
                  <ItemInner>
                    每星期堂數
                    <ItemText>{caseUnit.lession} 堂</ItemText>
                  </ItemInner>
                </Item>
                <Item>
                  <FontAwesomeIcon icon={faClockFour} color='#aaa' size='lg' />
                  <ItemInner>
                    每堂時間
                    <ItemText>{caseUnit.hour} 小時</ItemText>
                  </ItemInner>
                </Item>
              </ItemsWrapper>
              <ItemsWrapper>
                <ItemTitle>
                  選擇你開始的日期<ItemText>2022年5月22日</ItemText>
                </ItemTitle>

                <Calendar />
              </ItemsWrapper>
            </LeftBarWrapper>

            <RightBarWrapper>
              <ReserveForm />
            </RightBarWrapper>
          </LowerWrapper>
          <ItemsWrapper>
            <ItemTitle>補習地點</ItemTitle>
            <p>Tai Po Center , {caseUnit.building}</p>
            <Map />
          </ItemsWrapper>
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
`

const LowerWrapper = styled.div`
  display: flex;
`

const LeftBarWrapper = styled.div`
  width: 800px;
  padding: 10px 60px 0 0;
`
const RightBarWrapper = styled.div``

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
  padding: 0 0 20px 0;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`

const ItemsWrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
`

const Item = styled.div`
  display: flex;
  padding: 10px 0;
`
const ItemTitle = styled.h4`
  padding: 20px 0;
  font-weight: bold;
`
const ItemInner = styled.div`
  padding: 0 12px;
`
const ItemText = styled.span`
  display: block;
  color: #bbb;
  font-size: 14px;
`

const BackButton = styled(Link)`
  background-color: #cc0000;
`
type QueryProps = {
  query: { id: string }
}
export async function getServerSideProps({ query }: QueryProps) {
  const res = await fetch(`https://www.dse00.com/tutor/case/${query.id}`)
  const caseUnit = await res.json()

  return { props: { caseUnit } }
}

export default Cases
