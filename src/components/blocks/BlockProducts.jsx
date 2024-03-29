// react
import React, {useEffect, useState} from 'react';

// third-party
import PropTypes from 'prop-types';

// application
import BlockHeader from '../shared/BlockHeader';
import ProductCard from '../shared/ProductCard';
import Services from "../../Services";


export default function BlockProducts(props) {
    const {
        title,
        layout,
    } = props;

    const services = new Services(this);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        services.fetchBestSellingProducts(setProducts);
    }, []);

    let large, smalls;

    if (products.length > 0) {
        large = (
            <div className="block-products__featured">
                <div className="block-products__featured-item">
                    <ProductCard product={products[0]} />
                </div>
            </div>
        );
        const productsList = products.slice(1, 7).map((product, index) => (
            <div key={index} className="block-products__list-item">
                <ProductCard product={product} />
            </div>
        ));

        smalls = (
            <div className="block-products__list">
                {productsList}
            </div>
        );
    }

    return (
        <div className={`block block-products block-products--layout--${layout}`}>
            <div className="container">
                <BlockHeader title={title} />

                <div className="block-products__body">
                    {layout === 'large-first' && large}
                    {smalls}
                    {layout === 'large-last' && large}
                </div>
            </div>
        </div>
    );
}

BlockProducts.propTypes = {
    title: PropTypes.string.isRequired,
    // featuredProduct: PropTypes.object.isRequired,
    // products: PropTypes.array,
    layout: PropTypes.oneOf(['large-first', 'large-last']),
};

BlockProducts.defaultProps = {
    products: [],
    layout: 'large-first',
};
