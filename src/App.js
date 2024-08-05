
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { Routes, Route } from "react-router-dom";
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import ProductDetails from './Product/ProductDetail';
import AllProducts from './components/AllProducts';
// css imports
import '../src/assetes/css/resets.css';
import '../src/assetes/css/responsive.css';
import '../src/assetes/css/select.css';
import '../src/assetes/css/simplebar.css';
import '../src/assetes/css/style.css';
import '../src/assetes/css/swiper.min.css';



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
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/allproducts/allRecommendation/" element={<AllProducts />} />
              <Route path="/allproducts/bestSeller/" element={<AllProducts />} />
              <Route path="/allproducts/mostViewed/" element={<AllProducts />} />
              <Route path="/allproducts/related_product/"element={<AllProducts />} />
              <Route path="/allproducts/Frequently/" element={<AllProducts />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default App;
