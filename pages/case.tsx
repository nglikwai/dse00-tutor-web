import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import CaseCard from 'src/components/CaseCard'
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
            <h3>AA001 田家炳中三中文補習</h3>
            <p>Tai Po 大埔</p>
          </Header>
          <LowerWrapper>
            <LeftBarWrapper>
              <Brief>
                <div>
                  <h4>李同學的補習個案</h4>
                  <p>中三，化學，女性</p>
                </div>
                <Avator />
              </Brief>
            </LeftBarWrapper>

            <RightBarWrapper>right</RightBarWrapper>
          </LowerWrapper>
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

const LeftBarWrapper = styled.div``
const RightBarWrapper = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #cc0000;
  border
`

const Avator = styled.div`
  border-radius: 50%;
  margin: 0 20px;
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
  justify-content: space-between;
  width: 600px;
`

export default Cases
