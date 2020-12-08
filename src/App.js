import React, { useEffect } from "react";
import "./scss/app.scss";
import Page from "./components/Page";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch();

    const state = useSelector(state => {
        return{
            category: state.filters.category,
            sortBy: state.filters.sortBy,
        }
    })

    useEffect(() => {
        dispatch(fetchPizzas(state.category, state.sortBy));
    }, [state.category, state.sortBy])

    return (
        <div className="App">
            <Page />
        </div>
    );
}

export default App;
