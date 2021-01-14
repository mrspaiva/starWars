import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Category from './pages/Category'
import Films from './pages/Films'
import People from './pages/People'
import Planets from './pages/Planets'
import Species from './pages/Species'
import Starships from './pages/Starships'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category' exact component={Category} />
        <Route path='/category/films' component={Films} />
        <Route path='/category/people' component={People} />
        <Route path='/category/planets' component={Planets} />
        <Route path='/category/species' component={Species} />
        <Route path='/category/starships' component={Starships} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes