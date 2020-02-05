// react
import React, {useEffect, useState} from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// blocks
import BlockBanner from '../blocks/BlockBanner';
import BlockBrands from '../blocks/BlockBrands';
import BlockCategories from '../blocks/BlockCategories';
import BlockFeatures from '../blocks/BlockFeatures';
import BlockPosts from '../blocks/BlockPosts';
import BlockProductColumns from '../blocks/BlockProductColumns';
import BlockProducts from '../blocks/BlockProducts';
import BlockSlideShow from '../blocks/BlockSlideShow';
import BlockTabbedProductsCarousel from '../blocks/BlockTabbedProductsCarousel';

// data stubs
import posts from '../../data/blogPosts';
import theme from '../../data/theme';


function HomePageOne() {

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Home — ${theme.name}`}</title>
            </Helmet>

            <BlockSlideShow withDepartments withSidebar />

            <BlockFeatures />

            <BlockTabbedProductsCarousel title="Featured Products" dataSource="featured-products" layout="grid-4" />

            <BlockBanner />

            <BlockProducts
                title="Bestsellers"
                layout="large-first"
            />

            <BlockCategories title="Popular Categories" layout="classic" />

            <BlockTabbedProductsCarousel title="New Arrivals" layout="horizontal" dataSource="new-arrivals" rows={2} />

            <BlockPosts title="Latest News" posts={posts}  />

            <BlockBrands />

            <BlockProductColumns />
        </React.Fragment>
    );
}

export default HomePageOne;
