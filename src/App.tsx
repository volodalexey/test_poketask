import { Provider } from 'react-redux'
import { ClientContext } from "./utils/client.context";
import { MainClient } from "./utils";
import { store } from "./redux";
import { Theme } from "./components/theme";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const mainClient = new MainClient();

const App = () => <ClientContext.Provider value={mainClient}>
    <Provider store={store}>
        <Theme>
            <RouterProvider router={router} />
        </Theme>
    </Provider>
</ClientContext.Provider>;

export default App;
