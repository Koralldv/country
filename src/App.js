import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import { Header } from './components/Header';
import { Main } from './components/Main';

import {Home} from './pages/Home'
import {Details} from './pages/Details'
import {NotFound} from './pages/NotFound'

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
          <Switch>
            <Route exact path="/">
              <Home countries={countries} setCountries={setCountries}/>
            </Route>
            <Route path="/country/:name" component={Details}/>
            <Route component={NotFound}/>
          </Switch>
      </Main>
    </>
  );
}

export default App;
