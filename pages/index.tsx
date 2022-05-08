import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PageWrapper from 'src/components/global/PageWrapper'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <h2>尋找補習老師</h2>
      </PageWrapper>
    </div>
  )
}

export default Home
