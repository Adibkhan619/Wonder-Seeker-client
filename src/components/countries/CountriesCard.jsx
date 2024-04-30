import { Link } from "react-router-dom";


const CountriesCard = ({country}) => {

    const {name, description, image} =country;
    return (
        <Link to ={ `/countries/${name}`}>
            <div className="card border h-full   bg-base-100 shadow-xl
            transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 duration-300           
            ">
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