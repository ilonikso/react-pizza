import React from "react";
import PizzaLoader from "./PizzaLoader";

const PizzaLoaderContainer = () => {
    return <>
        {
            Array(10).fill(0).map((item, index) => {
               return <PizzaLoader key={index + 'loader'}/>
            })
        }
    </>;
};

export default PizzaLoaderContainer;
