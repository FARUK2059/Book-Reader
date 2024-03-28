import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

    const [tab, setTab] = useState(0);

    return (
        <div>
            <div className="text-black text-4xl font-extrabold bg-slate-300 p-6 items-center text-center m-1 rounded-3xl">
                <h2>Books</h2>
            </div>
            <div className="grid justify-center ]">
                <div className="dropdown dropdown-bottom ]">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-[#FFFFFF] font-bold text-[18px]">Short By <span><IoIosArrowDown /></span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 rounded-box w-52">
                        <li onClick={() => handlBooksFilter('Rating')} ><a>Rating</a></li>
                        <li onClick={() => handlBooksFilter('Number of pages')} ><a>Number of pages</a></li>
                        <li onClick={() => handlBooksFilter('Publishar year')} ><a>Publishar year</a></li>
                    </ul>
                </div>
            </div>


            {/* tab section  */}
            <div className="p-6 mt-6">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:text-gray-800">
                    <Link to="" onClick={() => setTab(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <span>Read Books</span>
                    </Link>
                    <Link to={`wishlistbooks`} onClick={() => setTab(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tab === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <span>Wishlist Books</span>
                    </Link> 
                </div>
                <hr />
            </div>

            <Outlet></Outlet>

        </div>
    );
};

export default ListedBooks;