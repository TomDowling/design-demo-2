import { useEffect } from "react";

export function HighlightedItem(props) {
    const {
        currentItem
    } = props;

    return (
        <section
            className="custom-component cat-data highlighted-item"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(13, 13, 13, 1)), url(${currentItem?.image})`
            }}
        >
            <div className="container">
                <div className="item-title">
                    { currentItem?.name }
                </div>
                <div className="item-desc">
                    consectetur adipiscing elit. Diam quis maecenas fermentum mattis eget lacus. Turpis urna nunc odio vel. Pharetra scelerisque turpis  
                </div>
                <div className="btn btn-primary">Watch Now</div>
            </div>
        </section>
    )
}