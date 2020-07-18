// Модули
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import contactStore from './redux/contact-store';

// Компоненты
import App from './App';
// Стили
import 'modern-normalize/modern-normalize.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={contactStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
