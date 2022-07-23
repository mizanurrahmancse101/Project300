import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/Maincomponents';
import mystore from './redux/store';
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store={mystore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
