import React, { useEffect, useState } from "react";

/*  Components  */
import { Header } from "./Components";



/*  RENDER  */
export default function App() {
    const [filters, setFilters] = useState("default");

    return (
        <div className="App">
            <Header />
        </div>
    );
}