import React from "react";
import { select } from "redux/actions/tutorActions";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'


type ApplicationState = {
  selected: string
}

const Selection = ({ label, options }: { label: string, options: string[] }) => {

  const [select] = useSelector((state: ApplicationState) => state.selected)

  const dispatch = useDispatch()

  const onSelect = (label: string, value: number | string) => {
    dispatch(select(label, value))
  }

  const renderOption = () => options.map((option: string) => {
    return (
      <option key={option}>{option}</option>
    )
  })



  return (
    <div>  <Label className="label">{label}</Label>
      <Select onChange={(e) => onSelect(label, e.target.value)} defaultValue={`${select[label]}`}>
        {renderOption()}
      </Select>
    </div>


  );
}

const Select = styled.select`
  width:100px;
  height:46px;
  border-radius: 5px;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 14px;
  padding:8px 16px;
`

const Label = styled.label`
  margin-right: 10px;
`



export default Selection;
