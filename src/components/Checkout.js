import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    callHttpRequest,
    methodType,
} from "../utility-files/api-caller/HttpRequest";
import { getRequestForApi } from "../utility-files/api-caller/CommonRequest";
import Spiner from "../components/Spiner";
import { useNavigate } from "react-router-dom";

function Checkout() {
    let navigate = useNavigate();
    const userId = localStorage.getItem("uuid");
    const [pending, setPending] = useState(false);
    const [loading, setLoading] = useState(true);
    const [checkoutData, setCheckoutData] = useState();

    const checkout = async () => {
        setPending(true);
        let request, variables;
        request = getRequestForApi(
            `checkout?user_id=` + userId,
            variables,
            methodType.POST
        );
        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    setCheckoutData(response?.data);
                    setPending(false);
                    setLoading(false);

                }
            })
            .catch((err) => {
                setPending(false);
                setLoading(false);
            });
    };
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
                    setPending(false);
                    setLoading(false);
                    navigate(`/thankyou`);

                }
            })
            .catch((err) => {
                setPending(false);
                setLoading(false);
            });
    };
    useEffect(() => {
        checkout();

    }, []);
    return (
        <>
            {loading ? <Spiner /> : null}
            <div className="root">
                <div className='pagecontent list-page'>
                    <div className="cart__wrapper max-box">
                        <div className="cart__data">
                            <div className="list-2">

                                <div className="check__out-hd active">
                                    <span>1</span>
                                    <h3>Select your address</h3>
                                </div>

                                <div className="rght-content mt-30">
                                    <div className="checkout__data">
                                        <div className="rght-content-head">
                                            <h4>{localStorage.getItem("userName")}</h4>
                                        </div>
                                        <div className="rght-content-buttom">
                                            <h3>+91 9999740779</h3>
                                        </div>
                                    </div>

                                    <div className="checkout__data">
                                        <div className="rght-content-head">
                                            <h4>Address</h4>

                                        </div>
                                        <div className="rght-content-buttom">
                                            <h3>{localStorage.getItem("userName")}</h3>
                                            <p className="light">B-153 B Block, NOIDA, Uttar Pradesh,<br />Near Sector 15 Metro
                                                UP-201301</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="list-3">
                                    <div className="check__out-hd active">
                                        <span>2</span>
                                        <h3>choose delivery slot</h3>
                                    </div>
                                    <div className="checkout__data">
                                        <p className="light">Please pick a time slot for delivery that suits your convenience.</p>
                                        <div className="day-cart">
                                            <div className="day-cart-main">
                                                <div className="day-cart-div clicked">
                                                    <h3>Today</h3>
                                                    <p>01 Jan</p>
                                                </div>
                                                <div className="day-cart-div">
                                                    <h3>Tomorrow</h3>
                                                    <p>02 Jan</p>
                                                </div>
                                                <div className="day-cart-div">
                                                    <h3>Fri</h3>
                                                    <p>03 Jan</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div>
                                                    <form>
                                                        <div className="rupee-div">
                                                            <div className="pup-radio rupee-main">
                                                                <div className="form__grp">
                                                                    <div className="nr__input num__pre radio"><input type="radio"
                                                                        id="txt1" name="radio-group" checked /><label
                                                                            for="txt1">Delivery by 11:45 AM<br /><span>Express
                                                                                Delivery</span></label></div>
                                                                </div>
                                                                <div className="rupee">
                                                                    <span><em>₹</em>40</span>
                                                                </div>
                                                            </div>
                                                            <div className="pup-radio rupee-main">
                                                                <div className="form__grp">
                                                                    <div className="nr__input num__pre radio"><input type="radio"
                                                                        id="txt2" name="radio-group" /><label for="txt2">12:30 PM
                                                                            - 2:00 PM<br /><span>Standard Delivery</span></label>
                                                                    </div>
                                                                </div>
                                                                <div className="rupee">
                                                                    <span><em>₹</em>40</span>
                                                                </div>
                                                            </div>

                                                            <div className="bg-black">
                                                                <button className="check__btn">Save Slot</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rght-content mt-30">
                                    {/* <div className="checkout__data">
                                        <div className="rght-content-head">
                                            <h4>{localStorage.getItem("userName")}</h4>
                                        </div>
                                        <div className="rght-content-buttom">
                                            <h3>+91 9999740779</h3>
                                        </div>
                                    </div>
                                    <div className="checkout__data">
                                        <div className="rght-content-head">
                                            <h4>Address</h4>
                                            <button className="rght-content-button">Choose address</button>
                                        </div>
                                        <div className="rght-content-buttom">
                                            <h3>{localStorage.getItem("userName")}</h3>
                                            <p className="light">B-153 B Block, NOIDA, Uttar Pradesh,<br />Near Sector 15 Metro
                                                UP-201301</p>
                                        </div>
                                    </div>
                                    <div className="checkout__data">
                                        <div className="rght-content-head">
                                            <h4>Delivery Slot</h4>
                                            <button className="rght-content-button">change slot</button>
                                        </div>
                                        <div className="rght-content-buttom">
                                            <h3>Today | Jan 01, 2022</h3>
                                            <p className="light">Between 10:00 AM - 12:30 PM</p>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="list-4">
                                    <div className="check__out-hd active">
                                        <span>3</span>
                                        <h3>choose a payment mode</h3>
                                    </div>
                                    <div className="checkout__data">
                                        <p className="light">Select a method of payment for your order</p>
                                        <div className="cart-apply open-modal" data-open="modal4">
                                            <img src={require("../../src/assetes/image/promo-code.svg").default} />
                                            <div className="cart-apply-head">
                                                <h3>Apply Promo Code</h3>
                                            </div>
                                        </div>
                                        <div className="modal" id="modal4">
                                            <div className="modal-content apply">
                                                <span className="close-button crus-black">
                                                    <img src={require("../../src/assetes/image/crus-black.svg").default} />
                                                </span>
                                                <div className="cart__box__head max-pop pup-main">
                                                    <div className="pup-head">
                                                        <h3>Promo Codes</h3>
                                                    </div>
                                                </div>
                                                <div data-simplebar className="custom-scroll pup-csroll">
                                                    <div className="pup-img pup-apply">
                                                        <div className="pup-appl-buttom">
                                                            <div className="card-apply">
                                                                <div className="card-apply-div">
                                                                    <div className="card-apply-head ">
                                                                        <img src={require("../../src/assetes/image/add-debit.svg").default} className="m-0" />
                                                                        <h4 className="m-0">MAXSAFETY</h4>
                                                                    </div>
                                                                    <button className="rght-content-button">APPLY</button>
                                                                </div>
                                                                <div className="card-apply-content">
                                                                    <h5>Get 20% discount on using Meatigo Wallet.</h5>
                                                                    <p className="fn-14">Valid on orders with items worth ₹760 or more.
                                                                    </p>
                                                                    <p className="green">You will save ₹76.85 using this code</p>
                                                                    <Link to="#" className="view ">View Details</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pup-appl-buttom">
                                                            <div className="card-apply">
                                                                <div className="card-apply-div">
                                                                    <div className="card-apply-head ">
                                                                        <img src={require("../../src/assetes/image/eatmeat200.svg").default} className="m-0" />

                                                                        <h4 className="m-0">Eatmeat200</h4>
                                                                    </div>
                                                                    <button className="rght-content-button">APPLY</button>
                                                                </div>
                                                                <div className="card-apply-content">
                                                                    <h5>Get 20% discount on using Meatigo Wallet.</h5>
                                                                    <p className="fn-14">Valid on orders with items worth ₹760 or more.
                                                                    </p>
                                                                    <p className="green">You will save ₹76.85 using this code</p>
                                                                    <Link to="#" className="view less-details">Less Details</Link>
                                                                </div>
                                                            </div>
                                                            <div className="less">
                                                                <ul>
                                                                    <li>Offer is valid on selected items.</li>
                                                                    <li>Coupon code can be applied only once.</li>
                                                                    <li>Offer valid till Jan 31, 2022 11:59 PM.</li>
                                                                    <li>Other T&C’s may apply.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="pup-appl-buttom">
                                                            <div className="card-apply">
                                                                <div className="card-apply-div">
                                                                    <div className="card-apply-head ">
                                                                        <img src={require("../../src/assetes/image/add-debit.svg").default} className="m-0" />
                                                                        <h4 className="m-0">MAXSAFETY</h4>
                                                                    </div>
                                                                    <button className="rght-content-button">APPLY</button>
                                                                </div>
                                                                <div className="card-apply-content">
                                                                    <h5>Get 20% discount on using Meatigo Wallet.</h5>
                                                                    <p className="fn-14">Valid on orders with items worth ₹760 or more.
                                                                    </p>
                                                                    <p className="green">You will save ₹76.85 using this code</p>
                                                                    <Link to="#" className="view">View Details</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pup-appl-buttom">
                                                            <div className="card-apply">
                                                                <div className="card-apply-div">
                                                                    <div className="card-apply-head ">
                                                                        <img src={require("../../src/assetes/image/eatmeat200.svg").default} className="m-0" />
                                                                        <h4 className="m-0">Eatmeat200</h4>
                                                                    </div>
                                                                    <button className="rght-content-button">APPLY</button>
                                                                </div>
                                                                <div className="card-apply-content">
                                                                    <h5>Get 20% discount on using Meatigo Wallet.</h5>
                                                                    <p className="fn-14">Valid on orders with items worth ₹760 or more.
                                                                    </p>
                                                                    <p className="green">You will save ₹76.85 using this code</p>
                                                                    <Link to="#" className="view">View Details</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="payment">
                                            <p className="light  list-2">Selected Payment Methods</p>
                                            <form>
                                                <div className="form__grp form-ending">
                                                    <div className="nr__input num__pre radio p-0">
                                                        <input type="radio" id="ending" name="radio-group" checked />
                                                        <label for="ending" className="form-ending-label">
                                                            {/* <img src={require("../../src/assetes/image/cash-on-delivery.svg").default} /> */}
                                                            Cash On Delivery <br /></label>

                                                    </div>
                                                    {/* <div className="ending">
                                                        <input type="password" name="" className="ending-input" placeholder="★★★	" />
                                                    </div> */}
                                                </div>
                                            </form>



                                        </div>
                                        <p className="light mb-0 list-2">Other Payment Methods</p>
                                        <div className="cart-apply m-0 border-none open-modal" data-open="modal5">
                                            <img src={require("../../src/assetes/image/add-debit.svg").default} className="m-0" />
                                            <div className="cart-apply-head">
                                                <h3>Add Debit/Credit Card</h3>
                                                <p className="light m-0">Extra 10% OFF on HDFC debit card</p>
                                            </div>
                                        </div>
                                        <div className="cart-apply m-0 border-none">
                                            <img src={require("../../src/assetes/image/upi.svg").default} />
                                            <div className="cart-apply-head">
                                                <h3>UPI</h3>
                                            </div>
                                        </div>
                                        <div className="cart-apply m-0 border-none">
                                            <img src={require("../../src/assetes/image/wallet.svg").default} />
                                            <div className="cart-apply-head">
                                                <h3>Wallet</h3>
                                            </div>
                                        </div>
                                        <div className="cart-apply m-0 border-none">
                                            <img src={require("../../src/assetes/image/net-banking.svg").default} />
                                            <div className="cart-apply-head">
                                                <h3>Net Banking</h3>
                                            </div>
                                        </div>
                                        <div className="cart-apply m-0 border-none">
                                            <img src={require("../../src/assetes/image/cash-on-delivery.svg").default} />

                                            <div className="cart-apply-head">
                                                <h3>Cash On Delivery</h3>
                                                <p className="light m-0">Free delivery on orders above ₹699</p>
                                            </div>
                                        </div>
                                        {/* <div className="cart-apply m-0 border-none alin-start">
                                            <div className="swich">
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>

                                        </div> */}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="cart__price__data">
                            <div className="cart__price__info">
                                <div className="checkout__sum__head">
                                    <h2>Your order</h2>
                                    {/* <div className="text">4 items</div> */}
                                </div>
                                <table className="cartable">
                                    <tbody>
                                        {checkoutData?.products?.map((element, id) => (
                                            <tr>
                                                <td>
                                                    <div className="item-data">
                                                        <div className="image">
                                                            <img src={`https://cdn.meatigo.com/${element?.image_url}`} />
                                                        </div>
                                                        <div className="data">
                                                            <div className="item-title">{element?.product_name}</div>
                                                            <div className="item-info">
                                                                <span>{element?.quantity} Qty</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="item-price">
                                                        <em>₹</em>{element?.total_price}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart__price__info">
                                <div className="flex">
                                    <div className="title w600">Total Cart Price</div>
                                    <div className="price"><em>₹</em>{checkoutData?.cart_total}</div>
                                </div>
                                <div className="flex">
                                    <div className="title">Delivery Charge</div>
                                    <div className="price"><em>₹</em>0</div>
                                </div>
                                <div className="flex">
                                    <div className="title">Other Taxes and Charges</div>
                                    <div className="price"><em>₹</em>0</div>
                                </div>
                                <div className="flex">
                                    <div className="title green">Promo Code </div>
                                    <div className="price green">-<em>₹</em>0</div>
                                </div>
                                <div className="flex total">
                                    <div className="title">
                                        <h2>Total Payable</h2>
                                    </div>
                                    <div className="price final">
                                        <span className="product__max__price"><em>₹</em>{checkoutData?.cart_total}</span>

                                    </div>
                                </div>
                                <p className="disclaimer-text">The final amount is dynamic and subject to change depending on your
                                    delivery
                                    address and your delivery
                                    slot</p>
                                {/* <div className="green-order"><img src={ require("../../src/assetes/image/green-rupee.svg").default}/> */}
                                {/* You are saving a total of ₹180 on this order</div> */}
                                <Link to="#" className="prd-checkout" onClick={(e) => (placeOrder())}>Place Order
                                    <img src={require("../../src/assetes/image/checkout-arrow.svg").default} />
                                </Link>
                                <div className="sub-dsg">
                                    <img src={require("../../src/assetes/image/subtract.svg").default} />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout