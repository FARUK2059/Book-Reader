import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-6xl p-8">
            <h2>Oops!!!</h2>
            <p className="text-2xl p-4">server error</p>
            <Link to="/"> <button className="btn btn-primary">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;