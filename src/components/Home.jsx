// import Countries from "./countries/Countries";

import { useLoaderData } from "react-router-dom";
import CountriesCard from "./countries/CountriesCard";
// import BannerCarousel from "./style/BannerCarousel";
import UserReview from "./style/UserReview";
import BannerCarousel from "./style/BannerCarousel";
import Banner from "./style/Banner";
import HomeTypewriter from "./style/HomeTypewriter";

const Home = () => {
    const countries = useLoaderData();
    
    console.log(countries);

    return (
        
            <div className="">




                <Banner></Banner>
                <HomeTypewriter></HomeTypewriter>
            {/* <BannerCarousel></BannerCarousel> */}
            <div className="lg:mx-24 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 justify-center gap-5">
                {countries.map((country) => <CountriesCard country={country} key={country._id}></CountriesCard>)}
            </div>
            
            <UserReview></UserReview>
        </div>
      
        
    );
};

export default Home;
