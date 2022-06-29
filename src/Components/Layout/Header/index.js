import React, { useEffect, useState } from "react";



/*  RENDER  */
export function Header(props) {
    const {
        setFilters
    } = props;
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prevCheck) => !prevCheck)
    }

    const changeFilter = (newValue) => {
        setFilters(newValue)
    }

    return (
        <header>
            <div className="container">
                <div
                    className="burger-menu mobile-only"
                    onClick={toggleDropdown}
                />

                <ul
                    className="main-menu desktop-only"
                >
                    <li onClick={() => changeFilter("movies")}>Movies</li>
                    <li onClick={() => changeFilter("tv")}>Tv Shows</li>
                    <li onClick={() => changeFilter("default")}>Directories</li>
                </ul>

                <div
                    className="logo"
                    onClick={() => alert("Home")}
                />

                <div
                    className="notifications"
                    onClick={() => alert("Notifications")}
                />
            </div>

            <ul className={`dropdown-menu mobile-only ${showDropdown ? "" : "hide"}`}>
                <li>Movies</li>
                <li>Tv Shows</li>
                <li>Directories</li>
                <li className="spacer" />
                <li>Search</li>
                <li className="login">Login</li>
            </ul>
        </header>
    )
}