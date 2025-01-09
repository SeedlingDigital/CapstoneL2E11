import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ColorDropDown from "./ColorDropDown";



function ProductCard(props) {

    let buttonText = "Buy Now!";

    if(props.product.selected) {
        buttonText = "Remove";
    }

    //Update the card if the user clicked on the buy button
    function updateCart()
    {
        console.log("Push the button");

        console.log(`Selected value: ${props.product.selected}`);
        let calculation = "+";
        if(props.product.selected)
        {
            calculation = "-";
        }
        props.updateCartTotal(props.product.id, calculation, props.product.price);
    }

    //Update the color back to the parent product page that was received from the dropdown child component
    function updateColor(color){
        props.updateColor(props.product.id, color);
    }

    return (
        <Card className={"card-color"}>
            <Card.Img className={"product-card-image"} variant="top" src={props.product.image} alt="Product Image" />
            <Card.Body className={"padding-card"}>
                <Card.Title className={"product-card-title"}>{props.product.name}</Card.Title>
                <Card.Subtitle className={"product-card-subTitle"}>
                    {props.product.description}
                </Card.Subtitle>
                <Card.Text className={"product-card-description"}>
                    R {props.product.price.toFixed(2)}
                </Card.Text>
                <ColorDropDown color={props.product.color} updateColor={updateColor} />
                <Button variant="primary" onClick={updateCart}>{buttonText}</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;