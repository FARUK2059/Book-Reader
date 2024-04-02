import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { MdOutlineContactPage } from "react-icons/md";
import {  Link, useLoaderData } from "react-router-dom";
import { getWishListBookData } from "../../Utility/WishList";


const WishlistBooks = () => {
    const [wishBookListed, setWishBookListed] = useState([]);

    const wishlistBooks = useLoaderData();
    // console.log(wishlistBooks);

    useEffect(() => {
        const storBookId = getWishListBookData();
            if (wishlistBooks.length > 0) {
                const wishBookListed = wishlistBooks.filter(wishbookIds => storBookId.includes(wishbookIds.bookId))
                // console.log(storBookId, wishBookListed);
                setWishBookListed(wishBookListed);
            }
    }, [])

    return (
        <div className="grid p-6 gap-6">

        {
            wishBookListed.map(book =>
                <div key={book.bookId}>

                    <div className="grid lg:grid-cols-4  p-4 lg:gap-10 gap-4 border rounded-2xl ">
                        <div className="grid lg:col-span-1 rounded-2xl justify-center bg-[#1313130d] p-6 my-auto">
                            <img src={book.image} alt="" />
                        </div>

                        {/* right side  */}
                        <div className="grid lg:col-span-3 my-auto mt-1">
                            <h2 className="text-[#131313] lg:text-4xl text-lg font-extrabold ">{book.bookName}</h2>
                            <h4 className="text-[#131313cc] font-semibold lg:text-xl text-[16px]  mt-2 mb-2">By : {book.authorName}</h4>
                            <div className="mt-2 flex lg:gap-10 gap-2 items-center mb-4">
                                <span className="text-[#131313] font-bold">Tag :</span>
                                {
                                    book.tags.map((tags) =>
                                        <>
                                            <div className="">

                                                <h2 className="font-extrabold text-[16px] bg-[#23be0a0d] rounded-full text-[#474747] grid   p-2 text-center justify-center items-center ">  {tags}</h2>
                                            </div>
                                        </>

                                    )
                                }
                            </div>
                            <div className="lg:flex lg:gap-12 mb-4">
                                <div className="flex gap-4  items-center">
                                    <span><FiUsers /></span>
                                    <h2 className="text-[#13131399] font-bold">Publisher: <span className="text-black">{book.publisher}</span></h2>
                                </div>
                                <div className="flex gap-4  items-center">
                                    <span><MdOutlineContactPage /></span>
                                    <h2 className="text-[#13131399] font-bold">Page: {book.totalPages}</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="lg:mt-4 lg:flex gap-6">
                                <div className="p-2">
                                    <h2 className="font-extrabold text-[16px] bg-[#328eff26] rounded-full text-[#328EFF] grid p-2 text-center justify-center items-center "> Category: {book.category} </h2>
                                </div>
                                <div className="p-2">
                                    <h2 className="font-extrabold text-[16px] bg-[#23be0a0d] rounded-full text-[#474747] grid   p-2 text-center justify-center items-center "> Rating: {book.rating} </h2>
                                </div>
                                <div className="p-2">
                                    <Link to={`/bookDetails/${book.bookId}`}><h2 className="font-extrabold text-[16px] bg-[#23BE0A] rounded-full text-[#FFFFFF] grid   p-2 text-center justify-center items-center "> View Details </h2></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            )
        }



    </div>
    );
};

export default WishlistBooks;