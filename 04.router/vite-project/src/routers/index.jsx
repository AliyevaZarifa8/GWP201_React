import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../companents/About";
import Blog from "../companents/Blog";
import Contact from "../companents/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
