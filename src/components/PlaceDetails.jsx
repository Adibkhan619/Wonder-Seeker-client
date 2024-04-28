import { Link, useLoaderData } from "react-router-dom";

const PlaceDetails = () => {
    const place = useLoaderData();
    const {
        name,
        image,
        _id,
        country,
        location,
        description,
        cost,
        season,
        time,
        visitorPerYear,
        userName,
        userEmail,
    } = place;
    return (
        <div>
            <div className="card   border lg:mx-5 lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img className="" src={image} alt="Album" />
                </figure>

                <div className="card-body w-1/2 lg:space-y-2">
                    <div >
                        <h2 className="card-title text-4xl text-gray-700">{name}</h2>
                        <p className="py-5">{description}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-gray-700">Located at:</h1>
                        <p className="text-lg">{location}</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-gray-700">Best Time to Visit</h1>
                        <p className="text-lg">{season}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-gray-700">Tour Duration</h1>
                        <p className="text-lg">{time}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-gray-700">Annual Visitation</h1>
                        <p className="text-lg">
                            {visitorPerYear}{" "}
                            <span className="text-sm">per year</span>
                        </p>
                    </div>

                    <div>
                        <h1 className="font-bold">Cost</h1>
                        <p className="text-xl">
                            {cost} <span className="text-sm">per day</span>
                        </p>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to="/allTouristSpots">
                            <button className="btn btn-primary">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;
