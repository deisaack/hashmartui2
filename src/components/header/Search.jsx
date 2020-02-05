// react
import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

// third-party
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

// application
import { Cross20Svg, Search20Svg } from '../../svg';
import Suggestions from './Suggestions';

// data stubs
import products from '../../data/mock';
import Services from "../../Services";


function Search(props) {
    const {
        context,
        className,
        inputRef,
        onClose,
        location,
    } = props;
    // const [products, setProducts] = useState([]);
    const [suggestionsOpen, setSuggestionsOpen] = useState(false);
    const [hasSuggestions, setHasSuggestions] = useState(false);
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [query, setQuery] = useState('');
    const wrapper = useRef(null);
    const close = useCallback(() => {
        if (onClose) {
            onClose();
        }

        setSuggestionsOpen(false);
    }, [onClose]);

    useEffect(() => close(), [close, location]);

    useEffect(() => {
        const onGlobalClick = (event) => {
            if (wrapper.current && !wrapper.current.contains(event.target)) {
                close();
            }
        };

        document.addEventListener('mousedown', onGlobalClick);

        return () => document.removeEventListener('mousedown', onGlobalClick);
    }, [close]);

    useEffect(() => {


        if (query === '') {
            setHasSuggestions(false);

            return undefined;
        }

        // const services = new Services();
        // services.searchProducts(setProducts, query);


        // Use ajax request instead of timeout.

        console.log("Query is", query, query.length);
        const timeout = setTimeout(() => {
            setSuggestedProducts(products.slice(query.length, query.length+4));
            setHasSuggestions(true);
            setSuggestionsOpen(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, [query]);

    const handleFocus = () => {
        setSuggestionsOpen(true);
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleBlur = () => {
        setTimeout(() => {
            if (!document.activeElement || document.activeElement === document.body) {
                return;
            }

            // Close suggestions if the focus received an external element.
            if (wrapper.current && !wrapper.current.contains(document.activeElement)) {
                close();
            }
        }, 10);
    };

    const handleKeyDown = (event) => {
        // Escape.
        if (event.which === 27) {
            close();
        }
    };

    const rootClasses = classNames(`search search--location--${context}`, className, {
        'search--suggestions-open': suggestionsOpen,
        'search--has-suggestions': hasSuggestions,
    });

    const closeButton = context !== 'mobile-header' ? '' : (
        <button className="search__button search__button--type--close" type="button" onClick={close}>
            <Cross20Svg />
        </button>
    );

    return (
        <div className={rootClasses} ref={wrapper} onBlur={handleBlur}>
            <div className="search__body">
                <form className="search__form" action="">
                    <input
                        ref={inputRef}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        value={query}
                        className="search__input"
                        name="search"
                        placeholder="Search over 10,000 products"
                        aria-label="Site search"
                        type="text"
                        autoComplete="off"
                    />
                    <button className="search__button search__button--type--submit" type="submit">
                        <Search20Svg />
                    </button>
                    {closeButton}
                    <div className="search__border" />
                </form>

                <Suggestions className="search__suggestions" context={context} products={suggestedProducts} />
            </div>
        </div>
    );
}

export default withRouter(Search);
