import { Link } from "react-router-dom";


const CountriesCard = ({country}) => {

    const {name, _id, description, image} =country;
    return (
        <Link to ={ `/countries/${name}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt={name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </Link>
        
    );
};

export default CountriesCard;