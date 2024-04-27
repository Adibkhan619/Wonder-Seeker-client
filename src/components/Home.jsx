// import Countries from "./countries/Countries";

import { useLoaderData } from "react-router-dom";
import Countries from "./countries/Countries";


 
const Home = () => {

    const countries = useLoaderData();
    console.log(countries);


    return (
        <div >
            <h1>This is Home</h1>
            <div>
            <Countries></Countries>
            </div>
        </div>
    );
};

export default Home;