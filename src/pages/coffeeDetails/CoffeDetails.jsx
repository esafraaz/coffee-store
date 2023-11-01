import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {

    const coffee = useLoaderData()
    console.log(coffee)
    return (
        <div>
            {coffee._id}

            <h1>coffee details here.</h1>
        </div>
    );
};

export default CoffeeDetails;