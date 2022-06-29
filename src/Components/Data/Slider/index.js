import React, { useEffect, useState } from "react";

/*  Components  */
import {
    deviceCheck
} from "../../../Components";

export function Slider(props) {
    const {
        items,
        setCurrentItem,
        title
    } = props;

    const [itemsPerRow, setItemsPerRow] = useState(4);
    const [currentRow, setCurrentRow] = useState(1);

    useEffect(() => {
        if (deviceCheck() === "mobile") {
            setItemsPerRow(1);
        } else if (deviceCheck() === "tablet") {
            setItemsPerRow(2);
        }
    }, [])

    const goBack = () => {
        setCurrentRow(currentRow - 1);
    }

    const goForward = () => {
        setCurrentRow(currentRow + 1);
    }

    return (
        <section className="custom-component cat-data slider">
            <div className="section-title">
                { title }
            </div>

            <div className="section-body">
                <div
                    className={`prev-items ${currentRow > 1 ? "" : "hide"}`}
                    onClick={goBack}
                />
                <div className="inner">
                    {items && items?.map((item, index) => {
                        let first = (currentRow * itemsPerRow) - itemsPerRow;
                        let last = currentRow * itemsPerRow - 1;

                        if (index >=  first && index <= last) {
                            return (
                                <div
                                    key={index}
                                    className="item"
                                    onClick={() => setCurrentItem(item)}
                                    style={{
                                        width: `calc(100% / ${itemsPerRow}`,
                                        backgroundImage: `url(${item.image})`
                                    }}
                                />
                            )
                        }
                    })}
                </div>
                <div
                    className={`next-items ${Math.ceil(items?.length / itemsPerRow) === currentRow ? "hide" : ""}`}
                    onClick={goForward}
                />
            </div>
        </section>
    )
}