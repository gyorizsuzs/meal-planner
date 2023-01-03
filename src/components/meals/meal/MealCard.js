import React from 'react'

import NutritionTable from './nutritiontable/NutritionTable'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

import { Card, CardContent, Typography } from '@mui/material'

const MealCard = ({ meal }) => {
  const { name, kcal, fat, protein, carbs } = meal
  let { dateTime } = meal
  dateTime = dateTime.substring(dateTime.indexOf('T') + 1, dateTime.length - 3)

  return (
    <Card
      variant='outlined'
      sx={{
        width: 200,
        height: 280,
        backgroundColor: 'var(--clr-bencekek)',
        borderRadius: 0,
      }}
    >
      <CardContent>
        <Typography
          style={{
            color: 'var(--clr-light)',
            fontFamily: ['Poppins', 'sans-serif'].join(','),
            fontWeight: 300,
          }}
        >
          {dateTime}
          <IconButton aria-label='delete' size='small'>
            <DeleteIcon
              fontSize='small'
              style={{
                color: 'var(--clr-light)',
              }}
            />
          </IconButton>
        </Typography>
        <Typography
          style={{
            color: 'var(--clr-light)',
            fontFamily: ['Poppins', 'sans-serif'].join(','),
            fontWeight: 300,
            lineHeight: '2.5ex',
            height: '5ex',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
          variant='h6'
        >
          {name}
        </Typography>
        <NutritionTable kcal={kcal} fat={fat} carbs={carbs} protein={protein} />
      </CardContent>
    </Card>
  )
}

export default MealCard
