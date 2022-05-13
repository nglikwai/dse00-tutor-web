import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PageWrapper from 'src/components/global/PageWrapper'
import BasicSearch from 'src/components/Search/BasicSearch'
import TutorList from 'src/components/TutorList'
import { Tutor } from 'src/types'
import styled from 'styled-components'

type Props = {
  recommendations: Tutor[]
}

const Home: NextPage = (props: Props) => {
  const { recommendations } = props

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

          <Section>
            <SectionTitle>
              {t('components.tutorRecommendation.popular')}
            </SectionTitle>
            <TutorList tutors={recommendations} />
          </Section>
          <Section>
            <SectionTitle>
              {t('components.tutorRecommendation.economy')}
            </SectionTitle>
            <TutorList tutors={recommendations} />
          </Section>
          <Section>
            <SectionTitle>
              {t('components.tutorRecommendation.star')}
            </SectionTitle>
            <TutorList tutors={recommendations} />
          </Section>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Section = styled.div`
  padding: 40px 0;
`

const SectionTitle = styled.h3`
  font-size: 20px;
`

export async function getServerSideProps() {
  const res = await fetch(`https://www.dse00.com/tutor`)
  const recommendations = await res.json()

  return { props: { recommendations } }
}

export default Home
