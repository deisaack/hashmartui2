import React from "react";
import axios from "axios";
import products from "./data/shopProducts";

export default class Services {
    constructor(that) {
        this.that = that;
        this.BASE_URL = "https://hashmart.nyumbapap.com";
        this.AUTH = {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Access-Control-Allow-Origin": "*"
        };
        this.CONFIG = {headers: this.AUTH};
    }

    getProductsMainMenu = productID =>{
        return axios.get(`${this.BASE_URL}/api/v1/hashmart/get-products-main-menue`, this.CONFIG);
    };

    getProduct = e =>{
        return axios.get(`${this.BASE_URL}/api/v1/hashmart/get-products-main-menue`, this.CONFIG);
    };


    fetchProduct = (setProduct, productId) =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-products-main-menue`, this.CONFIG)
            .then(resp=>{
                setProduct({
                    id: productId,
                    name: 'Body Up Padded Wireless Bra',
                    price: 949,
                    compareAtPrice: 1189,
                    images: [
                        'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/o/body_up_padded_wireless_bra.jpg',
                        'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg',
                        'https://i.roamcdn.net/hz/pi/listing-thumb-220w/96168ceef9160d9a4e26d78af5b82e8d/-/hzfiles/pi/picture/q9rjj05/51cb08780b17c96c424e7b0c3a61b2881e2e25e4.jpeg'
                    ],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Elasticity', value: '750 RPM' },
                        { name: 'Origin', value: 'Turkey' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    materials: ["cotton", "wool", "nylon"],
                    options: [],
                    brand: "Wamlambez",
                    sku: "8383IO/ME2",
                    description: "The days of unsupportive strapless bras are over! Shop our strapless bras and convertible bras that will stay put during every move or shake"
                })
            }).catch(err=>{this.__handleCatch(err)});
    };

    getProducts = () =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-products-main-menue`, this.CONFIG).then(resp=>{
            this.that.setState({fetchedProducts: resp.data});
        }).catch(err=>{this.__handleCatch(err)});
    };

    fetchCorousel = () =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`, this.CONFIG).then(resp=>{
            this.that.setState({
                slides: [
                    {
                        title: 'Big choice of<br>Plumbing products',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                        image_classic: {
                            ltr: 'https://hashmart.co.ke/media/wysiwyg/8_1.png',
                            rtl: 'https://hashmart.co.ke/media/wysiwyg/8_1.png',
                        },
                        image_full: {
                            ltr: 'https://hashmart.co.ke/media/wysiwyg/8_1.png',
                            rtl: 'https://hashmart.co.ke/media/wysiwyg/8_1.png',
                        },
                        image_mobile: {
                            ltr: 'https://hashmart.co.ke/media/wysiwyg/8_1.png',
                            rtl: 'https://hashmart.co.ke/media/wysiwyg/8_1.png',
                        },
                    },
                    {
                        title: 'Screwdrivers<br>Professional Tools',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                        image_classic: {
                            ltr: 'https://hashmart.co.ke/media/wysiwyg/headphones-min_1.png',
                            rtl: 'https://hashmart.co.ke/media/wysiwyg/headphones-min_1.png',
                        },
                        image_full: {
                            ltr: 'https://hashmart.co.ke/media/wysiwyg/headphones-min_1.png',
                            rtl: 'https://hashmart.co.ke/media/wysiwyg/headphones-min_1.png',
                        },
                        image_mobile: {
                            ltr: 'https://hashmart.co.ke/media/wysiwyg/headphones-min_1.png',
                            rtl: 'https://hashmart.co.ke/media/wysiwyg/headphones-min_1.png',
                        },
                    },
                ]
            })
        }).catch(err=>{this.__handleCatch(err)})
    };

    fetchShopProducts = (dataSource) =>{
        let url=`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`;
        if (dataSource==="new-arrivals"){
            url=`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`;
        }
        axios.get(url, this.CONFIG).then(resp=>{
            this.that.setState({
                products: [
                    {
                        id: 11,
                        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                        price: 949,
                        compareAtPrice: 1189,
                        images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/o/body_up_padded_wireless_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg'],
                        badges: ['sale'],
                        rating: 3,
                        reviews: 15,
                        availability: 'in-stock',
                        features: [
                            { name: 'Speed', value: '750 RPM' },
                            { name: 'Power Source', value: 'Cordless-Electric' },
                            { name: 'Battery Cell Type', value: 'Lithium' },
                            { name: 'Voltage', value: '20 Volts' },
                            { name: 'Battery Capacity', value: '2 Ah' },
                        ],
                        options: [],
                    },
                    {
                        id: 22,
                        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                        price: 949,
                        compareAtPrice: 1189,
                        images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg'],
                        badges: ['sale'],
                        rating: 3,
                        reviews: 15,
                        availability: 'in-stock',
                        features: [
                            { name: 'Speed', value: '750 RPM' },
                            { name: 'Power Source', value: 'Cordless-Electric' },
                            { name: 'Battery Cell Type', value: 'Lithium' },
                            { name: 'Voltage', value: '20 Volts' },
                            { name: 'Battery Capacity', value: '2 Ah' },
                        ],
                        options: [],
                    },
                    {
                        id: 33,
                        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                        price: 949,
                        compareAtPrice: 1189,
                        images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg', 'images/products/product-4-1.jpg'],
                        badges: ['sale'],
                        rating: 3,
                        reviews: 15,
                        availability: 'in-stock',
                        features: [
                            { name: 'Speed', value: '750 RPM' },
                            { name: 'Power Source', value: 'Cordless-Electric' },
                            { name: 'Battery Cell Type', value: 'Lithium' },
                            { name: 'Voltage', value: '20 Volts' },
                            { name: 'Battery Capacity', value: '2 Ah' },
                        ],
                        options: [],
                    },
                    {
                        id: 111,
                        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                        price: 949,
                        compareAtPrice: 1189,
                        images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg'],
                        badges: ['sale'],
                        rating: 3,
                        reviews: 15,
                        availability: 'in-stock',
                        features: [
                            { name: 'Speed', value: '750 RPM' },
                            { name: 'Power Source', value: 'Cordless-Electric' },
                            { name: 'Battery Cell Type', value: 'Lithium' },
                            { name: 'Voltage', value: '20 Volts' },
                            { name: 'Battery Capacity', value: '2 Ah' },
                        ],
                        options: [],
                    },
                    {
                        id: 222,
                        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                        price: 949,
                        compareAtPrice: 1189,
                        images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg'],
                        badges: ['sale'],
                        rating: 3,
                        reviews: 15,
                        availability: 'in-stock',
                        features: [
                            { name: 'Speed', value: '750 RPM' },
                            { name: 'Power Source', value: 'Cordless-Electric' },
                            { name: 'Battery Cell Type', value: 'Lithium' },
                            { name: 'Voltage', value: '20 Volts' },
                            { name: 'Battery Capacity', value: '2 Ah' },
                        ],
                        options: [],
                    },
                    {
                        id: 333,
                        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                        price: 949,
                        compareAtPrice: 1189,
                        images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                        badges: ['sale'],
                        rating: 3,
                        reviews: 15,
                        availability: 'in-stock',
                        features: [
                            { name: 'Speed', value: '750 RPM' },
                            { name: 'Power Source', value: 'Cordless-Electric' },
                            { name: 'Battery Cell Type', value: 'Lithium' },
                            { name: 'Voltage', value: '20 Volts' },
                            { name: 'Battery Capacity', value: '2 Ah' },
                        ],
                        options: [],
                    },
                    {
                        id: 44,
                        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                        price: 949,
                        compareAtPrice: 1189,
                        images: ['images/products/product-4.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg'],
                        badges: ['sale'],
                        rating: 3,
                        reviews: 15,
                        availability: 'in-stock',
                        features: [
                            { name: 'Speed', value: '750 RPM' },
                            { name: 'Power Source', value: 'Cordless-Electric' },
                            { name: 'Battery Cell Type', value: 'Lithium' },
                            { name: 'Voltage', value: '20 Volts' },
                            { name: 'Battery Capacity', value: '2 Ah' },
                        ],
                        options: [],
                    },
                    {
                        id: 55,
                        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                        price: 949,
                        compareAtPrice: 1189,
                        images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                        badges: ['sale'],
                        rating: 3,
                        reviews: 15,
                        availability: 'in-stock',
                        features: [
                            { name: 'Speed', value: '750 RPM' },
                            { name: 'Power Source', value: 'Cordless-Electric' },
                            { name: 'Battery Cell Type', value: 'Lithium' },
                            { name: 'Voltage', value: '20 Volts' },
                            { name: 'Battery Capacity', value: '2 Ah' },
                        ],
                        options: [],
                    },
                ]
            })
        }).catch(err=>{this.__handleCatch(err)})
    };

    fetchBestSellingProducts = (setProducts) =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`, this.CONFIG).then(resp=>{
            setProducts([
                {
                    id: 11,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/o/body_up_padded_wireless_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 22,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 33,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg', 'images/products/product-4-1.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 111,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 222,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 333,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 44,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['images/products/product-4.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 55,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 111,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/o/body_up_padded_wireless_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 212,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 313,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg', 'images/products/product-4-1.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 1111,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 2122,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 3133,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 414,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['images/products/product-4.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 515,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
            ])
        }).catch(err=>{this.__handleCatch(err)})
    };
    searchProducts = (setProducts, query) =>{
        console.log("search performed", query);
        let products = [
            {
                id: 11,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/o/body_up_padded_wireless_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 22,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 33,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg', 'images/products/product-4-1.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 111,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 222,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 333,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 44,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['images/products/product-4.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 55,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 111,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/o/body_up_padded_wireless_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 212,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 313,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg', 'images/products/product-4-1.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 1111,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 2122,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 3133,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 414,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['images/products/product-4.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
            {
                id: 515,
                name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                price: 949,
                compareAtPrice: 1189,
                images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                badges: ['sale'],
                rating: 3,
                reviews: 15,
                availability: 'in-stock',
                features: [
                    { name: 'Speed', value: '750 RPM' },
                    { name: 'Power Source', value: 'Cordless-Electric' },
                    { name: 'Battery Cell Type', value: 'Lithium' },
                    { name: 'Voltage', value: '20 Volts' },
                    { name: 'Battery Capacity', value: '2 Ah' },
                ],
                options: [],
            },
        ];
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`, this.CONFIG).then(resp=>{
            let count = query.length;
            setProducts([products.splice(count, count+4)])
        }).catch(err=>{this.__handleCatch(err)})
    };

    fetchPosts = (setProducts) =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`, this.CONFIG).then(resp=>{
            this.that.setState({posts: [
                {
                    id: 1,
                    title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
                    image: 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/6/e/6e5e6c1b-ffc7-49e9-800b-d5d1cea39981_1_.jpg',
                    categories: ['Special Offers'],
                    date: 'October 19, 2019',
                },
                {
                    id: 2,
                    title: 'Logic Is The Study Of Reasoning And Argument Part 2',
                    image: 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/p/hp-desktop-monitor-500x500.jpg',
                    categories: ['Latest News'],
                    date: 'September 5, 2019',
                },
                {
                    id: 3,
                    title: 'Some Philosophers Specialize In One Or More Historical Periods',
                    image: 'images/posts/post-3.jpg',
                    categories: ['New Arrivals'],
                    date: 'August 12, 2019',
                },
                {
                    id: 4,
                    title: 'Philosophy That Addresses Topics Such As Goodness',
                    image: 'images/posts/post-4.jpg',
                    categories: ['Special Offers'],
                    date: 'Jule 30, 2019',
                },
                {
                    id: 5,
                    title: 'Germany Was The First Country To Professionalize Philosophy',
                    image: 'images/posts/post-5.jpg',
                    categories: ['New Arrivals'],
                    date: 'June 12, 2019',
                },
                {
                    id: 6,
                    title: 'Logic Is The Study Of Reasoning And Argument Part 1',
                    image: 'images/posts/post-6.jpg',
                    categories: ['Special Offers'],
                    date: 'May 21, 2019',
                },
                {
                    id: 7,
                    title: 'Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense',
                    image: 'images/posts/post-7.jpg',
                    categories: ['Special Offers'],
                    date: 'April 3, 2019',
                },
                {
                    id: 8,
                    title: 'An Advantage Of Digital Circuits When Compared To Analog Circuits',
                    image: 'images/posts/post-8.jpg',
                    categories: ['Latest News'],
                    date: 'Mart 29, 2019',
                }]})
        }).catch(err=>{this.__handleCatch(err)})
    };

    fetchPopularCategories = (setPopularCategories) =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`, this.CONFIG).then(resp=>{

            setPopularCategories([
                {
                    title: 'Power saw Tools',
                    url: '/shop',
                    products: 572,
                    image: 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/m/rm-115.jpeg_1.jpg',
                    subcategories: [
                        { title: 'Screwdrivers', url: '/shop' },
                        { title: 'Milling Cutters', url: '/shop' },
                        { title: 'Sanding Machines', url: '/shop' },
                        { title: 'Wrenches', url: '/shop' },
                        { title: 'Drills', url: '/shop' },
                    ],
                },
                {
                    title: 'Hand Tools',
                    url: '/shop',
                    products: 134,
                    image: 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/n/a/nature_sachet_stone_pouch_car_air_freshener_.jpg',
                    subcategories: [
                        { title: 'Screwdrivers', url: '/shop' },
                        { title: 'Hammers', url: '/shop' },
                        { title: 'Spanners', url: '/shop' },
                        { title: 'Handsaws', url: '/shop' },
                        { title: 'Paint Tools', url: '/shop' },
                    ],
                },
                {
                    title: 'Machine Tools',
                    url: '/shop',
                    products: 301,
                    image: 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/1/-/1-23-1_1_.jpg',
                    subcategories: [
                        { title: 'Lathes', url: '/shop' },
                        { title: 'Milling Machines', url: '/shop' },
                        { title: 'Grinding Machines', url: '/shop' },
                        { title: 'CNC Machines', url: '/shop' },
                        { title: 'Sharpening Machines', url: '/shop' },
                    ],
                },
                {
                    title: 'Power Machinery',
                    url: '/shop',
                    products: 79,
                    image: 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/1/_/1_58__1.jpg',
                    subcategories: [
                        { title: 'Generators', url: '/shop' },
                        { title: 'Compressors', url: '/shop' },
                        { title: 'Winches', url: '/shop' },
                        { title: 'Plasma Cutting', url: '/shop' },
                        { title: 'Electric Motors', url: '/shop' },
                    ],
                },
                {
                    title: 'Measurement',
                    url: '/shop',
                    products: 366,
                    image: 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/1/_/1_60_.jpg',
                    subcategories: [
                        { title: 'Tape Measure', url: '/shop' },
                        { title: 'Theodolites', url: '/shop' },
                        { title: 'Thermal Imagers', url: '/shop' },
                        { title: 'Calipers', url: '/shop' },
                        { title: 'Levels', url: '/shop' },
                    ],
                },
                {
                    title: 'Clothes and PPE',
                    url: '/shop',
                    products: 81,
                    image: 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/1/6/168090-2.jpg',
                    subcategories: [
                        { title: 'Winter Workwear', url: '/shop' },
                        { title: 'Summer Workwear', url: '/shop' },
                        { title: 'Helmets', url: '/shop' },
                        { title: 'Belts and Bags', url: '/shop' },
                        { title: 'Work Shoes', url: '/shop' },
                    ],
                },
            ])
        }).catch(err=>{this.__handleCatch(err)})
    };

    fetchBanner = (setBanner) =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`, this.CONFIG).then(resp=>{
            setBanner({ image: "https://hashmart.co.ke/media/wysiwyg/PHONES-Recovered.png"})
        }).catch(err=>{this.__handleCatch(err)})
    };

    fetchProductColumns = (setColumns) =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`, this.CONFIG).then(resp=>{
            let products =[
                {
                    id: 11,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/o/body_up_padded_wireless_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 22,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 33,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg', 'images/products/product-4-1.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 111,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 222,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 333,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 44,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['images/products/product-4.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 55,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 111,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/o/body_up_padded_wireless_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 212,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/r/a/ray_padded_sports_bra.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 313,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/b/9/b9b20a72-9495-4a4e-8548-91abd82bfbe0.jpg', 'images/products/product-4-1.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 1111,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 2122,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/g/e/genuine_cow_leather_belt.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/a/4/a430fb20-aad7-47fc-9403-066f1e088bea.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 3133,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 414,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['images/products/product-4.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/h/u/huncacare-foot_scrub-green_tea_bamboo.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
                {
                    id: 515,
                    name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
                    price: 949,
                    compareAtPrice: 1189,
                    images: ['https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg', 'https://hashmart.co.ke/media/catalog/product/cache/a0c8242217130500092bca78bd24c27f/s/a/sarma-electrician-saukuchi-guwahati-electricians-wftwh8fbr6.jpg'],
                    badges: ['sale'],
                    rating: 3,
                    reviews: 15,
                    availability: 'in-stock',
                    features: [
                        { name: 'Speed', value: '750 RPM' },
                        { name: 'Power Source', value: 'Cordless-Electric' },
                        { name: 'Battery Cell Type', value: 'Lithium' },
                        { name: 'Voltage', value: '20 Volts' },
                        { name: 'Battery Capacity', value: '2 Ah' },
                    ],
                    options: [],
                },
            ];
            setColumns([
                {
                    title: 'Top Rated Products',
                    products: products.slice(0, 3),
                },
                {
                    title: 'Special Offers',
                    products: products.slice(3, 6),
                },
                {
                    title: 'Bestsellers',
                    products: products.slice(6, 9),
                },
            ])
        }).catch(err=>{this.__handleCatch(err)})
    };

    fetchBrands = (setBrands) =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`, this.CONFIG).then(resp=>{
            setBrands([
                { image: 'https://hashmart.co.ke/media/brand/l/e/lenovo.png' },
                { image: 'https://hashmart.co.ke/media/brand/i/n/infinix.png' },
                { image: 'https://hashmart.co.ke/media/brand/s/a/samsung.png' },
                { image: 'https://hashmart.co.ke/media/brand/a/p/apple_1.png' },
                { image: 'https://hashmart.co.ke/media/brand/d/o/doogee.png' },
                { image: 'https://hashmart.co.ke/media/brand/n/o/nokia.png'},
                { image: 'https://stroyka.react.themeforest.scompiler.ru/themes/red/images/logos/logo-3.png'},
                { image: 'https://hashmart.co.ke/media/brand/o/p/oppo.png' },
            ])
        }).catch(err=>{this.__handleCatch(err)})
    };

    __handleCatch(error) {
        try {
            console.log(error);
            if (error.response) {
                let status = error.response.status;
                let data = error.response.data;
                let errorMessage =
                    "Something went wrong processing your request! Please Try Again!";

                if (status === 428) {
                    this.that.setState({
                        warning: true,
                        isLoading: false,
                        errorMessage: data.message
                    });
                } else if (status === 400) {
                    try {
                        errorMessage = data.errors[0].description;
                    } catch (e) {
                    }
                    this.that.setState({
                        isLoading: false,
                        error: true,
                        errorMessage: errorMessage
                    });
                } else {
                    this.that.setState({
                        isLoading: false,
                        error: true,
                        errorMessage: errorMessage
                    });
                }
                // this.that.funcs.toastError();
                // this.that.funcs.showFailed()
            } else {
                this.that.setState({
                    isLoading: false,
                    error: true,
                    errorMessage: "Something went wrong processing your request"
                });
            }
            setTimeout(() => {
                this.that.setState({
                    error: false,
                    isLoading: false,
                    errorMessage: "",
                    warning: false
                });
            }, 7000);
        }
        catch (TypeError) {
            return
        }
    }

    handleLoggedIn = (resp) => {
        let role = resp.data.roles.result[0];
        localStorage.setItem("authToken", resp.data.token);
        localStorage.setItem("role", role);
        localStorage.setItem("initialTime", Date.now());
        // if (role === "Business") {
        //     this.services.getMyBusinesses()
        // } else if (role === "Admin") {
        window.location.href = "/";
        // }
        // window.Env.refreshTokenInterval();
    };

    doLogin = (data) => {
        this.that.setState({ isLoading: true, alert: null });
        axios
            .post(`${this.BASE_URL}/api/v1/hashmart/login`, data)
            .then(response => {
                if (response.status === 200) {
                    this.handleLoggedIn(response)
                }
            })
            .catch(error => {
                this.setState({ isLoading: false });
                let errors = [...this.state.errors];

                if (error.response === undefined) {
                    errors.push("Oops network error, kindly check your connection!");
                } else {
                    if (error.response.status === 401) {
                        if (error.response.data.isLockedOut === true) {
                            errors.push(
                                "Your Account has been blocked due to many invalid attempts! Kindly contact your administrator for assistance"
                            );
                        } else {
                            errors.push("Incorrect Password!");
                        }
                    } else if (error.response.status === 403) {
                        errors.push(
                            "Your account has been deactivated! Kindly contact the administrator for assistance!"
                        );
                    } else if (error.response.status === 404) {
                        errors.push(error.response.data);
                    } else {
                        errors.push(error.response.data.message);
                    }
                }
                this.setState({ errors });
            });
    };

}

