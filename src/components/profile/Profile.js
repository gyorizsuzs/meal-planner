import React from 'react'

import { Box, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const CalorieTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--clr-darkblue)',
    borderRadius: 0,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--clr-darkblue)',
    borderRadius: 0,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--clr-darkblue)',
      borderRadius: 0,
    },
    '&:hover fieldset': {
      borderColor: 'var(--clr-yellow)',
      borderRadius: 0,
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--clr-yellow)',
      borderRadius: 0,
    },
  },
})

const Profile = ({ handleChange }) => {
  return (
    <Box sx={{ margin: '20', fontFamily: ['Poppins', 'sans-serif'] }}>
      <CalorieTextField
        id='outlined-basic'
        label='My Calorie Goal'
        variant='outlined'
        onChange={handleChange}
        size='small'
      />
    </Box>
  )
}

export default Profile
