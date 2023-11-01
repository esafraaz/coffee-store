import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import AddCoffee from "./pages/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./pages/UpdateCoffee/UpdateCoffee.jsx";
import CoffeeDetails from "./pages/coffeeDetails/CoffeDetails.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import AuthProvider from "./pages/AuthProvider/AuthProvider.jsx";
import ShowUsers from "./pages/showUsers/ShowUsers.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("http://localhost:5000/coffees"),
			},
			{
				path: "/coffees/:id",
				element: <CoffeeDetails></CoffeeDetails>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/coffees/${params.id}`),
			},
		],
	},
	{
		path: "addCoffee",
		element: <AddCoffee></AddCoffee>,
	},
	{
		path: "update/:id",
		element: <UpdateCoffee></UpdateCoffee>,
		loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
	},
	{
		path: "sign-up",
		element: <SignUp></SignUp>,
	},
  {
    path: 'users',
    element: <ShowUsers></ShowUsers>

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
