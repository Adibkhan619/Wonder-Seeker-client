import Marquee from "react-fast-marquee";

const UserCard = ({ user }) => {
    const { name, review, img } = user;
    return (
        <div className="flex  mx-2 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <img
                src={img}
                alt=""
                className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">
                        {name}
                    </h2>
                    <p className="px-5 text-xs sm:text-base text-gray-400 dark:text-gray-600">
                        {review}
                    </p>
                </div>
                {/* <div className="flex justify-center pt-2 space-x-4 align-center">
			<a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md text-gray-100 dark:text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
				
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md text-gray-100 dark:text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
				
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md text-gray-100 dark:text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
				
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md text-gray-100 dark:text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">

			</a>
		</div> */}
            </div>
        </div>
    );
};

export default UserCard;
