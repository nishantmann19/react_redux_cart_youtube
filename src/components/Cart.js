import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    callHttpRequest,
    methodType,
} from "../utility-files/api-caller/HttpRequest";
import { getRequestForApi } from "../utility-files/api-caller/CommonRequest";
import Spiner from "../components/Spiner";
import ActionBtn from "./common/ActionBtn";
function Cart() {
    let navigate = useNavigate();
    const userId = localStorage.getItem("uuid");
    const [cartData, setCartData] = useState();
    const [checkoutData, setCheckoutData] = useState();
    const [pending, setPending] = useState(false);
    const [loading, setLoading] = useState(true);

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
                    setCartData(response?.data);
                    setPending(false);
                    setLoading(false);

                }
            })
            .catch((err) => {
                setPending(false);
                setLoading(false);
            });
    };

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
                    navigate(`/checkout`);
                }
            })
            .catch((err) => {
                setPending(false);
                setLoading(false);
            });
    };

    const addToCart = async () => {
        setPending(true);
        let request, variables;
        variables = {
            "user_id": userId,
            "products": [
                {
                    // "product_name": relatedProducts?.product_name,
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
                }
            })
            .catch((err) => {
                setPending(false);
                setLoading(false);
            });
    };

    const deleteCart = async () => {
        setPending(true);
        let request, variables;
        variables = {
            "user_id": userId,
            "products": [
                {
                    // "product_name": relatedProducts?.product_name,
                    "quantity": 1
                }
            ]
        }
        request = getRequestForApi(
            `remove_from_cart`,
            variables,
            methodType.POST
        );
        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    // setRelatedProducts(response?.data);
                    setPending(false);
                    setLoading(false);
                }
            })
            .catch((err) => {
                setPending(false);
                setLoading(false);
            });
    };

    const clearCart = async () => {
        setPending(true);
        let request, variables;
        request = getRequestForApi(
            `delete_cart?user_id=` + userId,
            variables,
            methodType.POST
        );
        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    viewCart();
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
        viewCart();

    }, []);
    return (
        <>
            {loading ? <Spiner /> : null}
            <div className="root">
                <div className='pagecontent list-page'>
                    <div className="cart__wrapper max-box">
                        <div className="cart__data">
                            <table className="cartable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="h1ead">
                                                <h1>Your Cart</h1>
                                                <span className="bold">({cartData?.products?.length ? cartData?.products?.length : 0} items)</span>
                                                <span className="bold ms-3" onClick={(e) => (clearCart())}><button>Clear Cart</button></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="title">Price</div>
                                        </td>
                                        <td>
                                            <div className="title">Quantity</div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colSpan="3">
                                            <div className="std-cart-head">
                                                {/* <div className="icon"><img src="assets/img/freeze-icon.svg" alt=""/></div> */}
                                                {/* <h4>Store in Chiller (0-5 °C)</h4> */}
                                            </div>
                                        </td>
                                    </tr>
                                    {console.log('nishant 12ertyus', cartData ? cartData?.cart_total : "FALSE")
                                    }
                                    {cartData && cartData?.products?.length > 0 ? cartData?.products?.map((element, id) => {

                                        return (<tr>
                                            <td>
                                                <div className="item-data">
                                                    <div className="image">
                                                        <img src={`https://cdn.meatigo.com/${element?.image_url}`} />
                                                    </div>
                                                    <div className="data">
                                                        <div className="item-title">{element?.product_name}</div>
                                                        <div className="item-info">
                                                            {/* <span>Box of 12 eggs</span> */}
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
                                            <td>
                                                <ActionBtn data={element} viewCart={viewCart} source={'Cart_Page'} />
                                                {/* <div className="action-box btn1">
                                                    <div className="item-action">
                                                        <div className="item-cart-num open-state">
                                                            <div className="item-cart-minus">–</div>
                                                            <input type="number" value="1" min="1" max="10" readonly />
                                                            <div className="item-cart-plus">+</div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </td>
                                            <tr>
                                                <td colSpan="3" className="border-td">

                                                </td>
                                            </tr>
                                        </tr>)
                                    }) : null}
                                </tbody>
                            </table>
                        </div>


                        <div className="cart__price__data">
                            <div className="cart__price__head">
                                <h2>Price Details</h2>
                                <div className="text">({cartData?.products?.length ? cartData?.products?.length : 0} items)</div>
                            </div>
                            <div className="cart__price__info">
                                {console.log('mann', cartData)}
                                <div className="flex">
                                    <div className="title">Subtotal</div>
                                    <div className="price"><em>₹</em>{cartData ? cartData?.cart_total : 0}</div>
                                </div>
                                <div className="flex">
                                    <div className="title">Delivery Cost</div>
                                    <div className="price"><em>₹</em>0</div>
                                </div>
                                <div className="flex">
                                    <div className="title">Discount</div>
                                    <div className="price cgreen">- <em>₹</em>0</div>
                                </div>

                                <div className="flex total">
                                    <div className="title">Total</div>
                                    <div className="price"><em>₹</em>{cartData?.cart_total}</div>
                                </div>
                                <Link to="#" className="prd-checkout" onClick={(e) => (checkout())} >proceed to checkout
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

export default Cart