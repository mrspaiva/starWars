import { App } from './CardStyles'

function Card() {
  return (
    <App>
      <div className="contentCard">
        <ul className="cardList">
          <li>Título: </li>
          <li>Descrição: </li>
          <li>Diretor: </li>
          <li>Lançamento: </li>
        </ul>
      </div>
    </App>
  )
}

export default Card;