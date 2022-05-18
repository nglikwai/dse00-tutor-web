// import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.css'

import {
  faBars,
  faMagnifyingGlass,
  faMars,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'src/components/Select'
import TutorList from 'src/components/TutorList'
// import PATHNAME from 'src/constants/pathname'
import { searchTutorRequest } from 'src/redux/search'
import {
  isFetchingSelector,
  searchResultSelector,
} from 'src/redux/search/selectors'
import styled from 'styled-components'

// TODO: fetch from API
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

const SearchBar = () => {
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
      <SearchWrapper>
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

        <label>學費</label>

        <Range type='range' className='range' min={50} max={300} />
        <span className='price'>($180)</span>
        <div>
          <Button onClick={handleOnSearch}>
            <FontAwesomeIcon icon={faMars} color='white' size='lg' />
            <span style={{ padding: '0 0 0 10px' }}>女性</span>
          </Button>
        </div>

        <FilterButton>
          <FontAwesomeIcon icon={faBars} color='grey' size='lg' />
        </FilterButton>

        <Button onClick={handleOnSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} color='white' size='lg' />
        </Button>
      </SearchWrapper>

      {/* {isFetching && (
        <SearchResult>
          <img src='Spinner.svg' />
        </SearchResult>
      )} */}

      {/* {!!tutors.length && (
        <SearchResult>
          <h3>{t('components.search.basicSearch.result')}</h3>
          <TutorList tutors={tutors.slice(0, 6)} />
        </SearchResult>
      )} */}
    </Wrapper>
  )
}
const SearchWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Wrapper = styled.div``

const Title = styled.h2`
  font-size: 24px;
`

const Row = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 24px;
  }
`
const Button = styled.button`
  background-color: #c00;
  border: none;
  border-radius: 24px;
  color: #fff;
  font-size: 16px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const SearchResult = styled.div`
  margin-top: 24px;
`

const FilterButton = styled.button`
  &:hover {
    border: 1px #cc0000 solid;
    color: #cc0000;
  }
  padding: 4px 8px;
  background-color: transparent;
  color: #ccc;
  border: 1px #aaa solid;
  font-size: 14px;
  border-radius: 5px;
  transition: 0.7s;
`

const Range = styled.input`
  height: 10px;
  width: 100px;
  -webkit-appearance: none;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
`

export default SearchBar
