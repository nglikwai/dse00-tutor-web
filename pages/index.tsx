import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
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
          <Title>{t('components.search.basicSearch.title')}</Title>
          <UpperWrapper>
            <Header>
              <Link href='/'>
                <JoinButton>學生</JoinButton>
              </Link>
              <BasicSearch />
              <Link href='/findstudent'>
                <JoinButton>導師</JoinButton>
              </Link>
            </Header>
          </UpperWrapper>

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

const Title = styled.h2`
  font-size: 20px;
  margin: 20px 0 0 0;
`

const UpperWrapper = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ddd;
  background-color: #fffcf8;
  width: 100%;
  display: flex;
  justify-content: center;
`
const Header = styled.div`
  width: ${({ theme }) => theme.width};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const JoinButton = styled.span`
  &:hover {
    box-shadow: 0 0px 20px #ee8888;
  }
  transition: 0.4s;
  background-color: #c00;
  border: none;
  border-radius: 24px;
  color: #fff;
  font-size: 16px;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ContentWrapper = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Section = styled.div`
  padding: 44px 0;
  width: ${({ theme }) => theme.width};
`

const SectionTitle = styled.h3`
  font-size: 20px;
  margin: 8px 0 20px 0;
`

export async function getServerSideProps() {
  const res = await fetch(`https://www.dse00.com/tutor`)
  const recommendations = await res.json()

  return { props: { recommendations } }
}

export default Home
