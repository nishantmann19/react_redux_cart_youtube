import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { callHttpRequest, methodType } from '../utility-files/api-caller/HttpRequest';
import { getRequestForApi } from '../utility-files/api-caller/CommonRequest';
import RecommendSection from './common/recommend-section';
import Footer from '../Footer/fotter'
const Cards = () => {
  const [pending, setPending] = useState(false)
  const [list, setList] = useState()
  const [bestList, setBestList] = useState()
  const [viewList, setViewList] = useState()
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  

  const getRecomendProductList = async () => {
    setPending(true);
    let request, variables;
    request = getRequestForApi(
      ' https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=rec_fyp',
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

  const getBestSellerProductList = async () => {
    setPending(true);
    let request, variables;
    request = getRequestForApi(
      ' https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=best_seller',
      variables,
      methodType.GET
    );
    await callHttpRequest(request)
      .then((response) => {
        if (response?.status === 200 || response?.status === 201) {
          setBestList(response?.data);
          setPending(false);
        }
      })
      .catch((err) => {
        setPending(false);
      });
  };

  const getMostveiwdProductList = async () => {
    setPending(true);
    let request, variables;
    request = getRequestForApi(
      ' https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=most_viewed',
      variables,
      methodType.GET
    );
    await callHttpRequest(request)
      .then((response) => {
        if (response?.status === 200 || response?.status === 201) {
          setViewList(response?.data);
          setPending(false);
        }
      })
      .catch((err) => {
        setPending(false);
      });
  };

  
  useEffect(() => {
    getRecomendProductList();
    getBestSellerProductList()
    getMostveiwdProductList()
  }, []);


  return (
    <>
      <Container sx={{ mt: 1, p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Customer Recommendation
        </Typography>
        <RecommendSection/>
        {/* {list?.recommendations && <RecommendSection title="Recommend Just For You!" urlToRedirect="/allproducts/allRecommendation/" listData={list?.recommendations}/>}
        {bestList?.recommendations && <RecommendSection title="Best Sellers" urlToRedirect="/allproducts/bestSeller/" listData={bestList?.recommendations}/>}
        {viewList?.recommendations && <RecommendSection title="Most Viewed" urlToRedirect="/allproducts/mostViewed/" listData={viewList?.recommendations}/>} */}
      </Container>

      <Footer/>


    </>
  );
};

export default Cards;
