import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Grid, Typography, Button, Card, CardContent, CardMedia, Chip, Box, Select, MenuItem, FormControl, InputLabel, List, ListItem, ListItemText, Rating, TextField } from '@mui/material';
import { sneakers, basketballShoes, casualShoes } from '../components/CardsData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/material/styles';
import { Stack } from 'react-bootstrap';
import Cards from '../components/Cards';


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
    const [data, setData] = useState(sneakers);
    const { id } = useParams();
    const product = sneakers.find((p) => p.id === parseInt(id));

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

    if (!product) {
        return <Typography variant="h6">Product not found</Typography>;
    }

    return (
        <>
        <Container>
            <Box sx={{ display: 'flex', padding: 6 }}>
                <Box sx={{ flexShrink: 0, mr: 4 }}>
                    <ProductImage
                        component="img"
                        height="800px"
                        image={product.image}
                        alt={product.name}
                        sx={{ width: '800px',
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
                <Box sx={{ flex: 1}}>
                    <Typography sx={{color:'#fdb001', fontSize:50, fontWeight:30,pd:5 }}>{product.name}</Typography >
                    <Typography sx={{color:'black', fontSize:40, fontWeight:30,pd:5 }} >₹{product.price}</Typography >
                    <Box sx={{ marginBottom: 4 }}>
                        <List>
                            {product.productDetails.map((detail, index) => (
                                <ListItem key={index}>
                                    <ListItemText  sx= {{ color:'black', fontSize:60,}}primary={detail} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{ marginBottom: 4 }}>
                        <Typography variant="h5" sx={{ marginBottom: 2 }}>Delivery Options</Typography>
                        <List>
                            {product.deliveryOptions.map((option, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={option} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{ marginBottom: 4 }}>
                        <Typography variant="h5" sx={{ marginBottom: 2 }}>Best Offers</Typography>
                        <List>
                            {product.bestOffers.map((offer, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={offer} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </Container>
           
            <Cards/>
        </>
    );
};

export default ProductDetails;
