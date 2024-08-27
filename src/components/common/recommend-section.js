import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Core modules imports are same as usual
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function RecommendSection({ title, listData, urlToRedirect }) {
  const swiperRef = useRef();

  const getFirst10Words = (str) => {
    let words = "";
    if (str != undefined) words = str?.split(" ");
    return str != undefined
      ? words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "")
      : words;
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
                />
                <img
                  src={
                    require("../../assetes/image/white-arrow-right.svg").default
                  }
                  onClick={() => swiperRef.current.slideNext()}
                  className="arrow-style-1 next"
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
                          <div className="item-style-1" >
                            <div className="item-image" >
                              <a href={`/product/${element?.productName}`}>
                                <img
                                  src={`https://cdn.meatigo.com/${element?.image_url}`}
                                  alt=""
                                />
                              </a>
                            </div>
                            <p className="item-name">
                              <a href={`/product/${element?.productName}`}>
                                {element?.productName}
                              </a>
                            </p>
                            <p>{getFirst10Words(element?.description)}</p>
                            <div className="item-data">
                              <div className="item-price-info">
                                <div className="item-sale-price">
                                  <em>₹</em>
                                  {element?.price}
                                </div>
                              </div>
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
