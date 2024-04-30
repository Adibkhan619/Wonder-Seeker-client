
import UserReview from "./style/UserReview";
import Banner from "./style/Banner";
import HomeTypewriter from "./style/HomeTypewriter";
import Login from "./Login";
import HomeCountries from "./HomeCountries";
import HomeTouristSpot from "./HomeTouristSpot";
import BannerCarousel from "./style/BannerCarousel";
import { Fade } from "react-awesome-reveal";
import HomeDecor from "./style/HomeDecor";
import { Helmet } from "react-helmet";
// import Drawer from "./style/Drawer";
// import Drawer2 from "./style/Drawer2";

const Home = () => {

    return (
        <div className="mukta">
                <Helmet>
                    <title>Wonder Seeker | Home</title>
                </Helmet>
            <Fade>
            {/* <Drawer></Drawer> */}
            {/* <Drawer2></Drawer2> */}
            <Banner></Banner>
            <HomeTypewriter></HomeTypewriter>
            <BannerCarousel></BannerCarousel>     

            <div className="border-gray-300 mx-5 border-dashed border-y-4 lg:my-14 lg:mx-20 mb-10">
                <h1 className="text-5xl py-8 text-center"><span className="acme text-7xl">Explore </span> 
                     the <span className=" sacramento font-semibold text-7xl">Wonders</span>{" "}
                    of{" "}
                    <span className="text-red-600  font-bold font-sans">
                        Southeast Asia
                    </span>
                </h1>
            </div>
            <HomeCountries></HomeCountries>

            <HomeDecor></HomeDecor>

            <div className="border-gray-300 mx-5 border-dashed my-8 border-y-4 lg:my-14 lg:mx-20">
                <h1 className="text-5xl py-8 text-center oleo font-bold"><span className="text-red-600  font-bold font-sans">
                        Discover 
                    </span><span className="josefin"> Like </span>
                      <span className="font-semibold sacramento text-7xl">Never</span>{" "}
                    {" "}
                    Before
                </h1>
            </div>
            <HomeTouristSpot></HomeTouristSpot>

            <div className="border-gray-300 border-dashed mx-5 border-y-4 my-10 lg:my-14 lg:mx-20">
                            <h1 className="text-5xl py-8 text-center"><span className="acme text-7xl">Join </span> 
                                Our <span className=" sacramento font-semibold text-7xl">Community</span>{" "}
                                of{" "}
                                <span className="text-red-600  font-bold font-sans">
                                    Travelers
                                </span>
                            </h1>
             </div>
             <Login></Login>

            <div className="border-gray-300 mx-5 my-8 border-dashed border-y-4 lg:my-14 lg:mx-20 space-y-4">
            <h1 className="text-5xl pt-6 text-center"><span className="acme text-7xl">Reviews </span> 
                     from <span className=" sacramento text-7xl font-bold">Our</span>{" "}
                    {" "}
                    <span className="text-red-600  font-bold font-sans">
                        Adventurers
                    </span>
                </h1>
                <p className="text-center pb-8">
                    Discover why travelers can not stop raving about their
                    experiences with us! Our satisfied users have shared their
                    stories, highlighting unforgettable moments, exceptional
                    service, and the joy of exploring Southeast Asia with our
                    expert guidance. Read on to see why they keep coming back
                    for more adventures.
                </p>
            </div>
            <UserReview></UserReview>
            </Fade>
        </div>
    );
};

export default Home;
