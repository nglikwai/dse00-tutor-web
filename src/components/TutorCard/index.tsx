import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { Tutor } from 'src/types'
import styled from 'styled-components'

type Props = {
  tutor: Tutor
}

const TutorCard = (props: Props) => {
  const { tutor } = props
  return (
    <Link href='/tutor/1'>
      <Wrapper>
        <PopularTag>
          <FontAwesomeIcon icon={faHeart} color='#eebbbb' size='lg' />
        </PopularTag>
        <Avatar
          src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'
          alt='Avatar of the tutor'
        />

        <Name>{tutor.name}</Name>
        <Description>{tutor.intro}</Description>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 12px 22px;
  width: 220px;
  margin: 0 8px;
`
const PopularTag = styled.div`
  transition: 0.4s;
  width: 180px;
  display: flex;
  flex-direction: row-reverse;
`
const Avatar = styled.img`
  width: 100%;
`

const Name = styled.div`
  color: rgb(170, 0, 0);
  text-shadow: rgb(253 181 181) 1px 1px 5px;
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: ${({ theme }) => theme.fontColor};
`

export default TutorCard
