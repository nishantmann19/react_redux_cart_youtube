import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { callHttpRequest, methodType } from '../../utility-files/api-caller/HttpRequest';
import { getRequestForApi } from '../../utility-files/api-caller/CommonRequest';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ActionBtn from "./ActionBtn";

function RecommendSection({ title, listData, urlToRedirect }) {
  const swiperRef = useRef();
  const userId = localStorage.getItem("uuid");
  const param = useParams();
  const product_name = param.product_name;
  const [cartData, setCartData] = useState();
  const [pending, setPending] = useState(false);
  console.log("listData", listData)
  const viewCart = async () => {
    setPending(true);
    let request, variables;
    request = getRequestForApi(
      `view_cart?user_id=` + userId,
      variables,
      methodType.GET
    );
    await callHttpRequest(request)
      .then((response) => {
        console.log("TOE ", response?.data);
        if (response?.status === 200 || response?.status === 201) {
          setCartData(response?.data.error ? null : response?.data);
        }
      })
      .catch((err) => {

      });
  };

  const getFirst10Words = (str) => {
    let words = "";
    if (str !== undefined) words = str?.split(" ");
    return str !== undefined
      ? words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "")
      : words;
  };

  const sendData = (element) => {
    if (!cartData) {
      return element;
    }

    let y = cartData?.products?.filter(i => i.product_name == element?.product_name);
    return y?.length > 0 ? y[0] : null;
  }

  useEffect(() => {
    viewCart()
  }, []);

  // function ItemBox({ element, id }) {
  //     const handleClick = () => {
  //         localStorage.setItem('selectedProduct', JSON.stringify(element));
  //     };

  //     return (
  //         <>
  //             <div className="root">
  //                 <div className='pagecontent list-page'>
  //                     <section>
  //                         <div className="std-tp"></div>
  //                         <div className="max-box">
  //                             <div className="list-h2">
  //                                 <h2>{title}</h2>
  //                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lorem in ultrices
  //                                     tempus. </p>
  //                             </div>
  //                             <div className="grid-list">
  //                                 <div className="item-style-1">
  //                                     <div className="item-image">

  //                                     <img src={`https://cdn.meatigo.com/${element?.image_url}`} alt=""/>
  //                                         <a href="#!"><img src="assets/img/item3.svg" alt="" /></a>
  //                                     </div>
  //                                     <p className="item-name"><a href="#!">{element?.product_name}</a></p>
  //                                     <div className="item-data">
  //                                         <div className="item-price-info">
  //                                             <div className="item-sale-price"><em>₹</em>{element?.price}</div>
  //                                         </div>

  //                                         {/* <div className="item-action">
  //                                             <div className="add-to-cart"><span>Add</span></div>
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

  return (
    <>
      <div className="root">
        <div className="pagecontent home-page">
          <section className="sales-one">
            <div className="max-box">
              <div className="std-tp" />
              <div className="heading-style-1">
                <h2>{title}</h2>
              </div>
              <div className="item-slider-1">
                <img
                  src={
                    require("../../assetes/image/white-arrow-left.svg").default
                  }
                  onClick={() => swiperRef.current.slidePrev()}
                  className="arrow-style-1 previous"
                  alt=""
                />
                <img
                  src={
                    require("../../assetes/image/white-arrow-right.svg").default
                  }
                  onClick={() => swiperRef.current.slideNext()}
                  className="arrow-style-1 next"
                  alt=""
                />
                <div className="slider swiper">
                  <div className="swiper-wrapper">
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
                        <SwiperSlide key={id}>
                          <div className="item-style-1">
                            <div className="item-image">
                              <Link to={`/product/${element?.product_name}`}>
                                <img
                                  src={`https://cdn.meatigo.com/${element?.image_url}`}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <p className="item-name">
                              <Link to={`/product/${element?.product_name}`}>
                                {element?.product_name}
                              </Link>
                            </p>
                            <p>{getFirst10Words(element?.description)}</p>
                            <div className="item-data">
                              <div className="item-price-info">
                                <div className="item-sale-price">
                                  <em>₹</em>
                                  {element?.price}
                                </div>
                              </div>
                              <ActionBtn data={sendData(element)} viewCart={viewCart} relatedProducts={listData} sendData={sendData} source={'Recommend_Section_Page'} />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <SwiperSlide className="slide-nav">
                        <Link to={urlToRedirect} className="nav-next">
                          <img
                            src={
                              require("../../assetes/image/nav-arrow.svg")
                                .default
                            }
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
