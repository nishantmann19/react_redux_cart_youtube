import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import { sneakers, basketballShoes, casualShoes } from '../../components/CardsData';
import { Link } from 'react-router-dom';

function RecommendSection({ title, listData, urlToRedirect }) {
        const getFirst10Words = (str) => {
            const words = str.split(' ');
            return words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '');
        };
    
        const currentUrl = window.location.pathname;

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
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
        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "", background: "black" }}
                    onClick={onClick}
                />
            );
        }

        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block", background: "black" }}
                    onClick={onClick}
                />
            );
        }

        function ItemBox({ element, id }) {
            return (
                <Box key={id} sx={{ p: 2 }} >
                    <Link to={`/product/${element.productId}`} style={{ textDecoration: 'none' }}>
                        <Card
                            sx={{
                                borderRadius: 4,
                                boxShadow: 3,
                                width: { xs: 'auto', sm: 'auto' },
                                  maxHeight: "400px",
                                  minHeight:"400px",
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={`https://cdn.meatigo.com/${element.productImg}`}
                                alt={element.catName}
                                sx={{ maxHeight: "180px", minHeight: "180px", objectFit: "cover" }}
                            />
                            <CardContent>
                                <Typography variant="h6">{element.catName}</Typography>
                                <Typography variant="h10"><span style={{textOverflow: 'ellipsis'}}>{getFirst10Words(element.productShortDesc)}</span></Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6" component="div">
                                        ₹{element.productPrice}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Link>
                </Box>
            )
        }
        return (
            <div>
                <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: 40, fontWeight: 40, color: '#fdb001' }} gutterBottom>
                        {title}
                        {(currentUrl == '/allproducts/allRecommendation/' || currentUrl == '/allproducts/bestSeller/' || currentUrl == '/allproducts/mostViewed/') ? null : <a href={urlToRedirect}><span style={{ fontSize: "12px", color: "grey" }}> All Products</span></a>}

                    </Typography>
                    {(currentUrl == '/allproducts/allRecommendation/' || currentUrl == '/allproducts/bestSeller/' || currentUrl == '/allproducts/mostViewed/') ?
                        <Grid container spacing={2}>
                            {listData?.map((element, id) => (
                                <Grid item xs={12} sm={6} md={4} key={id} >
                                    <ItemBox id={id} element={element} />
                                </Grid>
                            ))}
                        </Grid>
                        :
                        <Slider {...settings} sx={{ boxShadow: 3, }}>
                            {listData?.map((element, id) => (
                                <ItemBox id={id} element={element} />
                            ))}
                        </Slider>
                    }


                </Box>
            </div>
        )
    }

    export default RecommendSection