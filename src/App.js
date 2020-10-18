import React from 'react';
import './App.css';
import Image from './components/image'
import Widget from './components/widget';
import Search from './components/search'
import Synonym from './components/synonym'
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Image />
        <Widget />
        <Synonym />
        <Search />
      </div>
    </Provider>
  );
}

export default App;
