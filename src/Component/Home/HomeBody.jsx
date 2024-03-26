
import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";


const HomeBody = () => {

    const [bookList, setbookList] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/FARUK2059/jsonfile2059book/main/FJSON')
            .then(res => res.json())
            .then(data => setbookList(data));
    }, []);

    // console.log(bookList);


    return (
        <div className="mb-6">
            <div className="text-black text-4xl font-extrabold mb-2 p-10 items-center text-center m-4 rounded-3xl">
                <h2>Books</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {
                    bookList.map(allBook => <HomeCard key={allBook.bookId} allBook={allBook}></HomeCard>)
                }
            </div>

        </div>
    );
};

export default HomeBody;