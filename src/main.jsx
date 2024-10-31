import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error/Error.jsx";
import ListedBook from "./components/ListedBook/ListedBook.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import BooksBanner from "./components/BooksBanner/BooksBanner.jsx";
import Fiction from "./components/Fiction/Fiction.jsx";
import ReadPages from "./components/ReadBooks/ReadPages.jsx";
import ReadBooks from "./components/ListedBook/List/ReadBooks.jsx";
import WishList from "./components/ListedBook/List/WishList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <BooksBanner />,
      },
      {
        path: "/list",
        element: <ListedBook></ListedBook>,
        children: [
          {
            path: "/list",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "/list/wishList",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: "/read",
        element: <ReadPages></ReadPages>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/fiction/:bookId",
        loader: async ({ params }) => {
          const res = await fetch("Book.json");
          const books = await res.json();
          return books;
        },
        element: <Fiction></Fiction>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
