import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { IMAGE_TYPES } from "../../defaultImage/imges";

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
    const swiperRef = useRef();

    const getFirst10Words = (str) => {
        let words = ""
        if (str != undefined)
            words = str?.split(' ');
        return str != undefined ? words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '') : words;
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
    //         <>
    //             <div class="root">
    //                 <div class='pagecontent list-page'>
    //                     <section>
    //                         <div class="std-tp"></div>
    //                         <div class="max-box">
    //                             <div class="list-h2">
    //                                 <h2>{title}</h2>
    //                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lorem in ultrices
    //                                     tempus. </p>
    //                             </div>
    //                             <div class="grid-list">
    //                                 <div class="item-style-1">
    //                                     <div class="item-image">

    //                                     <img src={`https://cdn.meatigo.com/${element?.image_url}`} alt=""/>
    //                                         <a href="#!"><img src="assets/img/item3.svg" alt="" /></a>
    //                                     </div>
    //                                     <p class="item-name"><a href="#!">{element?.productName}</a></p>
    //                                     <div class="item-data">
    //                                         <div class="item-price-info">
    //                                             <div class="item-sale-price"><em>₹</em>{element?.price}</div>
    //                                         </div>

    //                                         {/* <div class="item-action">
    //                                             <div class="add-to-cart"><span>Add</span></div>
    //                                         </div> */}
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </section>

    //                 </div >
    //             </div >


    //         </>
    //     );
    // }

    const sneakers = [
        {
            id: 1,
            name: 'STREAKY BACON',
            price: 657,
            image: IMAGE_TYPES.PRODUCT_1,
            rating: 4.5,
            sizes: ['S', 'M', 'L', 'XL'],
            deliveryOptions: [
                'Free delivery on orders over $50',
                'Standard delivery (3-5 Hours)',
                'Express delivery (1-2 Hours)',
            ],
            bestOffers: [
                '10% off on your first purchase',
                'Buy 1 get 1 free on select items',
            ],
            productDetails: [
                "Farm fresh veggies tossed in a spicy sauce encased in a fluffy, cloud like veggie bao, it doesn't get any better than this! Enjoy as a snack or meal, depending on how hungry you are!"
            ],
            customerReviews: [
                { name: 'John Doe', rating: 5, comment: 'Great Product and Tasty ' },
                { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
            ],
        },
        {
            id: 2,
            name: 'PORK MINE',
            price: 300,
            image: IMAGE_TYPES.PRODUCT_12,
            rating: 4.5,
            kg: ['1', '2'],
            deliveryOptions: [
                'Free delivery on orders over $50',
                'Standard delivery (3-5 days)',
                'Express delivery (1-2 days)',
            ],
            bestOffers: [
                '10% off on your first purchase',
                'Buy 1 get 1 free on select items',
            ],
            productDetails: [
                'Juicy and delicious mince- perfect for crafting your own meatballs, burgers & everything else!',
            ],
            customerReviews: [
                { name: 'John Doe', rating: 5, comment: 'Great jacket, very stylish!' },
                { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
            ],
        },
        {
            id: 3,
            name: 'PORK BELLY CUBES',
            price: 450,
            image: IMAGE_TYPES.PRODUCT_13,
            rating: 4.5,
            sizes: ['S', 'M', 'L', 'XL'],
            deliveryOptions: [
                'Free delivery on orders over $50',
                'Standard delivery (3-5 days)',
                'Express delivery (1-2 days)',
            ],
            bestOffers: [
                '10% off on your first purchase',
                'Buy 1 get 1 free on select items',
            ],
            productDetails: [
                "Pork Belly Cubes are celebrated for their rich, Meaty flavour and melt-in-the-mouth characteristic. Our Imported Pork Belly Cubes are no exception. Crafted from premium Pork sourced from Belgium, these Pork Belly Cubes are cut in-house and are ready to use straight out of the pack. You can use these cubes in your curries, stir-fries, biryani & more. With our Imported Pork Belly Cubes, you can effortlessly cook dishes that are sure to impress.",
            ],
            customerReviews: [
                { name: 'John Doe', rating: 5, comment: 'Great jacket, very stylish!' },
                { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
            ],
        },
        {
            id: 4,
            name: 'EVERYDAY FISH FILLET',
            price: 550,
            image: IMAGE_TYPES.PRODUCT_14,
            rating: 4.5,
            sizes: ['S', 'M', 'L', 'XL'],
            deliveryOptions: [
                'Free delivery on orders over $50',
                'Standard delivery (3-5 days)',
                'Express delivery (1-2 days)',
            ],
            bestOffers: [
                '10% off on your first purchase',
                'Buy 1 get 1 free on select items',
            ],
            productDetails: [
                'Our Everyday Fish Fillet takes the guesswork out of cooking, ensuring a fuss-free and delicious meal in minutes. Known for its mild flavour and flaky tender texture, our responsibly sourced Indian Basa provides the perfect canvas for our exceptional Everyday Fish Fillet marinade. From weekday dinners to weekend gatherings, this is an ideal dish for any occasion.',
            ],
            customerReviews: [
                { name: 'John Doe', rating: 5, comment: 'Great jacket, very stylish!' },
                { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
            ],
        },
        {
            id: 5,
            name: 'TUNA SASHIMI',
            price: 350,
            image: IMAGE_TYPES.PRODUCT_15,
            rating: 4.5,
            sizes: ['S', 'M', 'L', 'XL'],
            deliveryOptions: [
                'Free delivery on orders over $50',
                'Standard delivery (3-5 days)',
                'Express delivery (1-2 days)',
            ],
            bestOffers: [
                '10% off on your first purchase',
                'Buy 1 get 1 free on select items',
            ],
            productDetails: [
                'Caught sustainably from deep waters, our Tuna Center Cut Loin boasts a texture thats tender and robust. Its firm flesh promises a delightful bite, while the rich taste hints at the ocean s depth. With its rich, buttery flavour, this Tuna Cut is a game-changer for any seafood enthusiast. This is a rare find not easily available in the market',
            ],
            customerReviews: [
                { name: 'John Doe', rating: 5, comment: 'Great jacket, very stylish!' },
                { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
            ],
        },
    ];

    return (
        <>
                <div className="root">
                    <div className="pagecontent home-page">
                        <section className="sales-one">
                            <div className="max-box">
                                <div className="std-tp" />
                                <div className="heading-style-1">
                                    <h2>
                                        {title}
                                    </h2>
                                </div>
                                <div className="item-slider-1">
                                    <img
                                        src={require("../../assetes/image/white-arrow-left.svg").default}
                                        onClick={() => swiperRef.current.slidePrev()}
                                        className="arrow-style-1 previous"
                                    />
                                    <img
                                        src={require("../../assetes/image/white-arrow-right.svg").default}
                                        onClick={() => swiperRef.current.slideNext()}
                                        className="arrow-style-1 next"
                                    />
                                    <div className="slider swiper">
                                        <div className="swiper-wrapper">
                                            {console.log("list ", sneakers)}

                                            <Swiper
                                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                spaceBetween={50}
                                                slidesPerView={3}
                                                // onSlideChange={() => console.log('slide change')}
                                                onSwiper={(swiper) => {
                                                    swiperRef.current = swiper;
                                                }}
                                                breakpoints={{
                                                    100: {
                                                        slidesPerGroup: 2,
                                                        spaceBetween: 12,
                                                    },
                                                    720: {
                                                        slidesPerGroup: 2,
                                                        spaceBetween: 12,
                                                    },
                                                    1024: {
                                                        slidesPerGroup: 3,
                                                        spaceBetween: 30,
                                                    },
                                                    1920: {
                                                        spaceBetween: 30,
                                                    },
                                                }}
                                            >
                                                {listData?.map((element, id) => (
                                                    <SwiperSlide>
                                                        <div className="item-style-1">
                                                            <div className="item-image">
                                                                <a href="#!">
                                                                    <img src={`https://cdn.meatigo.com/${element?.image_url}`} alt="" />
                                                                </a>
                                                            </div>
                                                            <p className="item-name">
                                                                <a href="#!">{element?.productName}</a>
                                                            </p>
                                                            <p>
                                                                {getFirst10Words(element?.description)}
                                                            </p>
                                                            <div className="item-data">
                                                                <div className="item-price-info">
                                                                    <div className="item-sale-price">
                                                                        <em>₹</em>{element?.price}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                                <SwiperSlide className="slide-nav">
                                                    <Link
                                                        to={urlToRedirect}
                                                        className="nav-next"
                                                    >
                                                        <img
                                                            src={require("../../assetes/image/nav-arrow.svg").default}
                                                            alt="Meatigo"
                                                        />
                                                        <span>View All</span>
                                                    </Link>
                                                </SwiperSlide>
                                            </Swiper>


                                        </div>
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