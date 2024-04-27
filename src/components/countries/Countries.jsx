// import { useLoaderData } from "react-router-dom";
// import Bangladesh from "./Bangladesh";
// import Cambodia from "./Cambodia";
// import Indonesia from "./Indonesia";
// import Malaysia from "./Malaysia";
// import Thailand from "./Thailand";
// import Vietnam from "./Vietnam";

import { useLoaderData } from "react-router-dom";


const Countries = () => {
    
    const countries = useLoaderData();
    console.log(countries);

    return (
        <div>
            <h1>Render me</h1>
            {/* <Bangladesh></Bangladesh>
            <Malaysia></Malaysia>
            <Thailand></Thailand>
            <Indonesia></Indonesia>
            <Cambodia></Cambodia>
            <Vietnam></Vietnam> */}
        </div>
    );
};

export default Countries;