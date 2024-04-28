import { Link } from "react-router-dom";


const CountriesCard = ({country}) => {

    const {name, description, image} =country;
    return (
        <Link to ={ `/countries/${name}`}>
            <div className="card border h-full  bg-base-100 shadow-xl">
  <figure><img src={image} alt={name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p><small>{description}</small></p>

  </div>
</div>
        </Link>
        
    );
};

export default CountriesCard;