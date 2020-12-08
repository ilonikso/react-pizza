import React from "react";
import "./scss/app.scss";
import Page from "./components/Page";

function App() {
    return (
        <div className="App">
            <Page />
        </div>
    );
}

export default App;

// Old method using connect hoc

/* const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setPizzas: (items) => dispatch(setPizzas(items)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
 */
