import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

export default function ImgMediaCard({ data, message }) {
    return (
        <>
            <Card sx={{ display: 'flex', marginTop: '10px' }} >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {message && <>
                        <div
                            className="bot"
                            dangerouslySetInnerHTML={{ __html: message }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                flexWrap: "wrap",
                                paddingLeft: '5px',
                                margin: "8px 8px 8px 8px"
                            }}
                        />
                        <div style={{ padding: '16px', marginTop: '-25px', marginBottom: '-20px' }}>
                            <hr />
                        </div>
                    </>}
                    {data?.api_endpoint === "/checkout" && <div style={{ padding: '16px', fontWeight: 'bold', fontSize: '14px', marginBottom: '-20px' }}>
                        Would you like to confirm your order or add other items?<br />
                        Checkout:
                    </div>}
                    {data?.api_endpoint === "/place_order" && <div style={{ padding: '16px', fontWeight: 'bold', fontSize: '14px', marginBottom: '-20px' }}>
                        Your order has been placed successfully.<br />
                        Order Summary:
                    </div>}
                    {data?.products?.map((product, index) => (<>
                        <img src={`https://cdn.meatigo.com/${product?.image_url}`} style={{ padding: '10px' }} height='132' />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Link to={`/product/${product.product_name}`}>{product.product_name}</Link>
                            <div style={{ marginTop: '5px', color: '#6a6565' }}>
                                {product.product_info.description}<br />
                            </div>
                            {((data?.products.length - 1) === (index)) && <div>
                                <hr />
                                <table id='bot'>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "35%" }}>Product Name</th>
                                            <th>Product Price</th>
                                            <th>Qty.</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.products?.map((data, index) => (
                                            <tr key={`products_data_${index}_${data.quantity}`}>
                                                <td> <Link to={`/product/${data.product_name}`} style={{ fontWeight: '100' }}>{data.product_name}</Link></td>
                                                <td>₹{data.price}</td>
                                                <td>{data.quantity}</td>
                                                <td>₹{data.total_price}</td>
                                            </tr>))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th style={{ textAlign: "right" }} id="total" colSpan="3">Grand Total :</th>
                                            <td>₹{data.cart_total} </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>}
                        </CardContent>
                        {((data?.products.length - 1) !== (index)) && <div style={{ padding: '16px', marginTop: '-25px', marginBottom: '-20px' }}>
                            <hr />
                        </div>}
                    </>))}
                </Box>
            </Card>
        </>
    );
}
