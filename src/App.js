import React from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import HomePage from './pages/homepage/homepage';
import ContactDetailPage from './pages/contactdetailpage/contactdetail.page';
import AddContactPage from './pages/addcontactpage/addcontact.page';
import './App.scss';

library.add(fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />     
          <Route exact path="/contactdetail/:id" component={ ContactDetailPage } />
          <Route exact path="/addcontact" component={ AddContactPage } />                                      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
