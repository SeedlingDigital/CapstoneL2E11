import React from 'react';

function TotalPrice(props) {

    let cartTotal = localStorage.getItem('cartTotal');


    return (
        <div>
            <h2>Total in Cart {cartTotal}</h2>
        </div>
    );
}
export default TotalPrice;