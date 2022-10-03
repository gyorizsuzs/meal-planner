import React from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const CardContainer = ({
  mealImageUrl,
  searchedMeal,
  mealKcal,
  mealCarbs,
  mealProtein,
  mealFat,
  mealSum,
  addMeal,
}) => {
  /*  console.log(days[0].meals) */

  console.log(searchedMeal)

  return (
    <div className='card-body'>
      <section className='card-container'>
        <div className='card-left'>
          <div className='image-container'>
            <img src={mealImageUrl} alt={searchedMeal} />
          </div>
          <div className='info'>
            <h2>
              <u>Macros:</u>
            </h2>
            <h4>Calorie: {mealKcal} kcal</h4>
            <h4>Fat: {mealFat} g</h4>
            <h4>Carbohydrates: {mealCarbs} g</h4>
            <h4>Protein: {mealProtein} g</h4>
          </div>
        </div>
        <div className='card-right'>
          <h2 className='name'>{searchedMeal}</h2>
          <div className='sum' dangerouslySetInnerHTML={{ __html: mealSum }} />
          <div className='button-wrapper'>
            <Fab
              size='large'
              sx={{ backgroundColor: 'var(--clr-yellow)' }}
              aria-label='add'
              onClick={() =>
                addMeal({
                  name: searchedMeal,
                  dateTime: new Date().toISOString(),
                  kcal: mealKcal,
                  fat: mealFat,
                  protein: mealProtein,
                  carbs: mealCarbs,
                })
              }
              /* onClick={setDays} */
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CardContainer
