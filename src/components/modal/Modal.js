import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import { Fab } from '@mui/material'
import ClearOutlined from '@mui/icons-material/ClearOutlined'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import './Modal.css'

const Modal = ({ addMeal, closeModal }) => {
  const [searchInput, setSearchInput] = useState('')
  const [mealSearchResultList, setMealSearchResultList] = useState([])
  const [searchedMeal, setSearchedMeal] = useState('')

  const [searchedMealId, setSearchedMealId] = useState(null)
  const [mealKcal, setMealKcal] = useState(null)
  const [mealProtein, setMealProtein] = useState(null)
  const [mealCarbs, setMealCarbs] = useState(null)
  const [mealFat, setMealFat] = useState(null)
  const [mealImageUrl, setMealImageUrl] = useState('')
  const [mealSum, setMealSum] = useState()

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/autocomplete?apiKey=c506ddce8c46432584b37dcb0ec2c7de&number=5&query=${searchInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealSearchResultList(
          data.map((meal) => {
            return { label: meal.title, id: meal.id }
          })
        )
      })
  }, [searchInput])

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${searchedMealId}/information?includeNutrition=true&apiKey=c506ddce8c46432584b37dcb0ec2c7de
      `
    )
      .then((response) => response.json())
      .then((mealsData) => {
        setMealImageUrl(mealsData.image)
        setMealKcal(mealsData.nutrition.nutrients[0].amount)
        setMealFat(mealsData.nutrition.nutrients[1].amount)
        setMealCarbs(mealsData.nutrition.nutrients[3].amount)
        setMealProtein(mealsData.nutrition.nutrients[8].amount)
        setMealSum(mealsData.summary)
      })
  }, [searchedMealId])

  /* console.log(days) */

  return (
    <div className='modal-body'>
      <section>
        {/* {showAddMeal ? Modal : App} */}
        <section className='modal-container'>
          <div className='search'>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              sx={{ width: 300, color: 'var(--clr-light)' }}
              onInputChange={(e) => setSearchInput(e.target.value)}
              options={mealSearchResultList}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Search for a meal'
                  style={{ color: 'var(--clr-light)' }}
                />
              )}
              onChange={(event, meal) => {
                setSearchedMeal(meal.label)
                setSearchedMealId(meal.id)
              }}
            />
            <Fab
              size='small'
              style={{ backgroundColor: 'var(--clr-yellow)' }}
              aria-label='add'
              onClick={() => closeModal()}
            >
              <ClearOutlined />
            </Fab>
          </div>

          {searchedMeal.length > 1 && (
            <CardContainer
              searchedMeal={searchedMeal}
              mealKcal={mealKcal}
              mealProtein={mealProtein}
              mealCarbs={mealCarbs}
              mealFat={mealFat}
              mealImageUrl={mealImageUrl}
              mealSum={mealSum}
              addMeal={addMeal}
            />
          )}
        </section>
      </section>
    </div>
  )
}
export default Modal
