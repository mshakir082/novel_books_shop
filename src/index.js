import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./redux/store";



import { Provider } from 'react-redux';
import {store} from './Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <ChakraProvider>
  <Provider store={store}>
        
     <App />
     </Provider>

  </ChakraProvider>
  </Provider>
  </BrowserRouter>
);


