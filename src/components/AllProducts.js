import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import { callHttpRequest, methodType } from '../utility-files/api-caller/HttpRequest';
import { getRequestForApi } from '../utility-files/api-caller/CommonRequest';
import RecommendSection from './common/recommend-section';
import Footer from '../Footer/fotter';
import { useParams } from 'react-router-dom';
import Spiner from "../components/Spiner";

const AllProducts = () => {
    const currentUrl = window.location.pathname;
    const userId = localStorage.getItem("uuid")
    const [loading, setLoading] = useState(true);
    const param = useParams();
    const Id = param.id;
    const [pending, setPending] = useState(false)
    const [list, setList] = useState()
    const [bestList, setBestList] = useState()
    const [viewList, setViewList] = useState()
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [frequentlyProduct, setFrequentlyProduct] = useState([]);
    const dispatch = useDispatch();



    const getRecomendProductList = async () => {
        setPending(true);
        let request, variables;
        request = getRequestForApi(
            ' http://54.224.108.112:5000/get-recommendations?user_id=' + userId,
            variables,
            methodType.GET
        );
        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    setList(response?.data);
                    setPending(false);
                    setLoading(false);
                }
            })
            .catch((err) => {
                setPending(false);
                setLoading(false);
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
    const getRelatedList = async () => {
        setPending(true);
        try {
            const request = getRequestForApi(
                `https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=related_products&itemId=${Id}`,
                null,
                methodType.GET
            );

            const response = await callHttpRequest(request);
            console.log("API Response:", response);

            if (response?.status === 200 || response?.status === 201) {
                setRelatedProducts(response?.data || []);
            }
        } catch (err) {
            console.error("Error fetching product list:", err);
        } finally {
            setPending(false);
        }
    };

    const getFrequentlyList = async () => {
        setPending(true);
        try {
            const request = getRequestForApi(
                `https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=freq_bought&itemId=${Id}`,
                null,
                methodType.GET
            );

            const response = await callHttpRequest(request);
            console.log("API Response:", response);

            if (response?.status === 200 || response?.status === 201) {
                setFrequentlyProduct(response?.data || []);
            }
        } catch (err) {
            console.error("Error fetching product list:", err);
        } finally {
            setPending(false);
        }
    };


    useEffect(() => {
        getRecomendProductList();

    }, []);

    return (
        <>
            <Container sx={{ mt: 1, p: 4 }}>
            {loading ? <Spiner /> : null}
                {list?.recommendations ? (
                    <>
                        <div class="root">
                            <div class='pagecontent list-page'>
                                <section>
                                    <div class="std-tp"></div>
                                    <div class="max-box">

                                        <div class="list-h2">
                                            <h2>All Recommendations Just For You !</h2>
                                            <p> </p>
                                        </div>
                                        <div class="grid-list">
                                            {list?.recommendations.map((elm) => {
                                                return (<>
                                                    <div class="item-style-1">
                                                        <div class="item-image">
                                                            <a href={`/product/${elm?.productName}`}><img src="assets/img/item3.svg" alt="" />
                                                            <img src={`https://cdn.meatigo.com/${elm?.image_url}`} />
                                                            </a>
                                                        </div>
                                                        <p class="item-name"><a href={`/product/${elm?.productName}`}>{elm?.productName}</a></p>
                                                        <div class="item-data">
                                                            <div class="item-price-info">
                                                                <div class="item-sale-price"><em>₹</em>240</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>)
                                            })}
                                        </div>
                                    </div>
                                </section>
                            </div >
                        </div >
                    </>
                ) : null}
                {/* {list?.recommendations && currentUrl == '/allproducts/allRecommendation/' && <RecommendSection title="All Recommendations Just For You !" urlToRedirect="/allproducts/allRecommendation/" listData={list?.recommendations} />} */}
                {/* {bestList?.recommendations && currentUrl == '/allproducts/bestSeller/' && <RecommendSection title="All Best Sellers" urlToRedirect="/allproducts/bestSeller/" listData={bestList?.recommendations} />} */}
                {/* {viewList?.recommendations && currentUrl == '/allproducts/mostViewed/' && <RecommendSection title="All Mostly Viewed Products" urlToRedirect="/allproducts/mostViewed/" listData={viewList?.recommendations} />} */}
                {/* {relatedProducts?.recommendations && currentUrl == '/allproducts/related_product/' && <RecommendSection title="Related products" urlToRedirect="/allproducts/related_product/" listData={relatedProducts?.recommendations} />} */}
                {/* {frequentlyProduct?.recommendations && currentUrl == '/allproducts/Frequently/'&& <RecommendSection title="Frequently bought together" urlToRedirect="/allproducts/Frequently/" listData={frequentlyProduct?.recommendations} />} */}
            </Container >
            <Footer />
        </>
    );
};

export default AllProducts;
