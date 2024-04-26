import { useLoaderData } from "react-router-dom";

const PlaceDetails = () => {

    const place = useLoaderData();
    const {name, _id, country, location, description, cost, season, time, visitorPerYear, userName, userEmail} = place;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{location}</p>
                <p>{season}</p>
                <p>{time}</p>
                <p>{visitorPerYear}</p>
                <p>{cost}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
                </div>
  </div>
</div>
        </div>
    );
};

export default PlaceDetails;