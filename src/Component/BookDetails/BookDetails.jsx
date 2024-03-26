

const BookDetails = () => {

    const books = useLoaderData();
        console.log(books);
        

    return (
        <div>
            <h2>amar sunar bangla</h2>
        </div>
    );
};

export default BookDetails;



// const jobs = useLoaderData();
//     const { id } = useParams();
//     const idInt = parseInt(id);
//     const job = jobs.find(job => job.id === idInt)
//     console.log(job);