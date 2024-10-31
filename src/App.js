
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Root";
import "./App.css";
import Home from "./Home";
import Header from "./Header.js"

import React, { useState, useEffect } from 'react';

const App = () => {




    return (
      <div className="App">
        <Home/>
      </div>
    );
  };


 // const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

  // const handleOrientationChange = (event) => {
  //   setIsPortrait(event.matches);
  // };

  // useEffect(() => {
  //   const mediaQueryList = window.matchMedia("(orientation: portrait)");
  //   mediaQueryList.addEventListener('change', handleOrientationChange);

  //   return () => {
  //     mediaQueryList.removeEventListener('change', handleOrientationChange);
  //   };
  // }, []);

// return (
//   <div className="App">
//     <header className="App-header">
//       <RouterProvider router={router} />
//     </header>
//   </div>
// );

// const router = createBrowserRouter([
//   {
//     path: "/cgweb",
//     element: <Root/>,
//     children: [
//       { path: "Home", element: <Home/> },
//       { path: "about", element: <About /> },
//       { path: "blog/:id?", element: <Blog /> },
//       { path: "Illustration", element: <Illustration /> },
//       { path: "CodeProject", element: <CodeProject /> },
//     ],
//   },
  
// ]);



export default App;

