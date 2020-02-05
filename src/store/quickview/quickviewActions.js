import products from '../../data/shopProducts';
import { QUICKVIEW_CLOSE, QUICKVIEW_OPEN } from './quickviewActionTypes';
import Services from "../../Services";


export function quickviewOpenSuccess(product) {
    return {
        type: QUICKVIEW_OPEN,
        product,
    };
}

export function quickviewClose() {
    return {
        type: QUICKVIEW_CLOSE,
    };
}

export function quickviewOpen(productId) {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            const services = new Services();
            services.getProduct(productId).then(resp=>{
                const product = {
                    id: 11,
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
                };

                if (product) {
                    dispatch(quickviewOpenSuccess(product));
                }

                resolve();
            }).catch(err=>{services.__handleCatch(err)});
        })
    );
}
