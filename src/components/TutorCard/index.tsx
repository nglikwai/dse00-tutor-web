import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHearted } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tag from 'src/components/Tags'
import { toggleLoginPageOpen } from 'src/redux/page'
import { StatusState } from 'src/redux/page/types'
import { Tutor } from 'src/types'
import styled from 'styled-components'

type Props = {
  tutor: Tutor
}

const TutorCard = (props: Props) => {
  const { isLogin } = useSelector((state: StatusState) => state.user)
  const [favor, setFavor] = useState(false)
  const dispatch = useDispatch()
  const { tutor } = props
  return (
    <Wrapper>
      <PopularTag
        onClick={
          isLogin
            ? () => setFavor(!favor)
            : () => dispatch(toggleLoginPageOpen())
        }
      >
        <FontAwesomeIcon
          icon={favor === true ? faHearted : faHeart}
          color='#eebbbb'
          size='lg'
        />
      </PopularTag>
      <Link href='/tutor/1'>
        <Avatar
          src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'
          alt='Avatar of the tutor'
        />
      </Link>

      <Name>{tutor.name}</Name>

      <Description>{tutor.intro}</Description>
      <Name>{tutor.teachingSubjects}</Name>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &:hover {
    box-shadow: 0 0 12px #eee;
  }
  border-radius: 12px;
  box-sizing: border-box;
  padding: 0 22px;
  width: 220px;
  margin: 0 0 4px 8px;
  cursor: pointer;
  transition: 0.5s;
`
const PopularTag = styled.span`
  &:hover {
    text-shadow: 0 0 12px #cc0000;
  }
  transition: 0.4s;
  width: 105%;
  display: flex;
  flex-direction: row-reverse;
`
const Avatar = styled.img`
  width: 100%;
`

const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`

const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  color: #aaa;
`

export default TutorCard
