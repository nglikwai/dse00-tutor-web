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
import { CaseUnit } from 'src/types'
import styled from 'styled-components'

type Props = {
  cases: CaseUnit[]
}

const Cases: NextPage = (props: Props) => {
  const router = useRouter()
  const { query } = router
  const { cases } = props
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
          <BasicSearch />
          <div>
            <span>{t('components.search.basicSearch.place')}: </span>
            <span>{query.place ?? ''}</span>
            <span>{t('components.search.basicSearch.subject')}: </span>
            <span>{query.subject ?? ''}</span>
          </div>

          {isFetching && (
            <div>
              <img src='Spinner.svg' />
            </div>
          )}
          {cases.map((caseUnit) => (
            <CaseCard key={caseUnit.name} caseUnit={caseUnit} />
          ))}
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;
`

export async function getServerSideProps() {
  const res = await fetch(`https://www.dse00.com/tutor/case`)
  const cases = await res.json()

  return { props: { cases } }
}

export default Cases
