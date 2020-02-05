// react
import React, { Component } from 'react';

// third-party
import PropTypes from 'prop-types';


// data stubs
import BlockProductsCarousel from './BlockProductsCarousel';
import Services from "../../Services";
import Funcs from "../../Funcs";


export default class BlockTabbedProductsCarousel extends Component {
    timeout;

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            loading: false,
            groups: [
                { id: 1, name: 'All', current: true },
                { id: 2, name: 'Power Tools', current: false },
                { id: 3, name: 'Hand Tools', current: false },
                { id: 4, name: 'Plumbing', current: false },
            ],
            dataSource: this.props.dataSource
        };

        this.services = new Services(this);
        this.funcs = new Funcs(this);
    }

    componentDidMount() {
        let {dataSource} = this.props;
        this.services.fetchShopProducts(dataSource)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleChangeGroup = (newCurrentGroup) => {
        clearTimeout(this.timeout);

        const { groups } = this.state;
        const currentGroup = groups.find((group) => group.current);

        if (currentGroup && currentGroup.id === newCurrentGroup.id) {
            return;
        }

        this.setState((state) => (
            {
                loading: true,
                groups: state.groups.map((group) => (
                    { ...group, current: group.id === newCurrentGroup.id }
                )),
            }
        ));

        // sending request to server, timeout is used as a stub
        this.timeout = setTimeout(() => {
            this.setState((state) => {
                // this is only for demo purpose
                const itemsArray = state.products.slice();
                const newItemsArray = [];
                while (itemsArray.length > 0) {
                    const randomIndex = Math.floor(Math.random() * itemsArray.length);
                    const randomItem = itemsArray.splice(randomIndex, 1)[0];
                    newItemsArray.push(randomItem);
                }

                return {
                    products: newItemsArray,
                    loading: false,
                };
            });
        }, 2000);
    };

    render() {
        return (
            <BlockProductsCarousel
                {...this.props}
                {...this.state}
                onGroupClick={this.handleChangeGroup}
            />
        );
    }
}

BlockTabbedProductsCarousel.propTypes = {
    title: PropTypes.string.isRequired,
    dataSource: PropTypes.oneOf(['new-arrivals', 'featured-products']),
    layout: PropTypes.oneOf(['grid-4', 'grid-4-sm', 'grid-5', 'horizontal']),
    rows: PropTypes.number,
    withSidebar: PropTypes.bool,
};

BlockTabbedProductsCarousel.defaultProps = {
    layout: 'grid-4',
    rows: 1,
    withSidebar: false,
};
