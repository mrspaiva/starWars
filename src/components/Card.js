import { App } from './CardStyles'

function Card(props) {
  return (
    <App>
      <div className="contentCard">
        <ul className="cardList">
          <li>
            <p className="titleCard">Título: </p> 
            <p className="content">{props.title}</p>
          </li>
          <li>
            <p className="titleCard">Descrição: </p> 
            <p className="content">{props.description}</p>
          </li>
          <li>
            <p className="titleCard">Diretor: </p>
            <p className="content">{props.director}</p>
          </li>
          <li>
            <p className="titleCard">Lançamento: </p>
            <p className="content">{props.release}</p>
          </li>
        </ul>
      </div>
    </App>
  )
}

export default Card;