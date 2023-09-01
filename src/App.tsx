import React from "react";
import { Provider } from 'react-redux'
import { HomePage } from "./pages";
import { ClientContext } from "./utils/client.context";
import { MainClient } from "./utils";
import { store } from "./redux";
import { Theme } from "./components/theme";

const mainClient = new MainClient();

const App = () => <ClientContext.Provider value={mainClient}>
    <Provider store={store}>
        <Theme>
            <HomePage />
        </Theme>
    </Provider>
</ClientContext.Provider>;

export default App;
