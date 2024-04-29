// import Swiper core and required modules
import { Navigation, Pagination,  A11y } from "swiper/modules";
// import Swiper from 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Drawer from "./Drawer";

function BannerCarousel() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full z-0 mb-20"
        >
            <SwiperSlide>
                <div>
                    <div
                        className="hero lg:min-h-[600px]"
                        style={{
                            backgroundImage:
                                "url(https://i.postimg.cc/yYPY8m85/mantas-hesthaven-g1-Wdc-Kc-V3w-unsplash.jpg)",
                        }}
                    >
                        <div className="hero-overlay bg-gray-900 bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-7xl font-bold oleo">
                                    Start Endless Adventure
                                </h1>
                                <p className="mb-5">
                                    Embark on a journey of discovery with our
                                    curated collection of travel experiences.
                                    From breathtaking landscapes to vibrant
                                    cultures, our website is your gateway to
                                    endless adventures.{" "}
                                </p>
                                {/* <Link to="/register"><button className="btn btn-primary">Get Started</button>
</Link> */}
                                <Drawer></Drawer>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div
                        className="hero lg:min-h-[600px]"
                        style={{
                            backgroundImage:
                                "url(https://i.postimg.cc/yNd0M42D/diego-jimenez-A-NVHPka9-Rk-unsplash.jpg)",
                        }}
                    >
                        <div className="hero-overlay bg-gray-900 bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-7xl font-bold sacramento">
                                    Embrace the Journey
                                </h1>
                                <p className="mb-5">
                                    Embark on a journey of discovery with our
                                    curated collection of travel experiences.
                                    From breathtaking landscapes to vibrant
                                    cultures, our website is your gateway to
                                    endless adventures.{" "}
                                </p>
                                {/* <Link to="/register"><button className="btn btn-primary">Get Started</button>
</Link> */}
                                <Drawer></Drawer>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div
                        className="hero lg:min-h-[600px]"
                        style={{
                            backgroundImage:
                                "url(https://i.postimg.cc/8zwhXPX8/ivana-cajina-TUXUCVXmj-Qk-unsplash.jpg)",
                        }}
                    >
                        <div className="hero-overlay bg-gray-900 bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-7xl font-bold oleo">
                                    Discover your Inner Self!
                                </h1>
                                <p className="mb-5">
                                    Embark on a journey of discovery with our
                                    curated collection of travel experiences.
                                    From breathtaking landscapes to vibrant
                                    cultures, our website is your gateway to
                                    endless adventures.{" "}
                                </p>
                                {/* <Link to="/register"><button className="btn btn-primary">Get Started</button>
</Link> */}
                                <Drawer></Drawer>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            
            
        </Swiper>
    );
}

export default BannerCarousel;
