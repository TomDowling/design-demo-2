import React, { useEffect, useState } from "react";



/*  RENDER  */
export function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prevCheck) => !prevCheck)
    }

    return (
        <header>
            <div className="container">
                <div
                    className="burger-menu"
                    onClick={toggleDropdown}
                />

                <div
                    className="logo"
                    onClick={() => alert("Home")}
                />

                <div
                    className="notifications"
                    onClick={() => alert("Notifications")}
                />
            </div>

            <ul className={`dropdown-menu ${showDropdown ? "" : "hide"}`}>
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