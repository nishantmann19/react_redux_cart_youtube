import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import Cards from '../components/Cards';
import { callHttpRequest, methodType } from '../utility-files/api-caller/HttpRequest';
import { getRequestForApi } from '../utility-files/api-caller/CommonRequest';
import { isIntegerValue } from '../utility-files/data-util/DataHandler';
import RecommendSection from '../components/common/recommend-section';
import Footer from '../Footer/fotter';

const ProductImage = styled(CardMedia)({
    maxWidth: '100%',
});
const Root = styled(Container)({
    padding: '20px',
});

const Price = styled(Typography)({
    margin: '10px 0',
});

const ProductDetails = () => {
    const param = useParams();
    const Id = param.id;
    console.log("id", Id);
    const [list, setList] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [pending, setPending] = useState(false);
    const itemId = isIntegerValue(Id)
    const getProductList = async () => {
        setPending(true);
        try {
            const request = getRequestForApi(
                `https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=related_products&itemId=${Id}`,
                null,
                methodType.GET
            );

            const response = await callHttpRequest(request);
            console.log("API Response:", response);

            if (response?.status === 200 || response?.status === 201) {
                setList(response?.data|| []);
            }
        } catch (err) {
            console.error("Error fetching product list:", err);
        } finally {
            setPending(false);
        }
    };

    const getFreList = async () => {
        setPending(true);
        try {
            const request = getRequestForApi(
                `https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=freq_bought&itemId=${Id}`,
                null,
                methodType.GET
            );

            const response = await callHttpRequest(request);
            console.log("API Response:", response);

            if (response?.status === 200 || response?.status === 201) {
                setListProduct(response?.data || []);
            }
        } catch (err) {
            console.error("Error fetching product list:", err);
        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        getProductList();
        getFreList();

    }, []);

        const storedProduct = localStorage.getItem('selectedProduct');
        const parsedProduct = JSON.parse(storedProduct);
        console.log("parsedProduct",parsedProduct)
   
    return (
        <>
            <Container>
                <Box sx={{ display: 'flex', padding: 6 }}>
                    <Box sx={{ flexShrink: 0, mr: 4 }}>
                        <ProductImage
                            component="img"
                            height="400px"
                            image={`https://cdn.meatigo.co.in/${parsedProduct.productImg}`}
                            alt={parsedProduct.catName}
                            sx={{
                                width: '800px',
                                borderRadius: 4,
                                boxShadow: 3,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ color: '#fdb001', fontSize: 50, fontWeight: 30, pd: 5 }}>{parsedProduct.catName}</Typography>
                        <Typography sx={{ color: 'black', fontSize: 20, fontWeight: 30, pd: 5 }}>{parsedProduct.productWeight}</Typography>
                        <Typography sx={{ color: 'black', fontSize: 40, fontWeight: 30, pd: 5 }}>₹{parsedProduct.productPrice}</Typography>
                        <Box sx={{ marginBottom: 4 }}>
                            <List>
                                <ListItem>
                                    <ListItemText sx={{ color: 'black', fontSize: 60 }} primary={parsedProduct.productShortDesc} />
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
            {listProduct?.recommendations && <RecommendSection title="Frequently bought together" urlToRedirect="/allproducts/Frequently/" listData={listProduct?.recommendations} />}
            {list?.recommendations && <RecommendSection title="Related products" urlToRedirect="/allproducts/related_product/" listData={list?.recommendations} />}
            </Container>
            <Footer />

        </>
    );
};

export default ProductDetails;
