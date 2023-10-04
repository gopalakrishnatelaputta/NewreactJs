// import App from "./App";

const Movie = ({title,image,description,actors}) => {
    //const {title,image,description,actors}=props;
    //console.log(props);
    return (
      <div>
        
        <article className='each-movie'>
        <img className='image' src={image} alt='scinic beach view'/>
        <h3>{title || "Random Title"}</h3>
        <h5>{description || "Random Description"}</h5>
        <h5>{actors || "Random Actors"}</h5>
        </article>
      </div>
    );
  }

  export default Movie;