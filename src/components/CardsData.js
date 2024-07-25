import { Details } from "@mui/icons-material";
import { IMAGE_TYPES } from "../../src/defaultImage/imges";

const sneakers = [
    {
        id: 1,
        name: 'STREAKY BACON',
        price: 657,
        image: IMAGE_TYPES.PRODUCT_1,
        rating: 4.5,
        sizes: ['S', 'M', 'L', 'XL'],
        deliveryOptions: [
            'Free delivery on orders over $50',
            'Standard delivery (3-5 Hours)',
            'Express delivery (1-2 Hours)',
        ],
        bestOffers: [
            '10% off on your first purchase',
            'Buy 1 get 1 free on select items',
        ],
        productDetails: [
            "Farm fresh veggies tossed in a spicy sauce encased in a fluffy, cloud like veggie bao, it doesn't get any better than this! Enjoy as a snack or meal, depending on how hungry you are!"
        ],
        customerReviews: [
            { name: 'John Doe', rating: 5, comment: 'Great Product and Tasty ' },
            { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
        ],
    },
    {
        id: 2,
        name: 'PORK MINE',
        price: 300,
        image: IMAGE_TYPES.PRODUCT_12,
        rating: 4.5,
        kg: ['1', '2'],
        deliveryOptions: [
            'Free delivery on orders over $50',
            'Standard delivery (3-5 days)',
            'Express delivery (1-2 days)',
        ],
        bestOffers: [
            '10% off on your first purchase',
            'Buy 1 get 1 free on select items',
        ],
        productDetails: [
            'Juicy and delicious mince- perfect for crafting your own meatballs, burgers & everything else!',
        ],
        customerReviews: [
            { name: 'John Doe', rating: 5, comment: 'Great jacket, very stylish!' },
            { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
        ],
    },
    {
        id: 3,
        name: 'PORK BELLY CUBES',
        price: 450,
        image: IMAGE_TYPES.PRODUCT_13,
        rating: 4.5,
        sizes: ['S', 'M', 'L', 'XL'],
        deliveryOptions: [
            'Free delivery on orders over $50',
            'Standard delivery (3-5 days)',
            'Express delivery (1-2 days)',
        ],
        bestOffers: [
            '10% off on your first purchase',
            'Buy 1 get 1 free on select items',
        ],
        productDetails: [
            "Pork Belly Cubes are celebrated for their rich, Meaty flavour and melt-in-the-mouth characteristic. Our Imported Pork Belly Cubes are no exception. Crafted from premium Pork sourced from Belgium, these Pork Belly Cubes are cut in-house and are ready to use straight out of the pack. You can use these cubes in your curries, stir-fries, biryani & more. With our Imported Pork Belly Cubes, you can effortlessly cook dishes that are sure to impress.",
        ],
        customerReviews: [
            { name: 'John Doe', rating: 5, comment: 'Great jacket, very stylish!' },
            { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
        ],
    },
    {
        id: 4,
        name: 'EVERYDAY FISH FILLET',
        price: 550,
        image: IMAGE_TYPES.PRODUCT_14,
        rating: 4.5,
        sizes: ['S', 'M', 'L', 'XL'],
        deliveryOptions: [
            'Free delivery on orders over $50',
            'Standard delivery (3-5 days)',
            'Express delivery (1-2 days)',
        ],
        bestOffers: [
            '10% off on your first purchase',
            'Buy 1 get 1 free on select items',
        ],
        productDetails: [
            'Our Everyday Fish Fillet takes the guesswork out of cooking, ensuring a fuss-free and delicious meal in minutes. Known for its mild flavour and flaky tender texture, our responsibly sourced Indian Basa provides the perfect canvas for our exceptional Everyday Fish Fillet marinade. From weekday dinners to weekend gatherings, this is an ideal dish for any occasion.',
        ],
        customerReviews: [
            { name: 'John Doe', rating: 5, comment: 'Great jacket, very stylish!' },
            { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
        ],
    },
    {
        id: 5,
        name: 'TUNA SASHIMI',
        price: 350,
        image: IMAGE_TYPES.PRODUCT_15,
        rating: 4.5,
        sizes: ['S', 'M', 'L', 'XL'],
        deliveryOptions: [
            'Free delivery on orders over $50',
            'Standard delivery (3-5 days)',
            'Express delivery (1-2 days)',
        ],
        bestOffers: [
            '10% off on your first purchase',
            'Buy 1 get 1 free on select items',
        ],
        productDetails: [
           'Caught sustainably from deep waters, our Tuna Center Cut Loin boasts a texture thats tender and robust. Its firm flesh promises a delightful bite, while the rich taste hints at the ocean s depth. With its rich, buttery flavour, this Tuna Cut is a game-changer for any seafood enthusiast. This is a rare find not easily available in the market',
        ],
        customerReviews: [
            { name: 'John Doe', rating: 5, comment: 'Great jacket, very stylish!' },
            { name: 'Jane Smith', rating: 4, comment: 'Good quality but a bit expensive.' },
        ],
    },
];


const basketballShoes = [
    { id: 6, name: 'PORK BELLY CUBES', price: 500,productDetails:["Pork Belly Cubes are celebrated for their rich, Meaty flavour and melt-in-the-mouth characteristic. Our Imported Pork Belly Cubes are no exception. Crafted from premium Pork sourced from Belgium, these Pork Belly Cubes are cut in-house and are ready to use straight out of the pack. You can use these cubes in your curries, stir-fries, biryani & more. With our Imported Pork Belly Cubes, you can effortlessly cook dishes that are sure to impress.",] ,image: IMAGE_TYPES.PRODUCT_13 },
    { id: 7, name: 'CHICKEN STEAK', price: 400,productDetails:[
'An in-house favourite, get an expertly cut steak crafted from a farm-raised Chicken Leg thats extra juicy and tender.'
        
    ], image: IMAGE_TYPES.PRODUCT_4 },
    { id: 8, name: 'MUTTON BURRA CHOPS', price: 280, productDetails:[" Seasoned with classic spices, our succulent, smoky Lamb Chops are ready to find a home in your fridge and your heart. These chops are juicy and flavorful, and they'll leave you wanting more."],image: IMAGE_TYPES.PRODUCT_5 },
    { id: 9, name: 'INDIAN BASS FILLET', price: 600,productDetails:["A lovely, luxurious Indian Basa Fillet that is absolutely ideal for bakes or lightly pan-fried in sauce or batter of your choice."], image: IMAGE_TYPES.PRODUCT_7 },
    { id: 10, name: 'MUTTON SOUP', price: 700, productDetails: ['Looking to add a flavour bomb to anything and everything? This is the cut for you. Make rich stock that can be used in an array of dishes. Our Mutton Soup Bones are perfect for creating rich, flavourful broths that are full of nutrients and vitamins. Whether you are looking to make a hearty soup or a nourishing bone broth, our Mutton Soup Bones are the perfect choice for adding depth and complexity to your dishes.'] ,image: IMAGE_TYPES.PRODUCT_6 },
];

const casualShoes = [
    { id: 11, name: 'EGGS', price: 250,productDetails:["Free range eggs are produced by pasture-raised hens, these eggs are 100% antibiotic free which means delicious, natural eggs as they ought to be"], image: IMAGE_TYPES.PRODUCT_8 },
    { id: 12, name: 'VEG ROLL', price: 450,productDetails:["Our Veg Pizza Bao Buns promise to hit the spot every single time, made with farm-fresh veggies and premium cheese, these beauties are an absolute delight!"], image: IMAGE_TYPES.PRODUCT_17 },
    { id: 13, name: 'CHICKEN', price: 350,productDetails:["Premium Boneless Chicken Breasts that are unbelievably juicy, succulent and extra lean. These beauties are expertly cut in-house and are made from farm-raised antibiotic & hormone-free meat."], image: IMAGE_TYPES.PRODUCT_2 },
    { id: 14, name: 'PREMIUM MUTTON CURRY',productDetails:["Our Premium Mutton Curry Cut is sourced from the best farms, cleaned and expertly cut in-house which us why you can count on consistent quality that you can trust. Our Mutton Curry Cut is perfect for seasoned chefs and home chefs alike. Do justice to your recipes with the best quality meat you can find!"], price: 700, image: IMAGE_TYPES.PRODUCT_11 },
];

export {
    sneakers,
    basketballShoes,
    casualShoes,
};
