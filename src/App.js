import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import { Routes, Route } from "react-router-dom";
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import ProductDetails from './Product/ProductDetail';
import Footer from './Footer/fotter';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "90% !important",
          paddingLeft: "16px !important",
          paddingRight: "16px !important",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <Header />
     
      <Box sx={{ pt: '64px' }}>
        <ThemeProvider theme={theme}>
          <Container maxWidth={false}>
            <Routes>
              <Route path='/' element={<Cards />} />
              <Route path='/cart/:id' element={<CardsDetails />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </Box>
      <Footer/>
    </>
  );
}

export default App;
