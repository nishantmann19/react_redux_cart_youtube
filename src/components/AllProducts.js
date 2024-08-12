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
import Footer from '../Footer/fotter';
import { useParams } from 'react-router-dom';

const AllProducts = () => {
    const currentUrl = window.location.pathname;
    const param = useParams();
    const Id = param.id;
    const [pending, setPending] = useState(false)
    const [list, setList] = useState()
    const [bestList, setBestList] = useState()
    const [viewList, setViewList] = useState()
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [frequentlyProduct, setFrequentlyProduct] = useState([]);
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

    const getRecomendProductList = async () => {
        setPending(true);
        let request, variables;
        request = getRequestForApi(
            ' http://54.224.108.112:5000/get-recommendations?user_id=b4fe6561-01cb-4e24-a156-799a70daf4ff',
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

    // const showProductList = (data) => {
    //     data.map((elm) => {
    //         return (<>
    //             <div class="item-style-1">
    //                 <div class="item-image">
    //                     <img src="assets/img/bestseller-badge.svg" />
    //                     <a href="#!"><img src="assets/img/item3.svg" alt="" /></a>
    //                 </div>
    //                 <p class="item-name"><a href="#!">Chicken Boneless Thigh</a></p>
    //                 <div class="item-data">
    //                     <div class="item-price-info">
    //                         <div class="item-sale-price"><em>₹</em>240</div>
    //                         <div class="item-real-price"><em>₹</em>340</div>
    //                         <div class="item-discount">20% off</div>
    //                         <div class="item-quantity-info">Box of 12 eggs</div>
    //                     </div>

    //                     <div class="item-action">
    //                         <div class="add-to-cart"><span>Add</span></div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </>)
    //     })
    // }

    useEffect(() => {
        getRecomendProductList();
        getBestSellerProductList()
        getMostveiwdProductList()
        getRelatedList()
        getFrequentlyList()

    }, []);

    return (
        <>
            <Container sx={{ mt: 1, p: 4 }}>
                {list?.recommendations ? (
                    <>
                        <div class="root">
                            <div class='pagecontent list-page'>
                                <section>
                                    <div class="std-tp"></div>
                                    <div class="max-box">
                                        <div class="list-h2">
                                            <h2>Chicken 123</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lorem in ultrices
                                                tempus. </p>
                                        </div>

                                        <div class="grid-list">
                                            {list?.recommendations.map((elm) => {
                                                return (<>
                                                    <div class="item-style-1">
                                                        <div class="item-image">
                                                            <img src={`https://cdn.meatigo.com/${elm?.image_url}`} />
                                                            <a href="#!"><img src="assets/img/item3.svg" alt="" /></a>
                                                        </div>
                                                        <p class="item-name"><a href="#!">{elm?.productName}</a></p>
                                                        <div class="item-data">
                                                            <div class="item-price-info">
                                                                <div class="item-sale-price"><em>₹</em>240</div>
                                                                <div class="item-real-price"><em>₹</em>340</div>
                                                                <div class="item-discount">20% off</div>
                                                                <div class="item-quantity-info">Box of 12 eggs</div>
                                                            </div>

                                                            <div class="item-action">
                                                                <div class="add-to-cart"><span>Add</span></div>
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
                {list?.recommendations && currentUrl == '/allproducts/allRecommendation/' && <RecommendSection title="All Recommendations Just For You !" urlToRedirect="/allproducts/allRecommendation/" listData={list?.recommendations} />}
                {/* {bestList?.recommendations && currentUrl == '/allproducts/bestSeller/' && <RecommendSection title="All Best Sellers" urlToRedirect="/allproducts/bestSeller/" listData={bestList?.recommendations} />} */}
                {/* {viewList?.recommendations && currentUrl == '/allproducts/mostViewed/' && <RecommendSection title="All Mostly Viewed Products" urlToRedirect="/allproducts/mostViewed/" listData={viewList?.recommendations} />} */}
                {/* {relatedProducts?.recommendations && currentUrl == '/allproducts/related_product/' && <RecommendSection title="Related products" urlToRedirect="/allproducts/related_product/" listData={relatedProducts?.recommendations} />} */}
                {/* {frequentlyProduct?.recommendations && currentUrl == '/allproducts/Frequently/'&& <RecommendSection title="Frequently bought together" urlToRedirect="/allproducts/Frequently/" listData={frequentlyProduct?.recommendations} />} */}
                {/* <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: 50, fontWeight: 40, color: '#fdb001' }} gutterBottom>
                        Recommend Just For You!
                    </Typography>
                    <Grid container spacing={2}>
                        {list?.recommendations.map((element, id) => (
                            <Grid item xs={12} sm={6} md={4} key={id} >
                                <Box key={id} sx={{ p: 2 }} >
                                    <Link to={`/product/${element.productId}`} style={{ textDecoration: 'none' }}>
                                        <Card
                                            sx={{
                                                borderRadius: 4,
                                                boxShadow: 3,
                                                maxHeight: "320px",
                                                minHeight: "320px",
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                    boxShadow: 6,
                                                },
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={`https://cdn.meatigo.co.in/${element.productImg}`}
                                                alt={element.catName}
                                                sx={{ maxHeight: "180px", minHeight: "180px", objectFit: "cover" }}
                                            />
                                            <CardContent>
                                                <Typography variant="h6">{element.catName}</Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography variant="h6" component="div">
                                                        ₹{element.productPrice}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography sx={{ fontSize: 50, fontWeight: 40, color: '#fdb001' }} gutterBottom>
                        Best Sellers
                    </Typography>
                    <Grid container spacing={2}>
                        {bestList?.recommendations.map((element, id) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <Box key={id} sx={{ p: 3 }}>
                                    <Link to={`/product/${element.id}`} style={{ textDecoration: 'none' }}>
                                        <Card
                                            sx={{
                                                borderRadius: 4,
                                                boxShadow: 3,
                                                maxHeight: "320px",
                                                minHeight: "320px",
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                    boxShadow: 6,
                                                },
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={`https://cdn.meatigo.co.in/${element.productImg}`}
                                                alt={element.catName}
                                                sx={{ maxHeight: "180px", minHeight: "180px", objectFit: "cover" }}
                                            />
                                            <CardContent>
                                                <Typography variant="h6">{element.catName}</Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography variant="h6" component="div">
                                                        ₹{element.productPrice}
                                                    </Typography>

                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box> 

                <Box sx={{ mb: 3 }}>
                    <Typography sx={{ fontSize: 50, fontWeight: 40, color: '#fdb001' }} gutterBottom>
                        Most Viewed
                    </Typography>
                    <Grid container spacing={2}>
                        {viewList?.recommendations.map((element, id) => (
                            < Grid item xs={12} sm={6} md={4} key={id}>
                                <Box key={id} sx={{ p: 3 }}>
                                    <Link to={`/product/${element.id}`} style={{ textDecoration: 'none' }}>
                                        <Card
                                            sx={{
                                                borderRadius: 4,
                                                boxShadow: 3,
                                                maxHeight: "320px",
                                                minHeight: "320px",
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                    boxShadow: 6,
                                                },
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={`https://cdn.meatigo.co.in/${element.productImg}`}
                                                alt={element.catName}
                                                sx={{ maxHeight: "180px", minHeight: "180px", objectFit: "cover" }}
                                            />
                                            <CardContent>
                                                <Typography variant="h6">{element.catName}</Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography variant="h6" component="div">
                                                        ₹{element.productPrice}
                                                    </Typography>
                                                   
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>*/}
            </Container >
            <Footer />


        </>
    );
};

export default AllProducts;
