import 'react-datepicker/dist/react-datepicker.css'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div>
      <DatePicker
        className='w-100'
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        inline
      />
    </div>
  )
}

export default Calendar
