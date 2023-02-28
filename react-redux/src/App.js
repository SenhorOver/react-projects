import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import GlobalStyles from './styles/GlobalStyles';
import router from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </PersistGate>
    </Provider>
  );
}

export default App;
