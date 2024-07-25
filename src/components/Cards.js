import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import { sneakers, basketballShoes, casualShoes } from '../components/CardsData';
import { Link } from 'react-router-dom';
import { callHttpRequest, methodType } from '../utility-files/api-caller/HttpRequest';
import { getRequestForApi } from '../utility-files/api-caller/CommonRequest';

const Cards = () => {
  const [data, setData] = useState(sneakers);
  const[pending,setPending]=useState(false)
  const[list,setList]=useState()
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const getProductList = async () => {
    setPending(true);
    let request, variables;
    request = getRequestForApi(
      'https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135',
      variables,
      methodType.GET
    );
    await callHttpRequest(request)
      .then((response) => {
        if (response?.status === 200 || response?.status === 201) {
          setList(response?.data);
          setPending(false);
        }
      })
      .catch((err) => {
        setPending(false);
      });
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <Container sx={{ mt: 1, p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Customer Recommendation
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{fontSize:50,fontWeight:40, color:'#fdb001'}} gutterBottom>
            Recommend Just For You!
          </Typography>
          <Slider {...settings}>
            {data.map((element, id) => (
              <Box key={id} sx={{ p: 3, }}>
                <Link to={`/product/${element.id}`} style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: 3,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={element.image}
                      alt={element.name}
                      sx={{ height: "400px", objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography variant="h6">{element.name}</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" component="div">
                          ₹{element.price}
                        </Typography>
                        {/* <Box sx={{ display: 'flex' }}>
                          {element.colors.map((color, index) => (
                            <Chip
                              key={index}
                              sx={{ backgroundColor: color, color: '#fff', marginLeft: 1 }}
                            />
                          ))}
                        </Box> */}
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography sx={{fontSize:50,fontWeight:40, color:'#fdb001'}} gutterBottom>
            Frequently Bought Together
          </Typography>
          <Slider {...settings}>
            {basketballShoes.map((element, id) => (
              <Box key={id} sx={{ p: 3 }}>
                <Link to={`/product/${element.id}`} style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: 3,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={element.image}
                      alt={element.name}
                      sx={{ height: "400px", objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography variant="h6">{element.name}</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" component="div">
                          ₹{element.price}
                        </Typography>
                        {/* <Box sx={{ display: 'flex' }}>
                          {element.colors.map((color, index) => (
                            <Chip
                              key={index}
                              sx={{ backgroundColor: color, color: '#fff', marginLeft: 1 }}
                            />
                          ))}
                        </Box> */}
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography  sx={{fontSize:50,fontWeight:40, color:'#fdb001'}} gutterBottom>
          Best Sellers
          </Typography>
          <Slider {...settings}>
            {casualShoes.map((element, id) => (
              <Box key={id} sx={{ p: 3 }}>
                <Link to={`/product/${element.id}`} style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: 3,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={element.image}
                      alt={element.name}
                      sx={{ height: "400px", objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography variant="h6">{element.name}</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" component="div">
                          ₹{element.price}
                        </Typography>
                        {/* <Box sx={{ display: 'flex' }}>
                          {element.colors.map((color, index) => (
                            <Chip
                              key={index}
                              sx={{ backgroundColor: color, color: '#fff', marginLeft: 1 }}
                            />
                          ))}
                        </Box> */}
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>

    </>
  );
};

export default Cards;
