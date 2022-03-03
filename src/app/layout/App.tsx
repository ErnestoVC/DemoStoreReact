import { CssBaseline, Container, createTheme, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../feacture/about/AboutPage';
import Catalog from '../../feacture/catalog/Catalog'
import ProductDetails from '../../feacture/catalog/ProductDetails';
import ContactPage from '../../feacture/contact/ContactPage';
import HomePage from '../../feacture/home/HomePage';
import Header from './Header'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<ProductDetails />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
