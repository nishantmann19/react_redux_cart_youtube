import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  callHttpRequest,
  methodType,
} from "../utility-files/api-caller/HttpRequest";
import { getRequestForApi } from "../utility-files/api-caller/CommonRequest";
import Spiner from "../components/Spiner";
import { Container } from "@mui/material";
import { decryptData } from "../utility-files/data-encryption-util/DataEncryption";

const ProductDetails = () => {
  const userId = localStorage.getItem("uuid");
  const param = useParams();
  const productName = decryptData(param.productName);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [pending, setPending] = useState(false);
  const [loading, setLoading] = useState(true);

  const addToCart = async () => {
    setPending(true);
    let request, variables;
    variables = {
      "user_id": userId,
      "products": [
        {
          "product_name": relatedProducts?.product_name,
          "quantity": 1
        }
      ]
    }
    request = getRequestForApi(
      `add_to_cart`,
      variables,
      methodType.POST
    );
    await callHttpRequest(request)
      .then((response) => {
        if (response?.status === 200 || response?.status === 201) {
          // setRelatedProducts(response?.data);
          setPending(false);
          setLoading(false);
          alert('Product added successfully!');
        }
      })
      .catch((err) => {
        setPending(false);
        setLoading(false);
      });
  };
  const getRecomendProductDetails = async () => {
    setPending(true);
    let request, variables;
    request = getRequestForApi(
      `get_product_detail?product_name=${productName}`,
      variables,
      methodType.GET
    );
    await callHttpRequest(request)
      .then((response) => {
        if (response?.status === 200 || response?.status === 201) {
          setRelatedProducts(response?.data);
          setPending(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        setPending(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    getRecomendProductDetails();
  }, [productName]);

  return (
    <>
      <Container sx={{ mt: 1, p: 4 }}>
        {loading ? <Spiner /> : null}
        <div className="root">
          <section className="product__look">
            <div className="max-box">
              <div className="product__look__wrap">
                <div className="product__img__col">
                  <div className="product__slider__wrap">
                    <div className="product__slider swiper">
                      <div className="swiper-wrapper">
                        <div className="product__slide swiper-slide">
                          <div className="product__image">
                            <img
                              src={`https://cdn.meatigo.com/${relatedProducts?.image_url}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__info__col">
                  <div className="wrap">
                    <div className="meatigos">
                      <img
                        src={
                          require("../../src/assetes/image/meatigos.svg").default
                        }
                        alt=""
                      />
                    </div>
                    <h1 className="product__title">
                      {relatedProducts?.product_name}
                    </h1>
                    <div className="product__price">
                      <div className="product__sale__price">
                        <em>₹</em>
                        {relatedProducts?.price}
                      </div>
                    </div>
                    <p className="tax-para">Inclusive of all taxes</p>
                    <div className="product__short__descr">
                      {relatedProducts?.description}
                    </div>
                  <div class="product-action">
                    <div class="avail-box">
                      <div class="action">
                        <div class="add-to-cart" onClick={(e)=>(addToCart())}>
                          ADD
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="some-info">
                      <div>
                        <div className="icon">
                          <img
                            src={
                              require("../../src/assetes/image/small4.svg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="data">
                          <p className="title">Weight</p>
                          <p className="sub-info">{relatedProducts?.weight}</p>
                        </div>
                      </div>
                      <div>
                        <div className="icon">
                          <img
                            src={
                              require("../../src/assetes/image/small5.svg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="data">
                          <p className="title">Storage</p>
                          <p className="sub-info">
                            {relatedProducts?.storage_information}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="nut-info" id="nutritional-information">
            <div className="max-box">
              <div className="heading-style-1">
                <h2>Nutritional Information</h2>
              </div>
              <div className="data-row">
                <div>
                  {relatedProducts?.nutritional_information
                    ?.split(",")
                    ?.map((item,index) => (
                      <li key={`${index}_${item}`}>{item}</li>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
