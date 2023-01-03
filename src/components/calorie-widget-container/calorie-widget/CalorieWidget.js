import React from 'react'

import { Card, CardContent, Typography, CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

const CalorieWidget = ({ weekday, percent, dayIndex, showDay }) => {
  return (
    <Card
      variant='outlined'
      sx={{
        width: 171.43,
        height: 171.43,
        backgroundColor: 'var(--clr-darkblue)',
        borderRadius: 0,
        cursor: 'pointer'
      }}
      onClick={() => showDay(dayIndex)}
    >
      <CardContent
        sx={{
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h6'
          style={{
            color: 'var(--clr-light)',
            width: '100%',
            textAlign: 'center',
            fontFamily: ['Poppins', 'sans-serif'],
            fontWeight: 300,
            marginBottom: '10px',
          }}
        >
          {weekday}
        </Typography>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant='determinate'
            size={'100px'}
            value={percent > 100 ? 100 : percent}
            thickness={2}
            sx={{
              position: 'relative',
              zIndex: 2,
              color: 'var(--clr-yellow)',
            }}
          />
          <CircularProgress
            variant='determinate'
            size={'100px'}
            value={100}
            thickness={2}
            sx={{
              position: 'absolute',
              zIndex: 1,
              right: 0,
              color: 'var(--clr-light)',
            }}
          />

          <Typography
            variant='caption'
            component='div'
            sx={{
              color: 'var(--clr-light)',
              fontSize: 20,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {`${percent}%`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CalorieWidget
