import { App } from './styles';
import Navbar from '../../components/Navbar';

function Category() {
  return (
    <App>
      <div className="content">
        <div className="navbar">
          <Navbar />
        </div>
        <h1 className="title">Escolha uma categoria</h1>
        
        <section className="category">
          <button className="films">Filmes</button>
          <button className="people">Personagens</button>
          <button className="planets">Planetas</button>
          <button className="species">Espécies</button>
          <button className="starships">Naves</button>
          <button className="vehicles">Veículos</button>
        </section>
      </div>
    </App>
  )
}

export default Category;