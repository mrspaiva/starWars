import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Category from './pages/Category'
import Films from './pages/Films'
import People from './pages/People'
import Planets from './pages/Planets'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category' exact component={Category} />
        <Route path='/category/films' component={Films} />
        <Route path='/category/people' component={People} />
        <Route path='/category/planets' component={Planets} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes