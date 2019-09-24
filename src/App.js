import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import './config/Reactotron';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000}/>
        </Router>
      </PersistGate>
    </Provider>
  )
}