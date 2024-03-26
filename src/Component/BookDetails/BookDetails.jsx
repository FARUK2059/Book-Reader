import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    // console.log(books);
    const {bookId} = useParams();
    const bookInt = parseInt(bookId);
    // console.log(bookInt);
    const book = books?.find((book) => book.bookId === bookInt)
    console.log(book);



    return (
        <div>
            <h2>amar sunar bangla</h2>
        </div>
    );
};

export default BookDetails;
