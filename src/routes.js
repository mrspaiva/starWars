import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category' component={Category} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;