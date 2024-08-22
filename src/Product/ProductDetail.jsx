import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import Cards from '../components/Cards';
import { callHttpRequest, methodType } from '../utility-files/api-caller/HttpRequest';
import { getRequestForApi } from '../utility-files/api-caller/CommonRequest';
import { isIntegerValue } from '../utility-files/data-util/DataHandler';
import RecommendSection from '../components/common/recommend-section';
import Footer from '../Footer/fotter';



const ProductDetails = () => {
    const param = useParams();
    const productName = param.productName;
    
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [frequentlyProduct, setFrequentlyProduct] = useState([]);
    const [pending, setPending] = useState(false);
    

    

    const getRecomendProductDetails = async () => {
        setPending(true);
        let request, variables;
        request = getRequestForApi(
            `http://54.224.108.112:5000/get_product_detail?product_name=${productName}`,
            variables,
            methodType.GET
        );
        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    setRelatedProducts(response?.data);
                    setPending(false);
                }
            })
            .catch((err) => {
                setPending(false);
            });
    };

  
    useEffect(() => {
        getRecomendProductDetails();
    }, []);

    const storedProduct = localStorage.getItem('selectedProduct');
    const parsedProduct = JSON.parse(storedProduct);
    console.log("parsedProduct", parsedProduct)

    return (

        <div class="root">
            <section class="product__look">
                <div class="max-box">
                    <div class="product__look__wrap">
                        <div class="product__img__col">
                            <div class="product__slider__wrap">
                                <div class="product__slider swiper">
                                    <div class="swiper-wrapper">
                                        <div class="product__slide swiper-slide">
                                            <div class="product__image">
                                                <img src={`https://cdn.meatigo.com/${relatedProducts?.image_url}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product__info__col">
                            <div class="wrap">
                                <div class="meatigos"><img src={require("../../src/assetes/image/meatigos.svg").default} alt="" /></div>
                                <h1 class="product__title">{relatedProducts?.product_name}</h1>
                                <div class="product__price">
                                    <div class="product__sale__price"><em>₹</em>{relatedProducts?.price}</div>
                                </div>
                                <p class="tax-para">Inclusive of all taxes</p>
                                <div class="product__short__descr">
                                    {relatedProducts?.description}
                                </div>
                                <div class="some-info">
                                    <div>
                                        <div class="icon">
                                            <img src={require("../../src/assetes/image/small4.svg").default} alt="" />
                                        </div>
                                        <div class="data">
                                            <p class="title">Weight</p>
                                            <p class="sub-info">
                                                {relatedProducts?.weight}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon">
                                            <img src={require("../../src/assetes/image/small5.svg").default} alt="" />
                                        </div>
                                        <div class="data">
                                            <p class="title">Storage</p>
                                            <p class="sub-info">{relatedProducts?.storage_information}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div class="std-tp"></div>
            <section class="nut-info" id="nutritional-information">
                <div class="max-box">
                    <div class="heading-style-1">
                        <h2>Nutrional Information</h2>
                    </div>
                    <div class="data-row">
                        <div>
                            {relatedProducts?.nutritional_information?.split(',')?.map((item) => <>
                                <li>{item}</li>
                            </>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </div>




    );
};

export default ProductDetails;
