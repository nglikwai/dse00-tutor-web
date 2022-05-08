import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PageWrapper from 'src/components/global/PageWrapper'
import BasicSearch from 'src/components/Search/BasicSearch'
import styled from 'styled-components'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <BasicSearch />
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default Home
