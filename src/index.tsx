import { StrictMode } from 'react';
import reportWebVitals from 'reportWebVitals';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { StoreProvider } from 'store';
import { CookiesProvider } from 'react-cookie';
import { StylesProvider } from '@material-ui/core/styles';
import App from './App';
import 'index.scss';

ReactDOM.render(
  <StrictMode>
    <StylesProvider injectFirst>
      <BrowserRouter>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </StylesProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
