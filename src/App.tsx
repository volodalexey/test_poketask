import { Provider } from 'react-redux'
import { store } from "./redux";
import { Theme } from "./components/theme";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const App = () => (
    <Provider store={store}>
        <Theme>
            <RouterProvider router={router} />
        </Theme>
    </Provider>
);

export default App;
