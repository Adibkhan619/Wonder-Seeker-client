import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/V66rsDys/david-marcu-78-A265w-Pi-O4-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60">
    
  </div>
  <div className="hero-content items-center text-center text-neutral-content">
    <div className="max-w-md">
        <img className="h-64 opacity-70" src="https://i.postimg.cc/kgXjpNx9/pngwing-com-3.png" alt="" />
      <h1 className="mb-5 text-7xl font-bold acme text-gray-800 underline">404</h1>
      <p className="mb-5 text-4xl oleo">Page Not Found</p>
      <Link to="/">
        <button className="btn btn-primary">Get Back</button>
      </Link>
      
    </div>
  </div>
</div>
    );
};

export default Error;