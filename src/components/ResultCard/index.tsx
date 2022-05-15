import Link from 'next/link'
import React from 'react'
import Tags from 'src/components/Tags'
import { tutorSlice } from 'src/redux/search'
import { Tutor } from 'src/types'
import styled from 'styled-components'

type Props = {
  tutor: Tutor
}

const ResultCard = (props: Props) => {
  const { tutor } = props
  return (
    <Link href={`/tutor/1`}>
      <ItemWrapper>
        <TutorIntro>
          <Avator />
          <IntroWrapper>
            <Name>{tutor.name}</Name>
            <div>{tutor.intro}</div>
          </IntroWrapper>
        </TutorIntro>

        <DetailsWrapper>
          <Tags tags={tutor.teachingSubjects} location={tutor.location} />

          <FeeWrapper>
            {tutor.teachingSubjectsPrice.map((price, i) => (
              <List className='list' key={price}>
                F. {i + 4} : {price}
              </List>
            ))}
          </FeeWrapper>
        </DetailsWrapper>
      </ItemWrapper>
    </Link>
  )
}

const Avator = styled.div`
  border-radius: 50%;
  margin: 0 20px;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png');
  display: inline-block;
`

const Name = styled.h3`
  color: #aa0000;
  text-shadow: 1px 1px 5px rgb(253, 181, 181);
`

const TutorIntro = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const IntroWrapper = styled.div`
  margin-left: 30px;
`
const ItemWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 670px;
  padding: 30px 40px 10px 40px;
  margin: 20px;
  transition: 0.5s;
`

const DetailsWrapper = styled.div`
  display: flex;
`

const FeeWrapper = styled.div`
  margin: 10px;
`

const List = styled.li`
  &:hover {
    background-color: rgb(255, 224, 224);
  }
  margin-bottom: 10px;
  padding: 5px 16px;
  list-style-type: none;
  background-color: rgb(255, 241, 241);
  border-radius: 5px;
  transition: 1s;
  font-size: 14px;
  cursor: pointer;
`

export default ResultCard
