import React from 'react';
import './css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ApartmentView from './ApartmetsView';
import { CreateForm } from './CreateForm';
import SingleApartment from './SingleApartment';
import {UpdateForm} from './UpdateForm';

const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
          <Route exact path="/apartament/:id" component={SingleApartment}/>
          <Route exact path="/create" component={CreateForm}/>
         <Route exact path="/update/:id" component={UpdateForm}/>
          <Route exact path="/" component={ApartmentView}/>
        </Router>
    </div>
  );
}

export default App;
