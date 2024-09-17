import React from "react";
import { getRequestForApi } from "../../utility-files/api-caller/CommonRequest";
import {
    callHttpRequest,
    methodType,
} from "../../utility-files/api-caller/HttpRequest";

const ActionBtn = (props) => {
    const { data, viewCart, relatedProducts, setHandlerRecommedQty, source } = props;
    const userId = localStorage.getItem("uuid");


    const incDecQty = async (eventAction, data) => {
        console.log("moye ", data);
        if (eventAction === "inc") {
            addToCart(data);
        } else {
            removeToCart(data);
        }
    };

    const addToCart = async (prodData) => {
        if (source == "Recommend_Section_Page") {
            setHandlerRecommedQty(prodData, 'ADD');
        }
        let request, variables;
        variables = {
            user_id: userId,
            products: [
                {
                    product_name: prodData?.product_name,
                    quantity: 1,
                },
            ],
        };

        request = getRequestForApi(`add_to_cart`, variables, methodType.POST);

        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    if (source != 'Recommend_Section_Page') viewCart();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const removeToCart = async (prodData) => {
        if (source == "Recommend_Section_Page") {
            setHandlerRecommedQty(prodData, "REMOVE");
        }
        let request, variables;
        variables = {
            user_id: userId,
            products: [
                {
                    product_name: prodData?.product_name,
                    quantity: 1,
                },
            ],
        };

        request = getRequestForApi(`remove_from_cart`, variables, methodType.POST);

        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    if (source != 'Recommend_Section_Page') viewCart();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {source === "Cart_Page" ? (
                <>
                    <div className="item-action btn1 ">
                        <div className="item-cart-num ">
                            <div
                                className="item-cart-minus"
                                onClick={() => incDecQty("dec", data)}
                            >
                                –
                            </div>
                            <input
                                type="number"
                                value={data?.quantity}
                                min="1"
                                max="99"
                                readonly
                            />
                            <div
                                className="item-cart-plus"
                                onClick={() => incDecQty("inc", data)}
                            >
                                +
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {data && data?.quantity && data?.quantity > 0 ? (
                        <div className="item-action btn1 actionButton1">
                            <div className="item-cart-num">
                                <div
                                    className="item-cart-minus"
                                    onClick={() => incDecQty("dec", data)}
                                >
                                    –
                                </div>
                                <input
                                    type="number"
                                    value={data?.quantity}
                                    min="1"
                                    max="99"
                                    readonly
                                />
                                <div
                                    className="item-cart-plus"
                                    onClick={() => incDecQty("inc", data)}
                                >
                                    +
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="item-action">
                            <div
                                className="add-to-cart "
                                onClick={(e) => addToCart(data ? data : relatedProducts)}
                            >
                                <span className="actionButton">Add</span>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default ActionBtn;
