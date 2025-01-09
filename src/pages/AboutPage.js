import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from "../components/NavBar";
import AboutInfo from "../components/AboutInfo";
import TotalPrice from "../components/TotalPrice";

export default function AboutPage() {

    // Get the local storage value for the shopping cart.
    const cartTotalValue = localStorage.getItem('cartTotal');

    console.log(`cartTotalValue : ${cartTotalValue}`);

    let display = true;

    // Decide if the total needs to be displayed or not.
    if (!cartTotalValue || cartTotalValue === "R 0.00") {
        display = false;
    }

    {/**/}
    return (
        <div className="center">
            {/*Dislay total price if there is any values*/}
            <div className={"total-price"}>
                {(display) ? <TotalPrice/> : null}
            </div>
            {/*Display the navbar buttons*/}
            <NavBar/>
            {/*Display contents of the about me page*/}
            <div>
                <AboutInfo/>
            </div>
        </div>

    );
}