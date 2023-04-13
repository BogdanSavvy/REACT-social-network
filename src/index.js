import './index.css';

import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost, sendMessage, updatePostTxt, updateMessageTxt, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

//! Rerender Entire Tree
let reRender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updatePostTxt={updatePostTxt} sendMessage={sendMessage} updateMessageTxt={updateMessageTxt} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

reRender(state);
subscribe(reRender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
