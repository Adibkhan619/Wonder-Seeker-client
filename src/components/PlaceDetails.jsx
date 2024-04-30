import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const PlaceDetails = () => {
    const place = useLoaderData();
    const {
        name,
        image,
        // _id,
        // country,
        location,
        description,
        cost,
        season,
        time,
        visitorPerYear,
        // userName,
        // userEmail,
    } = place;
    return (
        <div>
                <Helmet>
                    <title>{name}</title>
                </Helmet>
            <div className="card-body rounded-3xl mx-1 my-1 glass lg:my-5  lg:mx-5 lg:card-side bg-base-100 shadow-2xl gap-10 ">
                <figure className="items-center flex">
                    <img className="rounded-3xl" src={image} alt="Album" />
                </figure>

                <div className=" lg:w-1/2 lg:space-y-2">
                    <div >
                        <h2 className=" text-4xl">{name}</h2>
                        <p className="py-5">{description}</p>
                    </div>

                    <div>
                        <h1 className="font-bold">Located at:</h1>
                        <p className="text-lg">{location}</p>
                    </div>
                    <div>
                        <h1 className="font-bold ">Best Time to Visit</h1>
                        <p className="text-lg">{season}</p>
                    </div>

                    <div>
                        <h1 className="font-bold ">Tour Duration</h1>
                        <p className="text-lg">{time}</p>
                    </div>

                    <div>
                        <h1 className="font-bold ">Annual Visitation</h1>
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
