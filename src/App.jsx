import './App.css'
import WeatherApp from './WeatherApp'
function App() {
  return (
    <>
      <WeatherApp />
    </>
  )
}

export default App

/**
 * ----Use of Material UI----
 *   ------Doc Used--------
 * | Components-Button     |
 * | Feedback-Alert        | 
 *   ---------------------
 import Button from '@mui/material/Button';
 import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
      function App() {
  return (
    <>
      <Button variant="contained">Click Me!</Button>

      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
      <Alert severity="error">Delete Option is Given</Alert>
    </>
  )
 */
