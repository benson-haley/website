import './Card.scss';

const Card = ({ id, children }) => {
    return (
        <div className="card" id={id}>
            <div className="inner">
                { children }
            </div>
        </div>
    );
}
  
export default Card;
  