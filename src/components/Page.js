import React from "react";
import Header from "./Header/Header";
import Home from "../pages/Home";
import { Route } from "react-router-dom";
import Cart from "../pages/Cart";

const Page = () => {
    return (
        <div>
            <div className="wrapper">
                <Header />

                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart" component={Cart} />
                </div>
            </div>
        </div>
    );
};

export default Page;
