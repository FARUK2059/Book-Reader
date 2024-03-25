import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-4 mb-4">
            <div className="hero  bg-[#1313130d] rounded-2xl p-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
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