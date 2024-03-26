import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-4 mb-4">
            <div className="hero  bg-[#1313130d] rounded-2xl p-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.postimg.cc/c4vY4CXz/pngwing-1.png" className="max-w-sm rounded-lg shadow-2xl h-60" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <div className=" mt-6">
                            <Link to="/listedBooks"><button className="btn btn-primary ">View The List</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;