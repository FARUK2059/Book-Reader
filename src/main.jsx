import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Component/Home/Home.jsx';
import Root from './Component/Root/Root.jsx';
import ListedBooks from './Component/ListedBooks/ListedBooks.jsx';
import PagestoRead from './Component/PagestoRead/PagestoRead.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Blog from './Component/Blog/Blog.jsx';
import BookDetails from './Component/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pagestoread",
        element: <PagestoRead></PagestoRead>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('https://raw.githubusercontent.com/FARUK2059/jsonfile2059book/main/FJSON')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
