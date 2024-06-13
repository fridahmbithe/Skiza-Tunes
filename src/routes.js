import React from "react";
// import { Navigate } from "react-router";
import Homepage from "./Components/Homepage";
import MainLayout from "./Components/MainLayout";
import About from "./Components/About";
import Footer from "./Components/Footer";
// import About from "./Components/pages/About";
// import NoPage from "./Components/pages/NoPage";

const routes = [
	{
		path: "/",
		element: <MainLayout/>,
		children: [
			{ path: "", element: <Homepage /> },
			{ path: "about", element: <About/> },
			{ path: "footer", element: <Footer/> },
			// { path: "404", element: <NoPage /> },
			// { path: "*", element: <Navigate to="/404" /> },
		],
	},
];

export default routes;
