import React from 'react'
import { getRequestForApi } from '../../utility-files/api-caller/CommonRequest';
import { callHttpRequest, methodType } from '../../utility-files/api-caller/HttpRequest';

const ActionBtn = (props) => {
    const { data, viewCart, relatedProducts, source } = props;
    let pageListArr = ['Cart_Page'];
    const userId = localStorage.getItem("uuid");

    console.log(data);


    const incDecQty = async (eventAction, data) => {
        if (eventAction === "inc") {
            addToCart(data);
        } else {
            removeToCart(data);
        }
    }

    const addToCart = async (prodData) => {
        let request, variables;
        variables = {
            "user_id": userId,
            "products": [{
                product_name: prodData?.product_name,
                quantity: 1
            }]
        }

        request = getRequestForApi(
            `add_to_cart`,
            variables,
            methodType.POST
        );

        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    viewCart();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const removeToCart = async (prodData) => {
        let request, variables;
        variables = {
            "user_id": userId,
            "products": [{
                product_name: prodData?.product_name,
                quantity: 1
            }]
        }

        request = getRequestForApi(
            `remove_from_cart`,
            variables,
            methodType.POST
        );

        await callHttpRequest(request)
            .then((response) => {
                if (response?.status === 200 || response?.status === 201) {
                    viewCart();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return <>
        {
            pageListArr.includes(source) ? <>
                <div class="item-action btn1">
                    <div class="item-cart-num">
                        <div class="item-cart-minus" onClick={() => incDecQty('dec', data)} >–</div>
                        <input type="number" value={data?.quantity} min="1" max="99" readonly />
                        <div class="item-cart-plus" onClick={() => incDecQty('inc', data)} >+</div>
                    </div>
                </div>
            </> : <>
                {data && data?.quantity && data?.quantity >= 1 ?
                    <div class="item-action btn1">
                        <div class="item-cart-num">
                            <div class="item-cart-minus" onClick={() => incDecQty('dec', data)} >–</div>
                            <input type="number" value={data?.quantity} min="1" max="99" readonly />
                            <div class="item-cart-plus" onClick={() => incDecQty('inc', data)} >+</div>
                        </div>
                    </div>
                    :
                    <div class="item-action">
                        <div class="add-to-cart" onClick={(e) => (addToCart(data ? data : relatedProducts))}><span>Add</span></div>
                    </div>
                }

            </>
        }
    </>
}

export default ActionBtn