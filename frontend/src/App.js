import React, { useState, useEffect } from 'react'
import './App.css'

import Modal from './components/modal/Modal'
import DayContainer from './components/meals/DayContainer'
import Profile from './components/profile/Profile'
import CalorieWidgetContainer from './components/calorie-widget-container/CalorieWidgetContainer'

// const apiKey = '076c50572df745708305e2c8f9f24c63'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [calorieGoal, setCalorieGoal] = useState(0)
  const [activeDayIndex, setActiveDayIndex] = useState(0)
  const [dailyCaloriePercentages, setDailyCaloriePercentages] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ])
  const [days, setDays] = useState([
    {
      weekday: 'Monday',
      date: '2022-09-26',
      calActual: 0,
      calPercent: 0,
      meals: []
    },
    {
      weekday: 'Tuesday',
      date: '2022-09-27',
      calActual: 0,
      calPercent: 0,
      meals: []
    },
    {
      weekday: 'Wednesday',
      date: '2022-09-28',
      calActual: 0,
      calPercent: 0,
      meals: []
    },
    {
      weekday: 'Thursday',
      date: '2022-09-29',
      calActual: 0,
      calPercent: 0,
      meals: []
    },
    {
      weekday: 'Friday',
      date: '2022-09-30',
      calActual: 0,
      calPercent: 0,
      meals: []
    },
    {
      weekday: 'Saturday',
      date: '2022-10-01',
      calActual: 0,
      calPercent: 0,
      meals: []
    },
    {
      weekday: 'Sunday',
      date: '2022-10-02',
      calActual: 0,
      calPercent: 0,
      meals: []
    }
  ])

  useEffect(() => {
    calculateCaloriePercentage()
  }, [days, calorieGoal])

  const handleChange = e => {
    if (e.target.value.length === 0) {
      setCalorieGoal(0)
    } else {
      setCalorieGoal(parseInt(e.target.value))
    }
  }

  function closeModal() {
    setShowModal(!showModal)
  }

  //useReducer https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/
  //Redux
  const addMeal = newMeal => {
    const modifiedDay = { ...days[activeDayIndex] }
    modifiedDay.meals.push(newMeal)
    const modifiedDayList = [...days]
    modifiedDayList[activeDayIndex] = modifiedDay
    setDays(modifiedDayList)
  }

  const calculateCaloriePercentage = () => {
    if (calorieGoal <= 999) {
      return
    }

    const modifiedCalorieArray = [...dailyCaloriePercentages]
    days.forEach((day, i) => {
      const calSum = day.meals.reduce((a, b) => a + b.kcal, 0)
      modifiedCalorieArray[i] = Math.round((calSum / calorieGoal) * 100)
    })

    setDailyCaloriePercentages(modifiedCalorieArray)
  }

  const showDay = index => {
    setActiveDayIndex(index)
  }

  return (
    <div className='App'>
      <Profile handleChange={handleChange} />
      <CalorieWidgetContainer
        days={days}
        dailyCaloriePercentages={dailyCaloriePercentages}
        showDay={showDay}
      />
      <DayContainer day={days[activeDayIndex]} />
      {/* <button
        onClick={() =>
          addMeal({
            id: 12,
            dateTime: '2022-09-29T09:00:00',
            name: 'Pizza',
            kcal: 400,
            fat: 50,
            protein: 50,
            carbs: 50
          })
        }
      ></button> */}
      <button className='add-meal' onClick={() => setShowModal(!showModal)}>
        Add meal
      </button>
      {showModal && <Modal addMeal={addMeal} closeModal={closeModal} />}

      {/* <div>{setDays}</div> */}
    </div>
  )
}

export default App
