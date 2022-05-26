import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faBook,
  faHeart as faHearted,
  faLocation,
  faMarsDouble,
  faPlus,
  faSackDollar,
  faSchool,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import { CaseUnit } from 'src/types'
import styled from 'styled-components'

type Props = {
  caseUnit: CaseUnit
}

const ResultCard = (props: Props) => {
  const [favour, setFavour] = useState(false)

  const { caseUnit } = props
  return (
    <Link href={`/case/${caseUnit._id}`}>
      <CaseWrapper>
        <Item>
          <Avator />
        </Item>
        <Item>
          <FontAwesomeIcon icon={faBook} color='#d4d4d4' /> {caseUnit.subject}
        </Item>
        <Item>中五 </Item>
        <Item>
          <FontAwesomeIcon icon={faMarsDouble} color='#d4d4d4' />{' '}
          {caseUnit.gender}
        </Item>
        <Item>
          <FontAwesomeIcon icon={faLocation} color='#d4d4d4' />{' '}
          {caseUnit.region}
        </Item>
        <Item>
          <FontAwesomeIcon icon={faSchool} color='#d4d4d4' /> 田家炳{' '}
        </Item>
        <Item>
          <FontAwesomeIcon icon={faSackDollar} color='#d4d4d4' />{' '}
          <b> ${caseUnit.price}</b>
        </Item>

        <Item>
          <FontAwesomeIcon
            onClick={() => setFavour(true)}
            icon={favour ? faHearted : faHeart}
            color='#ffaeae'
          />
        </Item>
      </CaseWrapper>
    </Link>
  )
}

const Avator = styled.div`
  border-radius: 50%;
  margin: 0 20px;
  width: 70px;
  height: 70px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/user.png');
  display: inline-block;
`

const Item = styled.div`
  font-size: 20px;
  width: 160px;
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  align-items: center;
`
const CaseWrapper = styled.div`
  &:hover {
    box-shadow: 0 10px 10px #eee;
  }
  background-color: #fffbf1;
  box-shadow: 1px 2px 4px #ffecb2;
  display: flex;
  align-items: center;
  border-radius: 3rem;
  padding: 10px 0;
  margin: 28px 0;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: 0.4s;
`

export default ResultCard
