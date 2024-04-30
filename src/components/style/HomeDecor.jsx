const HomeDecor = () => {
    return (
        <div className="lg:my-28 mt-10 mx-5">
            <div className="flex lg:mx-40 card lg:flex-row gap-10 items-center">
                <div>
                    <img
                        className="lg:w-[800px] w-[300px]"
                        src="https://i.postimg.cc/3RKvmXP4/pngwing-com-1.png"
                        alt=""
                    />
                </div>
                <div>
                    <h1 className="acme text-7xl">
                        Discover Hidden <span className="text-red-700">Treasures</span>
                    </h1>
                    <p className="text-lg oleo">
                        {" "}
                        Navigate through our meticulously crafted map to unearth
                        hidden gems, from pristine beaches to bustling city
                        scapes. Let curiosity be your compass as you embark on a
                        journey of discovery and wonder with us.
                    </p>
                </div>
                {/* */}
            </div>
            <div className="flex items-center lg:flex-row card lg:mx-40 flex-col-reverse  px-2 mt-5 gap-5">
                <div>
                    <h1 className="oleo text-7xl">Radiant <span className="text-red-700">Moments</span>  with loved ones</h1>
                    <p className="acme ">
                        Capturing the essence of joy and companionship, our
                        image portrays two beaming couples sharing laughter and
                        creating memories together. In a world filled with
                        fleeting moments, these smiles stand as a testament to
                        the enduring bonds of friendship and love.
                    </p>
                </div>
                <img className="lg:h-[500px] lg:w-[700px] md:h-[300px] md:w-[500px]"
                    src="https://i.postimg.cc/R0hXrnSH/pngwing-com-2.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default HomeDecor;
