import './card.styles.css';

const Card = ({ monster }) => {
        const { name, email, id } = monster;
        return (
            <div className="card-container">
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}/set_set4?size=150x150`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );

}

export default Card;