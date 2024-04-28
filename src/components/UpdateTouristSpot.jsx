import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { useLoaderData } from "react-router-dom";

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
        const cost = form.cost.value;
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
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!",
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/touristSpots/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatedTouristSpot),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.dataCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your Tourist Spot has been updated.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

    return (
        <div>
            <section className="p-6 bg-gray-800 dark:bg-gray-100 text-gray-500 dark:text-gray-900">
                <form
                    onSubmit={handleUpdate}
                    noValidate=""
                    action=""
                    className="container flex flex-col mx-auto space-y-12"
                >
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 dark:bg-gray-300">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Add Tourist Spot</p>
                            <p className="text-xs">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Adipisci fuga autem eum!
                            </p>
                            <p>{user.displayName}</p>
                            <p>{user.email}</p>
                        </div>

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    placeholder="Country"
                                    defaultValue={country}
                                    name="country"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    defaultValue={location}
                                    name="location"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo"
                                    defaultValue={image}
                                    name="image"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    placeholder="Short Description"
                                    defaultValue={description}
                                    name="description"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">
                                    Average Cost
                                </label>
                                <input
                                    type="text"
                                    placeholder="Average Cost"
                                    name="cost"
                                    defaultValue={cost}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">
                                    Seasonality
                                </label>
                                <input
                                    type="text"
                                    placeholder="Season"
                                    name="season"
                                    defaultValue={season}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">
                                    Travel Time
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    defaultValue={time}
                                    placeholder="Travel Time"
                                    name="time"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">
                                    Visitors Per Year
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    defaultValue={visitorPerYear}
                                    name="visitorPerYear"
                                    placeholder="Visitors per year"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-500 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>

                            <div className="col-span-full sm:col-span-4 ">
                                <button
                                    type="submit"
                                    className="btn col-span-full lg:col-span-4 sm:col-span-3 my-2 w-full mt-5"
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
