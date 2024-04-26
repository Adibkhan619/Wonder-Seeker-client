const AddTouristSpot = () => {

    const handleAddTouristSpot = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value;
        const country= form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const visitorPerYear = form.visitorPerYear.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const newTouristSpot = {
            name, country, location, description, cost, season, time, visitorPerYear, userName, userEmail
        }
        console.log(newTouristSpot);
    }






    return (
        <div>
            <section className="p-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
                <form
                    onSubmit={handleAddTouristSpot}
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
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name = "name"
                                    placeholder="Name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2" 
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    placeholder="Country"
                                    name ="country"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    name ="location"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    placeholder="Short Description"
                                    name= "description"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">
                                    Average Cost
                                </label>
                                <input
                                    type="text"
                                    placeholder="Average Cost"
                                    name ="cost"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">
                                    Seasonality
                                </label>
                                <input
                                    type="text"
                                    placeholder="Season"
                                    name = "season"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">
                                    Travel Time
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    placeholder="Travel Time"
                                    name ="time"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">
                                    Visitors Per Year
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    name ="visitorPerYear"
                                    placeholder="Visitors per year"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    name ="userName"
                                    placeholder="Your Name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">
                                    User Email
                                </label>
                                <input
                                    type="email"
                                    name ="userEmail"
                                    placeholder="Your Email"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 p-2"
                                />
                            </div>
                            
                            <button type="submit" className="btn col-span-full sm:col-span-3 my-3">Add to your collection</button>
                        </div>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default AddTouristSpot;
