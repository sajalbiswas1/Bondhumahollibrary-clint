import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorCatch from "../ErrorCatch.jsx/ErrorCatch";
import Home from "../Page/HomePage/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorCatch></ErrorCatch>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        }
      ]
    },
  ]);
  export default router;