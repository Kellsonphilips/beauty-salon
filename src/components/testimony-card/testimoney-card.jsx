import "./testimoney-card.styles.scss";

const TestimoneyCard = ({ testimony }) => {
  const { content, author, title, image } = testimony;
  
  return (
    <div className="testimony-card">
      <p className="testimony-content">{content}</p>
      <div className="testimony-author">
        <img 
          src={image} 
          alt={author} 
          className="author-image"
        />
        <div className="author-info">
          <h4 className="author-name">{author}</h4>
          <p className="author-title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimoneyCard;
