import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

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
import React from 'react'
import { DayPicker } from 'react-dates'
import { useTranslation } from 'react-i18next'
import PageWrapper from 'src/components/global/PageWrapper'
import Map from 'src/components/Map/index'
import ReserveForm from 'src/components/ReserveForm'
import { CaseUnit } from 'src/types'
import { down } from 'styled-breakpoints'
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
              <span>
                A00{caseUnit.case} 田家炳中三{caseUnit.subject}補習
              </span>
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
                    <span>刊登時間</span>
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
                    <span>每星期堂數</span>
                    <ItemText>{caseUnit.lession} 堂</ItemText>
                  </ItemInner>
                </Item>
                <Item>
                  <FontAwesomeIcon icon={faClockFour} color='#aaa' size='lg' />
                  <ItemInner>
                    <span>每堂時間</span>
                    <ItemText>{caseUnit.hour} 小時</ItemText>
                  </ItemInner>
                </Item>
              </ItemsWrapper>
              <ItemsWrapper>
                <ItemTitle>
                  <span>
                    選擇你開始的日期<ItemText>2022年5月22日</ItemText>
                  </span>
                </ItemTitle>

                <DayPicker />
              </ItemsWrapper>
            </LeftBarWrapper>

            <RightBarWrapper>
              <ReserveForm caseUnit={caseUnit} />
            </RightBarWrapper>
          </LowerWrapper>
          <ItemsWrapper>
            <ItemTitle>
              <span>補習地點</span>
            </ItemTitle>
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
  padding: 0 10px;
`

const LowerWrapper = styled.div`
  display: flex;
  ${down('tablet')} {
    flex-direction: column-reverse;
  }
`

const LeftBarWrapper = styled.div`
  width: 800px;
  padding: 10px 60px 0 0;
  ${down('tablet')} {
    width: 100%;
  }
`
const RightBarWrapper = styled.div`
  ${down('tablet')} {
    display: flex;
    justify-content: center;
  }
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
