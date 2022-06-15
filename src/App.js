import React, { useEffect, useState } from "react";

/*  Components  */
import {
    Header,
    HighlightedItem,
    Slider
} from "./Components";

/*  Constants  */
import {
    trendingNow
} from "./Constants/Categories/trendingNow";



/*  RENDER  */
export default function App() {
    const [filters, setFilters] = useState("default");
    const [currentItem, setCurrentItem] = useState(
        {
            name: "Rampage",
            image: "/assets/movies/rampage.jpg"
        }
    );

    return (
        <div className="App">
            <Header />
            <HighlightedItem currentItem={currentItem} />
            <Slider title="Trending Movies" items={trendingNow} setCurrentItem={setCurrentItem} />
            <Slider title="Trending Tv Shows" items={trendingNow} setCurrentItem={setCurrentItem} />
            <Slider title="New Releases" items={trendingNow} setCurrentItem={setCurrentItem} />
            <Slider title="Action Movies" items={trendingNow} setCurrentItem={setCurrentItem} />
        </div>
    );
}