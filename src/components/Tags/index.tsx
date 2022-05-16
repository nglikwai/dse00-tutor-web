import React from 'react'
import styled from 'styled-components'

type Props = {
  tags: string[]
  location: string[]
}

const Tags = (props: Props) => {
  const { tags, location } = props

  if (!tags) return null

  return (
    <TagWrapper>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <Tag>{location}</Tag>
    </TagWrapper>
  )
}

const Tag = styled.button`
  margin: 5px 2px;
  font-size: 13px;
  border: none;
  background-color: #cc0000;
  color: white;
  border-radius: 5px;
`

const TagWrapper = styled.div`
  width: 150px;
`

export default Tags
