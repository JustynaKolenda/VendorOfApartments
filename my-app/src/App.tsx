import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ApartmentView from './ApartmetsView';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/" component={ApartmentView}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
