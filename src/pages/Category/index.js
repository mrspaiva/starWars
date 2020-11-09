import Background from '../../img/background.png'
import { App } from './styles';
import Navbar from '../../components/Navbar';

function Category() {
  return (
    <App>
      <div className="content">
        <img className="background" src={Background} alt="background"/>
        <Navbar />
        <h1 className="title">Choose a Category</h1>
      </div>
    </App>
  )
}

export default Category;