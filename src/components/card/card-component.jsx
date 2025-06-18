import "./card.styles.scss";

const Card = ({ service }) => {
  const { id, name, image, detail } = service;
  return (
    <div className="card_container" key={id}>
      <img className="card_image" src={image} alt={`service ${name}`} />
      <h2 className="card_name">{name}</h2>
      <p className="card_detail">{detail}</p>
    </div>
  );
};

export default Card;
