import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { CheckmarkIcon, Toaster } from 'react-hot-toast';

const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Provider store={store}>
      <Suspense>
        <App />
        <Toaster
          toastOptions={{
            icon: <CheckmarkIcon />,
            position: 'bottom-right',
            style: {
              backgroundColor: '#f2f2f2',
              color: 'black'
            }
          }}

          
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
