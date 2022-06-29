import React, { useEffect, useState } from "react";

/*  Components  */
import {
    deviceCheck
} from "./../../../Components";



/*
*   EXPORT Default
*/
export function Responsive(props) {
    const {
        children
    } = props;

    if (!children) return console.log("Please add some breakpoint content...");

    return (
        <>
            {children.map((child) => {
                if (deviceCheck() !== child.type.name.toLowerCase()) return <></>;

                return child.props.children
            })}
        </>
    )
}



/*
*   EXPORT Helpers
*/
export * from "./helpers";