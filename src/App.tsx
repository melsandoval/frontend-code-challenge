import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/store'
import { Provider } from 'react-redux'
import { Counter } from './features/counter/counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Counter/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
      </div>
    </Provider>

  );
}

export default App;
