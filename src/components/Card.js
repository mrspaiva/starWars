import { App } from './CardStyles'

function Card(props) {
  return (
    <App>
      <div className="contentCard">
        <div className="cardList">
          <p>{props.children}</p> 
        </div>
      </div>
    </App>
  )
}

export default Card;