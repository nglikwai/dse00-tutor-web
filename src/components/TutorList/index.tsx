import React from 'react'
import TutorCard from 'src/components/TutorCard'
import { Tutor } from 'src/types'
import styled from 'styled-components'

type Props = {
  tutors: Tutor[]
}

const TutorList = (props: Props) => {
  const { tutors } = props

  return (
    <Wrapper>
      {tutors.map((tutor) => (
        <TutorCard key={tutor._id} tutor={tutor} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  > * {
    flex: 0 0 auto;
  }

  > *:not(:last-child) {
    margin-right: 12px;
  }
`

export default TutorList
