import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import PageWrapper from 'src/components/global/PageWrapper'
import ResultCard from 'src/components/ResultCard'
import SearchBar from 'src/components/SearchBar'
import TutorList from 'src/components/TutorList'
import { searchTutorRequest } from 'src/redux/search'
import {
  isFetchingSelector,
  searchResultSelector,
} from 'src/redux/search/selectors'
import { Tutor } from 'src/types'
import styled from 'styled-components'

const places = [
  '中西區',
  '東區',
  '南區',
  '灣仔',
  '九龍城',
  '觀塘',
  '深水埗',
  '黃大仙',
  '油尖旺',
  '離島',
  '葵青',
  '北區',
  '西貢',
  '沙田',
  '大埔',
  '荃灣',
  '屯門',
  '元朗',
]

// TODO: fetch from API
const subjects = [
  '中文',
  'eng',
  'math',
  'ls',
  'phy',
  'chem',
  'bio',
  'econ',
  'bafs',
  'geo',
  'history',
  '中國歷史',
]

type Props = {
  results: Tutor[]
}

const Search: NextPage = (props: Props) => {
  const router = useRouter()
  const { query } = router
  const { results } = props
  const { t } = useTranslation()

  // const router = useRouter()

  const dispatch = useDispatch()

  const tutors = useSelector(searchResultSelector)

  const isFetching = useSelector(isFetchingSelector)

  const [selectedPlace, setSelectedPlace] = useState(places[0])
  const [selectedSubject, setSelectedSubject] = useState(subjects[0])

  useEffect(() => {
    dispatch(
      searchTutorRequest({ place: selectedPlace, subject: selectedSubject }),
    )
  }, [])

  const handleOnSearch = useCallback(() => {
    // router.push({
    //   pathname: PATHNAME.SEARCH_RESULT,
    //   query: { place: selectedPlace, subject: selectedSubject },
    // })

    dispatch(
      searchTutorRequest({ place: selectedPlace, subject: selectedSubject }),
    )
  }, [dispatch, selectedPlace, selectedSubject])

  const handleOnPlaceSelect = useCallback((selected: string) => {
    setSelectedPlace(selected)
  }, [])

  const handleOnSubjectSelect = useCallback((selected: string) => {
    setSelectedSubject(selected)
  }, [])

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <Float>
            <SearchBar />
          </Float>

          <Section>
            <SectionTitle>
              {t('components.search.basicSearch.place')} : {query.place ?? ''}{' '}
              {t('components.search.basicSearch.subject')}:{query.subject ?? ''}
            </SectionTitle>
            <TutorList tutors={tutors} />
            <TutorList tutors={tutors} />
            <TutorList tutors={tutors} />
            <TutorList tutors={tutors} />
            <TutorList tutors={tutors} />
            <TutorList tutors={tutors} />
          </Section>
          {isFetching && (
            <Spinner>
              <img src='Spinner.svg' />
            </Spinner>
          )}
          {/* {tutors &&
            tutors.map((tutor) => (
              <ResultCard key={tutor.name} tutor={tutor} />
            ))} */}
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}
const Float = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  margin: 0 0 10px 0;
`
const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;
`

const Section = styled.div`
  padding: 20px 0;
  width: ${({ theme }) => theme.width};
`

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`

const Spinner = styled.div`
  display: flex;
  justify-content: center;
`

export default Search
