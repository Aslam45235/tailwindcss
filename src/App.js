import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contactus";
import Legalpage from "./Components/Legalpage";
import Services from "./Components/Services";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/portfolio",
      element: <Portfolio />
    },
    {
      path: "/contact",
      element: <Contact />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
