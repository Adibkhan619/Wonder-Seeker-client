

import Drawer from "./Drawer";

{/* <BannerCarousel></BannerCarousel> */}
const Banner = () => {
    return (
        <div>
            <div className="hero  lg:min-h-[600px]" style={{backgroundImage: 'url(https://i.postimg.cc/HL38CFhP/felix-rostig-Um-V2wr-Vbq8-unsplash.jpg)'}}>
            
  <div className="hero-overlay bg-gray-900 bg-opacity-30"></div>
  <div className="hero-content  text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl text-gray-50 acme font-bold ">Explore Your World</h1>
      <p className="mb-5">
Embark on a journey of discovery with our curated collection of travel experiences. From breathtaking landscapes to vibrant cultures, our website is your gateway to endless adventures. </p>
{/* <Link to="/register"><button className="btn btn-primary">Get Started</button>
</Link> */}
      <Drawer></Drawer>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;