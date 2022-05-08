import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PageWrapper from 'src/components/global/PageWrapper'
import styled from 'styled-components'

const Search: NextPage = () => {
  const { t } = useTranslation()

  const router = useRouter()

  const { query } = router

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <div>
            <span>{t('components.search.basicSearch.place')}: </span>
            <span>{query.place ?? ''}</span>
          </div>

          <div>
            <span>{t('components.search.basicSearch.subject')}: </span>
            <span>{query.subject ?? ''}</span>
          </div>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default Search
