import React from "react";
import { Provider } from 'react-redux'
import { HomePage } from "./pages";
import { ClientContext } from "./utils/client.context";
import { MainClient } from "./utils";
import { store } from "./redux";

const mainClient = new MainClient();

const App = () => <ClientContext.Provider value={mainClient}>
    <Provider store={store}>
        <HomePage />
    </Provider>
</ClientContext.Provider>;

export default App;
