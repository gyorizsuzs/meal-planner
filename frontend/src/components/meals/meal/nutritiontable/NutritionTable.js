import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.color,
    fontWeight: 300,
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.color,
    fontWeight: 300,
  },
}))

const theme = createTheme({
  color: 'var(--clr-light)',
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 12,
  },
})

const NutritionTable = ({ kcal, fat, carbs, protein }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>1 serving</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>calories</StyledTableCell>
              <StyledTableCell>{kcal} kcal</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>fat</StyledTableCell>
              <StyledTableCell>{fat} g</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>carbs</StyledTableCell>
              <StyledTableCell>{carbs} g</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>protein</StyledTableCell>
              <StyledTableCell>{protein} g</StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}

export default NutritionTable
