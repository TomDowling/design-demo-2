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
            name: "Jurassic World: Dominion",
            image: "https://static2.srcdn.com/wordpress/wp-content/uploads/2022/05/Jurassic-World-Dominion-Character-Poster-for-Chris-Pratt-as-Owen-Grady-Header.jpg",
            trailer: "https://d2v9y0dukr6mq2.cloudfront.net/video/preview/SsRadVyPGjdkeg9tt/videoblocks-computer-hacking-in-process-cyber-security-concept_h-l3zbu4xb__PM.mp4" 
        }
    );

    return (
        <div className="App">
            <Header />
            <HighlightedItem currentItem={currentItem} />
            <Slider title="Trending Now..." items={trendingNow} setCurrentItem={setCurrentItem} />
            <Slider title="Trending Now..." items={trendingNow} setCurrentItem={setCurrentItem} />
            <Slider title="Trending Now..." items={trendingNow} setCurrentItem={setCurrentItem} />
            <Slider title="Trending Now..." items={trendingNow} setCurrentItem={setCurrentItem} />         
        </div>
    );
}