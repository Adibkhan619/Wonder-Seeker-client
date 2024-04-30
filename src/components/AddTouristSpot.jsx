import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet";

const AddTouristSpot = () => {
    const { user } = useContext(AuthContext);

    const handleAddTouristSpot = (e) => {
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
        const userName = user.displayName;
        const userEmail = user.email;

        const newTouristSpot = {
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
        console.log(newTouristSpot);
        console.log(typeof(cost))

        fetch("http://localhost:5000/touristSpots", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newTouristSpot),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    title: "Success!",
                    text: "Place added successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
                form.reset()
            });
    };

    return (
        <div className=" dark:text-gray-100  text-gray-900  ">
                <Helmet>
                    <title>Add Tourist</title>
                </Helmet>
            <section className="p-6 bg-gray-600 dark:bg-gray-700 opacity-100 text-gray-500 dark:text-gray-900 glass " style={{
                            backgroundImage:
                                "url(https://i.postimg.cc/yYPY8m85/mantas-hesthaven-g1-Wdc-Kc-V3w-unsplash.jpg)",
                        }} >
                <form
                    onSubmit={handleAddTouristSpot}
                    noValidate=""
                    action=""
                    className="container flex flex-col mx-auto space-y-12 "
                >
                    <div className="my-8 grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm space-y-4   glass " 
                    >
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-semibold text-4xl acme">Add Tourist Spot</p>
                            <p className="text-sm">
                            Help fellow travelers discover hidden gems by adding your favorite tourist spots to our database. Whether it is a charming cafe tucked away in a bustling city or a serene viewpoint offering panoramic vistas, share your recommendations with the world. Your contributions will enrich the travel experiences of others and make exploring the globe even more rewarding. Let us build a vibrant community of exploration together!
                            </p>
                            <p className="bg-gray-300 p-2 px-4 rounded-full bg-opacity-50"><span className="font-semibold text-lg">User : </span> {user.displayName}</p>
                            <p className="bg-gray-300 p-2 px-4 rounded-full bg-opacity-50"><span className="font-semibold text-lg"> Email : </span>{user.email}</p>
                            
                        </div>

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 lg:space-y-4">

                            <div className="col-span-full sm:col-span-3 mt-4">
                                <label htmlFor="firstname" className="text-lg font-semibold text-gray-900">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full opacity-85 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-400 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                                
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-lg font-semibold text-gray-900">
                                    Country
                                </label>
                            <select name="country" className="select select-bordered h-4 min-h-10 w-full opacity-85  rounded-md focus:ring focus:ring-opacity-75 item-center text-gray-900 dark:text-gray-400 my-auto focus:ring-violet-400 focus:dark:ring-orange-600   p-2 text-sm">
                                <option >Bangladesh</option>
                                <option>Malaysia</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                            </div> 

{/* 
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    placeholder="Country"
                                    name="country"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div> */}





                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-lg font-semibold text-gray-900">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    name="location"
                                    className="w-full opacity-85 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-400 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-lg font-semibold">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo"
                                    name="image"
                                    className="w-full opacity-85 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-400 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-lg font-semibold text-gray-900">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    placeholder="Short Description"
                                    name="description"
                                    className="w-full opacity-85 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-400 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
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
                                    className="w-full opacity-85 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-400 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
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
                                    className="w-full opacity-85 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-400 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-lg font-semibold text-gray-900">
                                    Travel Time
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    placeholder="Travel Time"
                                    name="time"
                                    className="w-full opacity-85 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-400 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-lg font-semibold text-gray-900">
                                    Visitors Per Year
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    name="visitorPerYear"
                                    placeholder="Visitors per year"
                                    className="w-full opacity-85 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-400 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            {/* <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    name ="userName"
                                    defaultValue={user.displayName}
                                    placeholder="Your Name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">
                                    User Email
                                </label>
                                <input
                                    type="email"
                                    name ="userEmail"
                                    defaultValue={user.email}
                                    placeholder="Your Email"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-orange-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div> */}

                            <div className="col-span-full sm:col-span-4 ">
                                <button
                                    type="submit"
                                    className="btn btn-primary col-span-full lg:col-span-4 sm:col-span-3 my-2 w-full mt-5 text-lg acme"
                                >
                                    Add to your collection
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddTouristSpot;
