import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error/Error.jsx'
import ListedBook from './components/ListedBook/ListedBook.jsx'
import ReadsBook from './components/ReadBooks/ReadsBook.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import BooksBanner from './components/BooksBanner/BooksBanner.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element: <BooksBanner/>
      },
      {
        path:'/list',
        element: <ListedBook></ListedBook>
      },
      {
        path: '/read',
        element: <ReadsBook></ReadsBook>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
