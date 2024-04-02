// import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookStor } from "../../Utility/LocalStordata";
import { saveWishListBookStor } from "../../Utility/WishList";

const BookDetails = () => {

    const handelAddRead = () => {
        saveBookStor(bookInt);
    }

    const handlAddWishlist = () => {
        saveWishListBookStor(bookInt);
        
    }

    // bookDetails data loaded 
    const books = useLoaderData();
    // console.log(books);
    const { bookId } = useParams();
    const bookInt = parseInt(bookId);
    // console.log(bookInt);
    const book = books?.find((book) => book.bookId === bookInt)
    // console.log(book);

    const { image, bookName, authorName, category, review, totalPages, publisher, yearOfPublishing, rating, } = book


    return (
        <div className="grid lg:grid-cols-2 p-4 gap-8 mt-6 mb-6">
            <div className="grid justify-center items-center text-center bg-[#1313130d] p-12 rounded-2xl">
                <img className="min-h-96" src={image} alt="" />
            </div>
            <div className=" gap-2">
                <h2 className="text-[#131313] lg:text-4xl text-3xl font-extrabold ">{bookName}</h2>
                <h4 className="text-[#131313cc] font-semibold text-xl mt-2 mb-2">By : {authorName}</h4>
                <hr />
                <h4 className="text-[#131313cc] font-semibold text-xl mt-2 mb-2"> {category}</h4>
                <hr />
                <h5 className="text-[#131313b3] font-mediumtext-[16px] mt-2 mb-2"><span className="text-[#131313] font-bold">Review :</span> {review}</h5>
                <div className="mt-4 flex gap-10 items-center mb-4">
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
                <hr />
                <div className="flex gap-16 mt-2">
                    <h2>Number of Pages :</h2>
                    <h2 className="text-[#131313] font-bold">{totalPages}</h2>
                </div>
                <div className="flex gap-28 mt-2">
                    <h2>Publisher: :</h2>
                    <h2 className="text-[#131313] font-bold">{publisher}</h2>
                </div>
                <div className="flex gap-14 mt-2">
                    <h2>Year of Publishing :</h2>
                    <h2 className="text-[#131313] font-bold">{yearOfPublishing}</h2>
                </div>
                <div className="flex gap-32 mt-2">
                    <h2>Rating :</h2>
                    <h2 className="text-[#131313] font-bold">{rating}</h2>
                </div>
                <br />
                <br />
                <div className="flex gap-4">
                    <button onClick={handelAddRead} class="btn btn-primary bg-slate-100 text-black">Read</button>
                    <button onClick={handlAddWishlist} class="btn btn-primary bg-[#50B1C9] text-[#FFFFFF]">Wishlist</button>
                    <Link to="/"> <button className="btn btn-primary">Go back to Home</button></Link>
                    <Link to="/listedBooks"> <button className="btn btn-primary">Go Listed Books</button></Link>
                    
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BookDetails;
