import { useLoaderData } from "react-router-dom";
import CoffeeCart from "../../components/coffeeCart/CoffeeCart";

const Home = () => {
	const coffees = useLoaderData();

	return (
		<div className="container mx-auto my-16">
			here is {coffees.length} coffee.
			<div className="grid md:grid-cols-2 gap-5  my-10 ">
				{coffees.map((coffee) => (
					<CoffeeCart key={coffee._id} coffee={coffee}></CoffeeCart>
				))}
			</div>
		</div>
	);
};

export default Home;
