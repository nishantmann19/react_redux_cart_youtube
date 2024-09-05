import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import ProductDetails from "./Product/ProductDetail";
import AllProducts from "./components/AllProducts";
// css imports
import "../src/assetes/css/resets.css";
import "../src/assetes/css/responsive.css";
import "../src/assetes/css/select.css";
import "../src/assetes/css/simplebar.css";
import "../src/assetes/css/style.css";
import "../src/assetes/css/swiper.min.css";
import Login from "./components/login";
import PrivateRoute from "./utility-files/PrivateRoute";

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
      <Box sx={{ pt: "64px" }}>
        <ThemeProvider theme={theme}>
          {/*    <Container maxWidth={true}> */}
          {/* <BrowserRouter basename="/"> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Cards />
                </PrivateRoute>
              }
            />
            <Route
              path="/product/:productName"
              element={
                <PrivateRoute>
                  <ProductDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/allproducts/allRecommendation/"
              element={
                <PrivateRoute>
                  <AllProducts />
                </PrivateRoute>
              }
            />
            <Route
              path="/allproducts/bestSeller/"
              element={
                <PrivateRoute>
                  <AllProducts />
                </PrivateRoute>
              }
            />
            <Route
              path="/allproducts/mostViewed/"
              element={
                <PrivateRoute>
                  <AllProducts />
                </PrivateRoute>
              }
            />
            <Route
              path="/allproducts/related_product/"
              element={
                <PrivateRoute>
                  <AllProducts />
                </PrivateRoute>
              }
            />
            <Route
              path="/allproducts/Frequently/"
              element={
                <PrivateRoute>
                  <AllProducts />
                </PrivateRoute>
              }
            />
          </Routes>
          {/* </BrowserRou  ter> */}
          {/* </Container> */}
        </ThemeProvider>
      </Box>
    </>
  );
}

export default App;
