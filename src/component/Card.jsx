import PropTypes from "prop-types";

const Card = ({title, description, image }) =>{

  return(
    <div className="card">
    {title && description && (
      <div className="content">
        <h2 className="content-title">{title}</h2>
        <p className="content-description">{description}</p>
      </div>
    )}
    {image && (
      <div className="image">
        <img src={image} alt={title} />
      </div>
    )}
  </div>
  );
    //   if(type ==="image"){
    //     return<img src={image} alt={title}/>;
    //   }
    //   if(type="description"){
    // return (
    //     <div>
    //        <h2>{title}</h2>
    //        <p>{description}</p>
    //     </div>
    // );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
  };

export default Card;