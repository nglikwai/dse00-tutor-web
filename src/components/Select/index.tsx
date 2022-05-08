import React, { useCallback } from 'react'
import styled from 'styled-components'

type Props = {
  label: string
  options: string[]
  value: string
  onSelect?: (selected: string) => void
}

const Select = (props: Props) => {
  const { label, options, value, onSelect } = props

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSelect && onSelect(e.target.value)
    },
    [onSelect],
  )

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect value={value} onChange={handleOnChange}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </StyledSelect>
    </div>
  )
}

const StyledLabel = styled.label`
  margin-right: 10px;
`

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #fff;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 10px;
  width: 100px;
  height: 46px;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
`

export default Select
