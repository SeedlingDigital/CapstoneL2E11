import React from 'react';
import HeaderComponent from "../components/HeaderComponent";

export default function HomePage() {

    // Check if the user has ordered any products yet.
    let cartTotal = localStorage.getItem("cartTotal");

    //If no products then set the value for the first time.
    if(!cartTotal) {
        localStorage.setItem("cartTotal", "R 0.00");
    }


    //Enhanced the UserLogin component for the login page

    return (
        <div>
            <HeaderComponent/>
        </div>

    );
}