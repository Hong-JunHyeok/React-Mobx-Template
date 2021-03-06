import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import reportWebVitals from 'reportWebVitals';
import { Provider } from 'mobx-react';
import stores from 'stores';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
