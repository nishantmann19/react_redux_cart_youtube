import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    callHttpRequest,
    methodType,
} from "../utility-files/api-caller/HttpRequest";
import { getRequestForApi } from "../utility-files/api-caller/CommonRequest";
import Spiner from "../components/Spiner";
import moment from "moment";

function Thankyou() {
    const userId = localStorage.getItem("uuid");
    const cart_tot = localStorage.getItem("CART_TOTAL");
    const [pending, setPending] = useState(false);
    const [loading, setLoading] = useState(true);
    const [placeorderData, setPlaceorderData] = useState();

    const placeOrder = async () => {
        setPending(true);
        let request, variables;
        request = getRequestForApi(
            `place_order?user_id=` + userId,
            variables,
            methodType.POST
        );
        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    setPlaceorderData(response?.data);
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
        setPending(false);
        setLoading(false);
    }, []);
    return (
        <>
            {loading ? <Spiner /> : null}
            <div className="root">
                <div className='pagecontent list-page'>
                    <div className="cart__wrapper max-box">
                        <div className="thank-you">
                            <div className="thank-top mb-4">
                                <img src={require("../../src/assetes/image/Frame.svg").default} />
                                <div className="thank-you-top-content">
                                    <h3>thank you for <br />placing your order!</h3>
                                    <p>You will recieve a confirmation shortly for delivery info at <br /><Link
                                        to="#">+91 9999740779</Link>. </p>
                                    <h4>Amout Paid - ₹{cart_tot ? cart_tot : 0}</h4>
                                </div>
                            </div>

                            <div className="thank-join m-0">
                                <div className="thank-join-div">
                                    <img src={require("../../src/assetes/image/thank-order.svg").default} />
                                    <div className="thank-join-content">
                                        <h3>Order Details</h3>
                                        <p>Stay updated on all your meat info</p>
                                    </div>
                                </div>
                                <div className="thank-standad">
                                    <p><span>Standard Delivery - FREE</span></p>
                                    <p className="light">B-153 B Block, NOIDA, Uttar Pradesh,<br />Near Sector 15 Metro
                                        UP-201301</p>
                                    <p className="green">{moment().add(1, 'days').format("MMM DD, YYYY")} | Between 12:30 PM - 02:00 PM</p>
                                </div>
                                {placeorderData?.map((element, id) => (
                                    <div className="thank-more">
                                        <img src={`https://cdn.meatigo.com/${element?.image_url}`} />
                                        {/* <img src="assets/img/thank-img-2.svg">
								<img src="assets/img/thank-img-3.svg">
								<img src="assets/img/thank-img-4.svg"> */}
                                        <p>+2 more</p>
                                    </div>
                                ))}
                                <div className="order-miss bg-yelow mb-24">
                                    <div className="order-miss-head">
                                        <img src={require("../../src/assetes/image/clock-new.svg").default} />
                                        <div className="order-miss-cont">
                                            <h5>Missed something?</h5>
                                            <p>Add items to this order before time runs out.<span>01:52</span></p>
                                        </div>
                                    </div>
                                    <div className="order-miss-btn wi-200">
                                        <Link to="#">Modify Order</Link>
                                    </div>
                                </div>
                                <div className="order-cancle p-24 brfore-none">
                                    <div className="order-miss-head">
                                        <img src={require("../../src/assetes/image/Group-27341.svg").default} />

                                        <div className="order-miss-cont">
                                            <p>Cancel your order for free within 2 mins of placing it.</p>
                                        </div>
                                    </div>
                                    <div className="order-miss-btn">
                                        <Link to="#">Cancel Order</Link>
                                    </div>
                                </div>
                                <div className="thank-standad mb-0 thank-order-no">
                                    <p className="thank-order-no-main"><span>Order Number - <b>34562345</b></span> <span>Order Date - <b>{moment().format("MMM DD, YYYY")}</b></span></p>
                                    <h3>What’s next?</h3>
                                    <p>Check your phone for order confirmation. We will also let you know when your order is
                                        ready for delivery. </p>
                                    <br />
                                    <p>If you have any questions regarding your order, visit <Link to="#">help center</Link> to
                                        learn more.</p>
                                </div>
                            </div>
                            <br />
                            <div className="order-miss mb-24 mt-24 bg-white">
                                <div className="order-miss-head">
                                    <img src={require("../../src/assetes/image/a.svg").default} />
                                    <div className="order-miss-cont">
                                        <h5>Pay At Your Convenience</h5>
                                        <p>You can now pay anytime you want to avoid contact less payment</p>
                                    </div>
                                </div>
                                <div className="order-miss-btn wi-100">
                                    <Link to="#">Pay Now</Link>
                                </div>
                            </div>
                            <div className="thank-left-btn">
                                <Link to={'/'}>
                                    <button>Keep Shopping</button>
                                </Link>
                            </div>
                        </div>
                        <div className="thank-you-right sticky">
                            <div className="trank-premium">
                                <div className="trank-premium-head">
                                    <h3>PREMIUM <img src={require("../../src/assetes/image/Meatigo.svg").default} /> PREMIUM</h3>
                                </div>
                                <div className="trank-premium-content">
                                    <p>Why pay extra? Unlock unlimited free <br />deliveries and up to 30% extra off.</p>
                                </div>
                                <div className="trank-premium-btn">
                                    <button>Join Premium <img src={require("../../src/assetes/image/Nav-Arrow-1.svg").default} /></button>
                                </div>
                            </div>
                            <div className="order-benefits">
                                <div className="order-benefits-main p-0 color-yellow">
                                    <h3>Premium Benifits</h3>
                                </div>
                                <div className="order-benefits-div grid-1 thank-right-new">
                                    <div className="order-benefits-sec">
                                        <img src={require("../../src/assetes/image/Group-26931.svg").default} />

                                        <div className="order-benefits-content">
                                            <h4>Zero Delivery Fees</h4>
                                            <p>Get free delivery with every order, everytime.</p>
                                        </div>
                                    </div>
                                    <div className="order-benefits-sec">
                                        <img src={require("../../src/assetes/image/get-extra.svg").default} />
                                        <div className="order-benefits-content">
                                            <h4>Get Extra Cashback</h4>
                                            <p>Get free delivery with every order everytime.</p>
                                        </div>
                                    </div>
                                    <div className="order-benefits-sec">
                                        <img src={require("../../src/assetes/image/Membership.svg").default} />
                                        <div className="order-benefits-content">
                                            <h4>Membership Discounts</h4>
                                            <p>Get free delivery with every order, everytime.</p>
                                        </div>
                                    </div>
                                    <div className="order-benefits-sec">
                                        <img src={require("../../src/assetes/image/pre-order.svg").default} />
                                        <div className="order-benefits-content">
                                            <h4>Pre Order & Exclusive Access</h4>
                                            <p>Get free delivery with every order, everytime.</p>
                                        </div>
                                    </div>
                                    <div className="order-benefits-sec">
                                        <img src={require("../../src/assetes/image/master-chef.svg").default} />
                                        <div className="order-benefits-content">
                                            <h4>Master Chef Tasting Panel</h4>
                                            <p>Get free delivery with every order, everytime.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Thankyou