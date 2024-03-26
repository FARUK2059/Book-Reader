import { MdStarOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeCard = ({ allBook }) => {

    console.log(allBook);

    const { image, category, bookName, authorName, rating, bookId } = allBook;

    return (
        <div className="border rounded-2xl  p-6 ">
            <Link to={`/bookDetails/${bookId}`}>
                <div className="p-6 ">
                    <div className="grid bg-gray-200 rounded-2xl p-6  justify-center  ">
                        <img className="rounded-3xl h-40" src={image} alt="" />
                    </div>
                    <div className="mt-2 flex gap-10">

                        {
                            allBook.tags.map((tag) =>
                                <>
                                    <div className="">
                                        <h2 className="font-extrabold text-[16px] bg-[#23be0a0d] rounded-full text-[#474747] grid   p-2 text-center justify-center items-center ">{tag}</h2>
                                    </div>
                                </>

                            )
                        }


                    </div>
                    <div className="p-2">
                        <h2 className="font-extrabold text-2xl text-[#474747]">{bookName}</h2>
                    </div>
                    <div className="p-2">
                        <h2 className="text-[#A3A3A3] font-medium text-[16px]">By : {authorName}</h2>
                    </div>
                    <hr />
                    <div className="p-2 flex justify-between">
                        <div className="">
                            <h2 className="font-extrabold text-[16px] text-[#474747]">{category}</h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <h2 className="font-extrabold text-[16px] text-[#474747]">{rating}</h2>
                            <div><MdStarOutline /></div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomeCard;