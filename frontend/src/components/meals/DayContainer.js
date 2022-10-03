import React from 'react'
import MealCard from './meal/MealCard'

import { Box, Typography } from '@mui/material'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const DayContainer = ({ day }) => {
  const { meals, weekday, date } = day
  return (
    <Box
      sx={{
        width: 1200,
        marginInline: 'auto',
      }}
    >
      <Typography
        variant='h4'
        style={{
          color: 'var(--clr-darkblue)',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: 300,
        }}
      >
        {weekday}
      </Typography>
      <Typography
        variant='h5'
        style={{
          color: 'var(--clr-darkblue)',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: 300,
        }}
      >
        {date}
      </Typography>
      <Box
        sx={{
          backgroundColor: 'var(--clr-darkblue)',
          height: 280,
        }}
      >
        <Splide options={{ perPage: 6, arrows: false }}>
          {meals
            .sort((a, b) => {
              return Date.parse(a.dateTime) - Date.parse(b.dateTime)
            })
            .map((meal) => (
              <SplideSlide>
                <MealCard key={meal.id} meal={meal} />
              </SplideSlide>
            ))}
        </Splide>
      </Box>
    </Box>
  )
}

export default DayContainer
