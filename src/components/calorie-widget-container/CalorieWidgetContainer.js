import React from 'react'
import CalorieWidget from './calorie-widget/CalorieWidget'

import Box from '@mui/material/Box'

const CalorieWidgetContainer = ({ days, dailyCaloriePercentages, showDay }) => {
  return (
    <Box
      sx={{
        width: 1200,
        display: 'flex',
        flexDirection: 'row',
        marginInline: 'auto',
        border: 2,
        borderColor: 'rgba(3, 102, 214, 0.3)',
        borderRadius: 0,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      {days.map((day, i) => (
        <CalorieWidget
          key={i}
          weekday={day.weekday}
          percent={dailyCaloriePercentages[i]}
          dayIndex={i}
          showDay={showDay}
        />
      ))}
    </Box>
  )
}

export default CalorieWidgetContainer
