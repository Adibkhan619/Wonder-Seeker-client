
import UserReview from "./style/UserReview";
import Banner from "./style/Banner";
import HomeTypewriter from "./style/HomeTypewriter";
import Login from "./Login";
import HomeCountries from "./HomeCountries";
import HomeTouristSpot from "./HomeTouristSpot";

const Home = () => {

    return (
        <div className="mukta">
            <Banner></Banner>
            <HomeTypewriter></HomeTypewriter>
            <Login></Login>
            {/* <BannerCarousel></BannerCarousel> */}

            <div className="border-gray-300 border-dashed border-y-4 lg:my-14 lg:mx-20">
                <h1 className="text-5xl py-8 text-center">
                    Explore the <span className="font-semibold">Wonders</span>{" "}
                    of{" "}
                    <span className="text-red-600  font-bold font-sans">
                        Southeast Asia
                    </span>
                </h1>
            </div>
            <HomeCountries></HomeCountries>

            <div className="border-gray-300 border-dashed border-y-4 lg:my-14 lg:mx-20">
                <h1 className="text-5xl py-8 text-center oleo font-bold"><span className="text-red-600  font-bold font-sans">
                        Discover 
                    </span><span className="josefin"> Like </span>
                      <span className="font-semibold sacramento text-7xl">Never</span>{" "}
                    {" "}
                    Before
                </h1>
            </div>
            <HomeTouristSpot></HomeTouristSpot>


            <div className="border-gray-300 border-dashed border-y-4 lg:my-14 lg:mx-20 space-y-4">
                <h1 className="text-5xl pt-8 text-center font-semibold">
                    <span className="text-red-600  font-bold font-sans">
                        Reviews
                    </span>{" "}
                    from Our Adventurers
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
        </div>
    );
};

export default Home;
