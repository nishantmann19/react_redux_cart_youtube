import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ImgMediaCard({ data }) {
    return (
        <>
            {data?.products?.map((product, index) => (
                <Card sx={{ display: 'flex', marginTop: '10px' }} key={`products__${index}_${data.type}`}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <img src={`https://cdn.meatigo.com/${product?.image_url}`} height='132' />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Link to={`/product/${product.product_name}`}>{product.product_name}</Link>
                            <div style={{ marginTop: '5px', color: '#6a6565' }}>
                                {product.product_info.description}<br />
                            </div>
                            {((data?.products.length - 1) === (index)) && <div>
                                <hr />
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "35%" }}>Product Name</th>
                                            <th>Product Price</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.products?.map((data, index) => (
                                            <tr key={`products_data_${index}_${data.quantity}`}>
                                                <td>{data.product_name}</td>
                                                <td>₹{data.price}</td>
                                                <td>{data.quantity}</td>
                                                <td>₹{data.total_price}</td>
                                            </tr>))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th style={{ textAlign: "right" }} id="total" colSpan="3">Total :</th>
                                            <td>₹{data.cart_total} </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>}
                        </CardContent>
                    </Box>
                </Card>
            ))}
        </>
    );
}
