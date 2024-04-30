import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateTouristSpot = () => {
    const { user } = useContext(AuthContext);

    const places = useLoaderData();
    const {name, image, _id, country, location, description, cost, season, time, visitorPerYear, userName, userEmail} = places;

    console.log("data paisi", image, name, _id, country, location, description, cost, season, time, visitorPerYear, userName, userEmail);
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const image = form.image.value;
        const name = form.name.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const avgCost = form.cost.value;
        const cost = parseInt(avgCost);
        const season = form.season.value;
        const time = form.time.value;
        const visitorPerYear = form.visitorPerYear.value;
        // const userName = user.displayName;
        // const userEmail = user.email;

        const updatedTouristSpot = {
            name,
            country,
            location,
            description,
            cost,
            season,
            time,
            visitorPerYear,
            userName,
            userEmail,
            image,
        };
        console.log(updatedTouristSpot);

        Swal.fire({
            title: "Are you sure?",
            text: "You are about to update the Collection !",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#89d231",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!",
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourism-management-server-gold.vercel.app/touristSpots/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatedTouristSpot),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your Tourist Spot has been updated.",
                                icon: "success",
                                confirmButtonText: "Cool!",
                            });                           
                        }
                        // form.reset()
                    });
            }
        });
    };

    return (
        <div>
                <Helmet>
                    <title>Update Tourist Spot</title>
                </Helmet>
            <section className="  p-6 lg:my-10 bg-gray-600 dark:bg-gray-700 opacity-100  glass " style={{backgroundImage: 'url(https://i.postimg.cc/HL38CFhP/felix-rostig-Um-V2wr-Vbq8-unsplash.jpg)'}}>
                <form
                    onSubmit={handleUpdate}
                    noValidate=""
                    action=""
                    className="container flex flex-col mx-auto space-y-12"
                >
                    <div className="my-8 grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm space-y-4 card text-black  glass ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-semibold text-gray-900 acme text-4xl ">Update Tourist Spot</p>
                            <p className="text-xs">
                            Help fellow travelers discover hidden gems by adding your favorite tourist spots to our database. Whether it is a charming cafe tucked away in a bustling city or a serene viewpoint offering panoramic vistas, share your recommendations with the world. Your contributions will enrich the travel experiences of others and make exploring the globe even more rewarding. Let us build a vibrant community of exploration together!
                            </p>
                            <p className="bg-gray-300 p-2 px-4 rounded-full bg-opacity-50"><span className="font-semibold text-lg">User : </span> {user.displayName}</p>
                            <p className="bg-gray-300 p-2 px-4 rounded-full bg-opacity-50"><span className="font-semibold text-lg"> Email : </span>{user.email}</p>
                        </div>

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-lg font-semibold text-gray-900">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2 text-gray-500"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-lg font-semibold text-gray-900">
                                    Country
                                </label>
                            <select name="country" defaultValue={country}  className="select select-bordered h-4 min-h-10 w-full opacity-85  rounded-md focus:ring focus:ring-opacity-75 item-center text-gray-900 dark:text-gray-400 my-auto focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2 text-sm">
                                <option >Bangladesh</option>
                                <option>Malaysia</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                            </div> 
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-lg font-semibold text-gray-900">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    defaultValue={location}
                                    name="location"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-lg font-semibold text-gray-900">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo"
                                    defaultValue={image}
                                    name="image"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-lg font-semibold text-gray-900">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    placeholder="Short Description"
                                    defaultValue={description}
                                    name="description"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-lg font-semibold text-gray-900">
                                    Average Cost
                                </label>
                                <input
                                    type="text"
                                    placeholder="Average Cost"
                                    name="cost"
                                    defaultValue={cost}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-lg font-semibold text-gray-900">
                                    Seasonality
                                </label>
                                <input
                                    type="text"
                                    placeholder="Season"
                                    name="season"
                                    defaultValue={season}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-lg font-semibold text-gray-900">
                                    Travel Time
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    defaultValue={time}
                                    placeholder="Travel Time"
                                    name="time"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-lg font-semibold text-gray-900">
                                    Visitors Per Year
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    defaultValue={visitorPerYear}
                                    name="visitorPerYear"
                                    placeholder="Visitors per year"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>

                            <div className="col-span-full sm:col-span-4 ">
                                <button
                                    type="submit"
                                    className="btn btn-primary col-span-full lg:col-span-4 sm:col-span-3 my-2 w-full mt-5 text-xl acme"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateTouristSpot;
