import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Grid, Typography, Button, Card, CardContent, CardMedia, Chip, Box, Select, MenuItem, FormControl, InputLabel, List, ListItem, ListItemText, Rating, TextField } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/material/styles';
import Cards from '../components/Cards';
import { callHttpRequest, methodType } from '../utility-files/api-caller/HttpRequest';
import { getRequestForApi } from '../utility-files/api-caller/CommonRequest';


const ProductImage = styled(CardMedia)({
    maxWidth: '100%',
});
const Root = styled(Container)({
    padding: '20px',
});


const Price = styled(Typography)({
    margin: '10px 0',
});

const Colors = styled(Box)({
    display: 'flex',
    marginTop: '10px',
});

const ColorChip = styled(Chip)({
    marginRight: '10px',
    cursor: 'pointer',
});

const ProductDetails = () => {
    const param = useParams();
    const id = param?.id;
    const [list, setList] = useState()
    const [pending, setPending] = useState(false)
    const getProductList = async () => {
        setPending(true);
        try {
          const request = getRequestForApi(
            `https://yqis715gn2.execute-api.ap-northeast-1.amazonaws.com/dev/recommendations?userId=135&recommenderKey=rec_fyp&paramId=${param?.id}`, 
            null, 
            methodType.GET
          );
    
          const response = await callHttpRequest(request);
    
          if (response?.status === 200 || response?.status === 201) {
            setList(response?.data?.recommendations || []);
          }
        } catch (err) {
          console.error("Error fetching product list:", err);
        } finally {
          setPending(false);
        }
      };
    
      useEffect(() => {
        getProductList();
      }, [param]);
    
      const product = list?.recommendations.find((p) => p.productId === parseInt(id));
    
      console.log("product", product);
    
      if (pending) {
        return <div>Loading...</div>;
      }
    
      if (!product) {
        return <div>Product not found</div>;
      }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    // if (!product) {
    //     return <Typography variant="h6">Product not found</Typography>;
    // }

    return (
        <>
            <Container>
                <Box sx={{ display: 'flex', padding: 6 }}>
                    <Box sx={{ flexShrink: 0, mr: 4 }}>
                        <ProductImage
                            component="img"
                            height="800px"
                            image={`https://cdn.meatigo.co.in/${list?.recommendations.productImg}`}
                            alt={list?.recommendations.catName}
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
                        <Typography sx={{ color: '#fdb001', fontSize: 50, fontWeight: 30, pd: 5 }}>{list?.recommendations.catName}</Typography >
                        <Typography sx={{ color: 'black', fontSize: 40, fontWeight: 30, pd: 5 }} >₹{list?.recommendations.productPrice}</Typography >
                        <Box sx={{ marginBottom: 4 }}>
                            <List>
                                <ListItem>
                                    <ListItemText sx={{ color: 'black', fontSize: 60, }} primary={list?.recommendations.productShortDesc} />
                                </ListItem>
                            </List>
                        </Box>

                    </Box>
                </Box>
            </Container>
            <Cards />
        </>
    );
};

export default ProductDetails;
