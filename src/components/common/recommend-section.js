import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Core modules imports are same as usual
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function RecommendSection({ title, listData, urlToRedirect }) {
    const getFirst10Words = (str) => {
        const words = str.split(' ');
        return words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '');
    };

    const currentUrl = window.location.pathname;

    const createUrl = (productId) => {
        return `/product/${productId}`;
    };

    // function ItemBox({ element, id }) {
    //     const handleClick = () => {
    //         localStorage.setItem('selectedProduct', JSON.stringify(element));
    //     };

    //     return (
    //         <Box key={id} sx={{ p: 2 }}>
    //             <Link to={createUrl(element.productId)} style={{ textDecoration: 'none' }} onClick={handleClick}>
    //                 <Card
    //                     sx={{
    //                         borderRadius: 4,
    //                         boxShadow: 3,
    //                         width: { xs: 'auto', sm: 'auto' },
    //                         maxHeight: "330px",
    //                         minHeight: "330px",
    //                         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    //                         '&:hover': {
    //                             transform: 'scale(1.05)',
    //                             boxShadow: 6,
    //                         },
    //                     }}
    //                 >
    //                     <CardMedia
    //                         component="img"
    //                         image={`https://cdn.meatigo.com/${element.productImg}`}
    //                         alt={element.catName}
    //                         sx={{ maxHeight: "180px", minHeight: "180px", objectFit: "cover" }}
    //                     />
    //                     <CardContent>
    //                         <Typography sx={{ fontSize: '0.9rem', fontWeight: '700'}} variant="h6">{element.catName}</Typography>
    //                         <Typography variant="h10">
    //                             <span style={{ textOverflow: 'ellipsis', fontSize: '0.8rem'}}>{getFirst10Words(element.productShortDesc)}</span>
    //                         </Typography>
    //                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    //                             <Typography variant="h6" component="div">
    //                                 ₹{element.productPrice}
    //                             </Typography>
    //                         </Box>
    //                     </CardContent>
    //                 </Card>
    //             </Link>
    //         </Box>
    //     );
    // }

    return (
        <>
            <div class="root">
                <div class='pagecontent home-page'>
                    <section class="meal-one">
                        <div class="max-box">
                            <div class="std-tp"></div>
                            <div class="heading-style-1">
                                <h2>meals for one</h2>
                            </div>
                            <div class="item-slider-1">
                                <img src="assets/img/white-arrow-left.svg" class="arrow-style-1 previous disable-nav" />
                                <img src="assets/img/white-arrow-right.svg" class="arrow-style-1 next" />
                                <div class="slider swiper">
                                    <div class="swiper-wrapper">
                                        

                                        <div class="slide swiper-slide">
                                            <div class="item-style-1">
                                                <div class="item-image">
                                                    <a href="#!"><img  src={require("../../assetes/image/item1.svg").default} alt="/" /></a>
                                                </div>
                                                <p class="item-name"><a href="#!">Fresh Chicken Eggs</a></p>
                                                <div class="item-data">
                                                    <div class="item-price-info">
                                                        <div class="item-sale-price"><em>₹</em>240</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slide swiper-slide">
                                            <div class="item-style-1">
                                                <div class="item-image">
                                                    <a href="#!"><img  src={require("../../assetes/image/item1.svg").default} alt="/" /></a>
                                                </div>
                                                <p class="item-name"><a href="#!">Fresh Chicken Eggs</a></p>
                                                <div class="item-data">
                                                    <div class="item-price-info">
                                                        <div class="item-sale-price"><em>₹</em>240</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slide swiper-slide">
                                            <div class="item-style-1">
                                                <div class="item-image">
                                                    <a href="#!"><img  src={require("../../assetes/image/item1.svg").default} alt="/" /></a>
                                                </div>
                                                <p class="item-name"><a href="#!">Fresh Chicken Eggs</a></p>
                                                <div class="item-data">
                                                    <div class="item-price-info">
                                                        <div class="item-sale-price"><em>₹</em>240</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slide slide-nav swiper-slide">
                                            <div class="nav-next-wrap">
                                                <a href="#!" class="nav-next">
                                                    <img src={require("../../assetes/image/nav-arrow.svg").default} alt="" />
                                                    <span>View More</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

            </div>
        </>
    );
}

export default RecommendSection;