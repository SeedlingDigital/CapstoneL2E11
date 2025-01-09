import React from 'react';
import {useState} from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import TotalPrice from "../components/TotalPrice";
import blue from '../assets/images/blue.jpg';
import blue1 from '../assets/images/blue1.jpg';
import whiteBluePink from '../assets/images/white-blue-pink.jpg';
import whiteHighTops from '../assets/images/white-high-tops.jpg';
import blueWhite from '../assets/images/blue-white.jpg';
import brown from '../assets/images/brown.jpg';
import whitePink from '../assets/images/white-pink.jpg';
import pinkLadies from '../assets/images/pink-ladies.jpg';
import greenHighTops from '../assets/images/green-high-tops.jpg';
import whiteFilas from '../assets/images/white-filas.jpg';



export default function ProductPage()
{
    // Set the state to update the totals.
    const [cartTotal, setCartTotal] = React.useState("0.00");


    // Product class.
    class Product
    {
        constructor(id, name, description, price, image, color, selected) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
            this.color = color;
            this.selected = selected
        }
    }

    // Create a list of products to display.
    const productsList = [
        new Product(1, "Blue Nike", "Blue Nike sneakers",2000.00, blue, "blue", false),
        new Product(2,"Blue Designer", "Blue and white Hillfiger sneakers",1980.00, blue1, "blue",false),
        new Product(3,"Nike Pink Ladies", "Ladies Pink and white Nike",1500.00, whiteBluePink, "blue",false),
        new Product(4,"White high tops", "Classic high top white sneakers",899.00, whiteHighTops, "blue",false),
        new Product(5,"Blue converse", "Blue and white converse",1300.00, blueWhite, "blue",false),
        new Product(6,"Brown", "Elegant brown sneakers for night life",2000.00, brown, "blue",false),
        new Product(7,"Pink and White", "Gym pink and white sneakers",676.00, whitePink, "blue",false),
        new Product(8,"Pink ladies", "Comfortable for the long jog sessions",580.00, pinkLadies, "blue",false),
        new Product(9,"Green High Tops", "Vintage green high tops",1234.00, greenHighTops, "blue",false),
        new Product(10,"White Filas", "White Fila sneakers",234.00, whiteFilas, "blue",false),
    ];

    // Set the state of products.
    const [products, setProducts] = useState(productsList);

    // Update the dropdown selection, keep it separate from the totals as the user might just update the color for now.
    function updateColor(index, color) {
        //Set the product list so the ui re-renders
        let newProducts = [];
        for(let i = 0; i < products.length; i++)
        {
            // Update the changed product record.
            if(products[i].id === index)
            {
                newProducts.push(new Product(products[i].id, products[i].name, products[i].description, products[i].price, products[i].image, color, products[i].selected));
            }
            else{
                newProducts.push(new Product(products[i].id, products[i].name, products[i].description, products[i].price, products[i].image, products[i].color, products[i].selected));
            }
        }

        setProducts(newProducts);
    }

    // Update the cart for all products that was selected.
    function updateCartTotal(index, calculation, price, color)
    {

        // Based on the "calculation" variable we will know if we need to deduct or add the product*.
        let totalTemp = 0.00;
        let newSelected = true;
            if(calculation === "-") {
                totalTemp = Number(cartTotal) - price;

                // If the calculation is in negative then dont make it selected and set the total to zero.
                if (totalTemp < 0) {
                    setCartTotal("0.00");
                    newSelected = false;
                }
                else
                {
                    newSelected = true;
                    setCartTotal(totalTemp.toFixed(2));
                }
            }

            else{
                // Else add the price to the total.
                totalTemp = Number(cartTotal) + price;
                setCartTotal(totalTemp.toFixed(2));

            }

             localStorage.setItem("cartTotal", `R ${totalTemp.toFixed(2)}`);


            //Set the product list so the ui rerenders
             let newProducts = [];
             for(let i = 0; i < products.length; i++)
             {
                 if(products[i].id === index)
                 {
                     newProducts.push(new Product(products[i].id,
                                                  products[i].name,
                                                  products[i].description,
                                                  products[i].price,
                                                  products[i].image,
                                                  color,
                                                  newSelected));
                 }
                 else{
                     newProducts.push(new Product(products[i].id,
                                                  products[i].name,
                                                  products[i].description,
                                                  products[i].price,
                                                  products[i].image,
                                                  products[i].color,
                                                  products[i].selected));
                 }
             }

           // Set the order list with the changed values to re-render the layout
           setProducts(newProducts);

    }




    return (
        <div  className="center">
            {/*Display the total price on the page*/}
            <div className={"total-price"}>
                <TotalPrice totalPrice={cartTotal}/>
            </div>
            <NavBar/>
            <div className={"product-text"}>Products</div>
            <ul>
                {/*Map the products to a Bootstrap card*/}
                {products.map((item, index) =>
                    (<ul className={"product-card"} key={index}>{<ProductCard product={products[index]}
                                                                              updateCartTotal={updateCartTotal}
                                                                              updateColor={updateColor}/>}</ul>))}
            </ul>
        </div>
    );
}


