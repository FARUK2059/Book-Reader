import { Link } from "react-router-dom";


const Blog = () => {
    return (
        <div className="text-black text-4xl font-extrabold bg-slate-300 p-10 items-center text-center m-4 rounded-3xl">
            <h2>Amar sunar bangla</h2>
            <Link to="/"> <button className="btn btn-primary">Go back to Home</button></Link>
        </div>
    );
};

export default Blog;