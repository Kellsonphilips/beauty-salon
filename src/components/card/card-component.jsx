import "./card.styles.scss";

const Card = ({ service }) => {
  const { id, name, image, detail } = service;
  return (
    <div className="card_container" key={id}>
      <img className="card_image" src={image} alt={`service ${name}`} />
      <h2>{name}</h2>
      <p>{detail}</p>
    </div>
  );
};

export default Card;
