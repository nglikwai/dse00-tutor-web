import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import PageWrapper from 'src/components/global/PageWrapper'
import BasicSearch from 'src/components/Search/BasicSearch'
import TutorList from 'src/components/TutorList'
import { StatusState } from 'src/redux/page/types'
import { Tutor } from 'src/types'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

type Props = {
  recommendations: Tutor[]
}

const Home: NextPage = (props: Props) => {
  const { recommendations } = props
  const { isTutor } = useSelector((state: StatusState) => state.user)
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <Title>
            {isTutor
              ? `${t('components.search.basicSearch.find_student')}`
              : `${t('components.search.basicSearch.find_tutor')}`}
          </Title>
          <UpperWrapper>
            <Header>
              <div />
              <BasicSearch />
              <Link href='/findstudent'>
                <JoinButton>
                  {isTutor ? `${t('common.tutor')}` : `${t('common.student')}`}
                </JoinButton>
              </Link>
            </Header>
          </UpperWrapper>

          <Section>
            <SectionTitle>
              {t('components.tutorRecommendation.popular')}
            </SectionTitle>
            <TutorList tutors={recommendations} />
            <TutorList tutors={recommendations} />
          </Section>
          <Section>
            <SectionTitle>
              {t('components.tutorRecommendation.economy')}
            </SectionTitle>
            <TutorList tutors={recommendations} />
            <TutorList tutors={recommendations} />
          </Section>
          <Section>
            <SectionTitle>
              {t('components.tutorRecommendation.star')}
            </SectionTitle>
            <TutorList tutors={recommendations} />
            <TutorList tutors={recommendations} />
            <TutorList tutors={recommendations} />
            <TutorList tutors={recommendations} />
          </Section>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const Title = styled.h2`
  font-size: 14px;
  margin: 20px 0 0 0;

  ${up('tablet')} {
    font-size: 16px;
  }

  ${up('laptop')} {
    font-size: 18px;
  }

  ${up('desktop')} {
    font-size: 20px;
  }
`

const UpperWrapper = styled.div`
  &:hover {
    opacity: 1;
  }
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ddd;
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 0.8;
  transition: 0.4s;
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
  padding: 20px 0;
  width: ${({ theme }) => theme.width};
`

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`

export async function getServerSideProps() {
  const res = await fetch(`https://www.dse00.com/tutor`)
  const recommendations = await res.json()

  return { props: { recommendations } }
}

export default Home
