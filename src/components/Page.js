import React from "react";
import Header from "./Header/Header";
import Home from "../pages/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

const Page = () => {
    return (
        <div>
            <div className="wrapper">
                <Header />

                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/cart" component={Cart} />
                        {/* <Route path="*" component={NotFound} /> */}
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Page;
