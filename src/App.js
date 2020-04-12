import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import PublisherForm from './pages/PublisherForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryContext } from './utilities/QueryContext';
import './css/tailwind.css';

function App() {
  const [value, setValue] = useState('');
  return (
    <Router>
      <QueryContext.Provider value={{ value, setValue }}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/publicar' component={PublisherForm}></Route>
          </Switch>
        </Layout>
      </QueryContext.Provider>
    </Router>
  );
}

export default App;
