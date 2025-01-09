import React from 'react';
import logImage from '../assets/images/logo.jpg';
import AboutDescription from './AboutDescription';
import CarouselComponent from "./CarouselComponent";

function AboutInfo() {
    return (
        <div className={"center"}>
            <div>
                {/*Logo*/}
                <img className={"logo-image"} src={logImage} alt={"Shoe store logo"}/>
            </div>
            {/*Short Descriotion*/}
           <AboutDescription />
            {/*2 x images of store in a courasel*/}
            <div align={"center"}>
                <CarouselComponent/>
            </div>
            {/*contact info*/}
            <div>
            <p className={"about-text"}>Contact us<br/>Tel: <a href={"#"}>018 855-5585</a> | Email: <a href={"#"}>fakeEmail@gmail.com</a>
            </p>
            </div>
        </div>
    );
}

export default AboutInfo;