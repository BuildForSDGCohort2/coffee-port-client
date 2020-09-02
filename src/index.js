import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ApolloProviderContainer from './ApolloProvider';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme'

ReactDOM.render( 
    <ApolloProviderContainer>
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </ThemeProvider>
    </ApolloProviderContainer>, document.getElementById('root'));


serviceWorker.unregister();
