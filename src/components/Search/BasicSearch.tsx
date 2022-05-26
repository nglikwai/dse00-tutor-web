import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'src/components/Select'
import { places, subjects } from 'src/constants/commonList'
import { searchTutorRequest } from 'src/redux/search'
import {
  isFetchingSelector,
  searchResultSelector,
} from 'src/redux/search/selectors'
import styled from 'styled-components'

const BasicSearch = () => {
  const { t } = useTranslation()

  // const router = useRouter()

  const dispatch = useDispatch()

  const tutors = useSelector(searchResultSelector)

  const isFetching = useSelector(isFetchingSelector)

  const [selectedPlace, setSelectedPlace] = useState(places[0])

  const [selectedSubject, setSelectedSubject] = useState(subjects[0])

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
    <Wrapper>
      <Row>
        <Select
          label={t('components.search.basicSearch.place')}
          options={places}
          value={selectedPlace}
          onSelect={handleOnPlaceSelect}
        />

        <Select
          label={t('components.search.basicSearch.subject')}
          options={subjects}
          value={selectedSubject}
          onSelect={handleOnSubjectSelect}
        />

        <Link href='/findtutor'>
          <SearchButtonWrapper>
            <FontAwesomeIcon icon={faMagnifyingGlass} color='white' size='lg' />
          </SearchButtonWrapper>
        </Link>
      </Row>

      {isFetching && (
        <SearchResult>
          {t('components.search.basicSearch.searching')}
        </SearchResult>
      )}

      {/* {!!tutors.length && (
        <SearchResult>
          <h3>Search result:</h3>
          <TutorList tutors={tutors.slice(0, 4)} />
        </SearchResult>
      )} */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px 0;
  margin: 0 20px;
`

const Row = styled.div`
  display: flex;
  border: 1px solid #ccc;
  background: white;
  width: 440px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 8px #ddd;
  padding: 4px 0;
  margin: 0 0 0 0;
  > *:not(:last-child) {
    margin-right: 24px;
  }
`

const SearchButtonWrapper = styled.span`
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

const SearchResult = styled.div`
  margin-top: 24px;
`

export default BasicSearch
