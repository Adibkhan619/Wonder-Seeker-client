import { NavLink } from "react-router-dom";

const TouristSpotCards = ({ place }) => {
    const {
        name,
        image,
        _id,
        country,
        // location,
        // description,
        cost,
        season,
        time,
        visitorPerYear,
        // userName,
        // userEmail,
    } = place;

    return (
        <div>
            <div className="card shadow-lg border  mx-1 my-1 glass  h-full">
                <figure>
                    <img src={image} alt="Tour!" />
                </figure>
                <div className="card-body justify-end mb-10">
                    <div className="flex flex-row justify-between w-full pb-2 border-dashed border-b-2 border-gray-300">
                        <h2 className="card-title ">{name}</h2>
                        <h1>
                            <em>{country}</em>
                        </h1>
                    </div>
                    <div className="flex justify-between">
                        <h1>Average Cost (Local):</h1>
                        <h1 className="font-semibold">{cost}$</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1>Season:</h1>
                        <h1 className="font-semibold">{season}</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1>Time of the year:</h1>
                        <h1 className="font-semibold">{time}</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1>Visitors per year:</h1>
                        <h1 className="font-semibold">{visitorPerYear}</h1>
                    </div>

                    <div className="card-actions justify-end mt-3">
                        <NavLink
                            to={`http://localhost:5173/touristSpots/${_id}`}
                        >
                            <button className="btn btn-primary w-full text-gray-50">
                                Learn more!
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCards;
