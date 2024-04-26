import { NavLink } from "react-router-dom";


const TouristSpotCards = ({place}) => {

    const {name, _id, country, location, description, cost, season, time, visitorPerYear, userName, userEmail} = place;

    // const handleDetails = (id) =>{

    // }
    return (
        <div>

                        <div className="card  glass m-2">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{country}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <NavLink to = {`http://localhost:5173/touristSpots/${_id}`}>
                        <button  className="btn btn-primary w-full">Learn now!</button>
                    </NavLink>
                
                </div>
            </div>
</div>
        </div>
    );
};

export default TouristSpotCards;