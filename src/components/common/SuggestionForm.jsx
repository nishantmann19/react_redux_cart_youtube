import React, { useState } from 'react';
import { Box, Button, Select, MenuItem, FormControl, InputLabel, Typography, TextField } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const categoryOptions = [
    'Kebabs', 'Momos', 'Pork', 'Chicken', 'Mutton', 'Bacon', 'Seafood', 'Salami', 'Eggs & More',
    'Deli Meat', 'Quick Treats', 'Fresh Cheese', 'Imported Cheese', 'Ham', 'Veggie Treat',
    'Burger', 'Marinades', 'Bao Buns', 'Fresh Sausages', 'Raw Sausages', 'Raw Cuts',
    'Gourmet Box Edit', 'Sauces & Pickles'
];

const nutritionalOptions = [
    'Protein', 'Carbohydrates', 'Total Sugar', 'Total Fat', 'Saturated Fat', 'Cholesterol', 'Sodium'
];

const temperatureOptions = [
    '0°C-4°C', 'below -18°C'
];

function SuggestionForm({ handleSend, handleBack }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedNutritionalFactor, setSelectedNutritionalFactor] = useState('');
    const [selectedTemperature, setSelectedTemperature] = useState('');
    const [price, setPrice] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let prompt = `Suggest me products from category ${selectedCategory}`;
        if (price) {
            prompt += ` priced ${price}`;
        };

        if (selectedNutritionalFactor) {
            prompt += ` that contains ${selectedNutritionalFactor}`;
        };
        if (selectedTemperature) {
            prompt += ` and stored at ${selectedTemperature}`;
        };

        handleSend(prompt);
        setTimeout(() => {
            setSelectedCategory("");
            setSelectedNutritionalFactor("");
            setSelectedTemperature("");
            setPrice("");
            handleBack();
        }, 100);
    };

    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: 2,
                overflowY: "auto",
            }}
        >
            <Typography variant="h6" component="h1" gutterBottom>
                Custom Suggestion
            </Typography>

            <form onSubmit={handleFormSubmit} style={{ marginBottom: '16px' }}>
                <Box mb={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                        <InputLabel id="category-select-label">Select Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            label="Select Category"
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        maxHeight: 250,
                                    },
                                },
                            }}
                        >
                            {categoryOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box mb={2}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price..."
                    />
                </Box>

                <Box mb={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                        <InputLabel id="nutrition-select-label">Select Nutritional Factor</InputLabel>
                        <Select
                            labelId="nutrition-select-label"
                            value={selectedNutritionalFactor}
                            onChange={(e) => setSelectedNutritionalFactor(e.target.value)}
                            label="Select Nutritional Factor"
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        maxHeight: 250,
                                    },
                                },
                            }}
                        >
                            {nutritionalOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box mb={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                        <InputLabel id="temperature-select-label">Select Storage Temperature</InputLabel>
                        <Select
                            labelId="temperature-select-label"
                            value={selectedTemperature}
                            onChange={(e) => setSelectedTemperature(e.target.value)}
                            label="Select Storage Temperature"
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        maxHeight: 250,
                                    },
                                },
                            }}
                        >
                            {temperatureOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Button
                        color="warning"
                        variant="contained"
                        sx={{
                            mt: 1,
                            mr: 1,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            backgroundColor: 'warning.light',
                            transition: 'background-color 0.3s, transform 0.3s',
                            '&:hover': {
                                backgroundColor: 'warning.light',
                                transform: 'scale(1.05)',
                                color: '#fff'
                            },
                        }}
                        onClick={handleBack}
                    >
                        <ArrowBackIcon />&nbsp;
                        Back
                    </Button>

                    <Button
                        type="submit"
                        color="warning"
                        variant="contained"
                        sx={{
                            mt: 1,
                            mr: 1,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            backgroundColor: 'warning.light',
                            transition: 'background-color 0.3s, transform 0.3s',
                            '&:hover': {
                                backgroundColor: 'warning.light',
                                transform: 'scale(1.05)',
                                color: '#fff'
                            },
                        }}
                        disabled={!selectedCategory}
                    >
                        Send &nbsp;
                        <SendIcon />
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

export default SuggestionForm;
