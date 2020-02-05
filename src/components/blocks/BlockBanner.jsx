// react
import React, {useEffect, useState} from 'react';

// third-party
import { Link } from 'react-router-dom';
import Services from "../../Services";


export default function BlockBanner() {

    const [banner, setBanner] = useState({image: ""});
    useEffect(() => {
        const services = new Services(this);
        services.fetchBanner(setBanner)
    }, []);

    return (
        <div className="block block-banner">
            <div className="container">
                <Link to="/" className="block-banner__body">
                    <div
                        className="block-banner__image block-banner__image--desktop"
                        style={{ backgroundImage: `url(${banner.image})` }}
                    />
                    <div
                        className="block-banner__image block-banner__image--mobile"
                        style={{ backgroundImage: `url(${banner})` }}
                    />
                    <div className="block-banner__title">
                        Hundreds
                        <br className="block-banner__mobile-br" />
                        Hand Tools
                    </div>
                    <div className="block-banner__text">
                        Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws
                    </div>
                    <div className="block-banner__button">
                        <span className="btn btn-sm btn-primary">Shop Now</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
