import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Typography, } from "@mui/material";
import { callHttpRequest, methodType, } from "../utility-files/api-caller/HttpRequest";
import { getRequestForApi } from "../utility-files/api-caller/CommonRequest";
import RecommendSection from "./common/recommend-section";
import Spiner from "../components/Spiner";

const Cards = () => {
  const [pending, setPending] = useState(false);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState();
  const [bestList, setBestList] = useState();
  const [viewList, setViewList] = useState();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("uuid");

  const send = (e) => {
    dispatch(ADD(e));
  };

  const getRecomendProductList = async () => {
    setPending(true);
    let request, variables;
    request = getRequestForApi(
      "get-recommendations?user_id=" + userId,
      variables,
      methodType.GET
    );
    await callHttpRequest(request)
      .then((response) => {
        if (response?.status === 200 || response?.status === 201) {
          let apiRes = response?.data?.recommendations.map(item => ({ ...item, quantity: 0, isAdded: false }));
          let updatedApiRes = { ...response.data, recommendations: apiRes };
          setList(updatedApiRes);
          setPending(false);
          setLoading(false);
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
      " https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=best_seller",
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
      " https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=most_viewed",
      variables,
      methodType.GET
    );
    await callHttpRequest(request)
      .then((response) => {
        if (response?.status === 200 || response?.status === 201) {
          setViewList(response?.data);
          setPending(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        setPending(false);
      });
  };

  useEffect(() => {
    getRecomendProductList();
    // getBestSellerProductList()
    // getMostveiwdProductList()
  }, []);

  const setListDataHandler = (prodData, action, activity) => {
    if (activity == "fromCart") {
      let updatedList = list?.recommendations?.map((item) => {
        let filtredProd = prodData?.products?.filter(i => i.product_name == item?.product_name)[0];
        console.log("updatedList ", filtredProd);
        return item?.product_name == filtredProd?.product_name ? { ...item, quantity: filtredProd?.quantity, isAdded: true } : item;
      });

      let updatedApiRes = { ...list?.recommendations, recommendations: updatedList };
      setList(updatedApiRes);
    } else {
      let updatedList = list?.recommendations?.map(item =>
        item?.product_name == prodData?.product_name
          ? {
            ...item,
            quantity: action == "ADD" ? Number(prodData?.quantity + 1) : Number(prodData?.quantity - 1),
            isAdded: true
          }
          : item
      );
      let updatedApiRes = { ...list?.recommendations, recommendations: updatedList };
      setList(updatedApiRes);
    }
  }

  return (
    <>
      <Container sx={{ mt: 1, p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#6175ce", fontWeight: '600' }}>
          Customer Recommendation
        </Typography>
        {loading ? <Spiner /> : null}
        {list?.recommendations && (<RecommendSection title="Recommend Just For You!" urlToRedirect="/allproducts/allRecommendation/" listData={list?.recommendations} setListDataHandler={setListDataHandler} />)}
        {/* {bestList?.recommendations && <RecommendSection title="Best Sellers" urlToRedirect="/allproducts/bestSeller/" listData={bestList?.recommendations}/>} */}
        {/* {viewList?.recommendations && <RecommendSection title="Most Viewed" urlToRedirect="/allproducts/mostViewed/" listData={viewList?.recommendations}/>} */}
      </Container>
    </>
  );
};

export default Cards;
