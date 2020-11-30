import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category'
import Films from './pages/Films';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category' component={Category} />
        <Route path='/films' component={Films} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;