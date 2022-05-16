import {
  faBook,
  faHeart,
  faLocation,
  faMarsDouble,
  faPlus,
  faSackDollar,
  faSchool,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { CaseUnit } from 'src/types'
import styled from 'styled-components'

type Props = {
  caseUnit: CaseUnit
}

const ResultCard = (props: Props) => {
  const { caseUnit } = props
  return (
    <Link href={`/case/${caseUnit._id}`}>
      <CaseWrapper>
        <Avator />
        <Item>
          <FontAwesomeIcon icon={faBook} color='#cc0000' /> {caseUnit.subject}
        </Item>
        <Item>F.5 </Item>
        <Item>
          <FontAwesomeIcon icon={faMarsDouble} color='#cc0000' />{' '}
          {caseUnit.gender}
        </Item>
        <Item>
          <FontAwesomeIcon icon={faLocation} color='#cc0000' />{' '}
          {caseUnit.region}
        </Item>
        <Item>
          <FontAwesomeIcon icon={faSchool} color='#cc0000' /> 田家炳{' '}
        </Item>
        <Item>
          <FontAwesomeIcon icon={faSackDollar} color='#cc0000' />{' '}
          <b> ${caseUnit.price}</b>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faPlus} color='#cc0000' />
        </Item>
        <Item>
          <FontAwesomeIcon icon={faHeart} color='#cc0000' />
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
  background-image: url('https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png');
  display: inline-block;
`

const Item = styled.div`
  margin: 0 80px 0 0;
`
const CaseWrapper = styled.div`
  background-color: #fff9e9;
  box-shadow: 1px 1px 1px rgb(255 239 199);
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 10px 0;
  margin: 20px 0;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`

export default ResultCard
