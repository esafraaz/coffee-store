import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee }) => {
	const handleView = (id) => {
		console.log(id);
	};

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				
                fetch(`http://localhost:5000/coffees/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount>0){
                        Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                    }
                })
            }
		});
	};

	const { _id, name, supplier, category, chef, test, details } = coffee;
	return (
		<div className="flex w-96 justify-between border-red-500 border p-3">
			<div className="">
				<h1>
					<span className="font-bold">Name:</span> {name}
				</h1>
				<h1>
					{" "}
					<span className="font-bold">Supplier: </span> {supplier}
				</h1>
				<h1>
					{" "}
					<span className="font-bold">Category: </span> {category}
				</h1>
				<h1>
					{" "}
					<span className="font-bold"> Chef: </span> {chef}
				</h1>
				<h1>
					<span className="font-bold">Test: </span> {test}
				</h1>
				<p>
					<span className="font-bold">Details:</span> {details}{" "}
				</p>
			</div>
			<div className="gap-2 flex flex-col ">
				<button
					onClick={() => handleView(_id)}
					className="btn  bg-red-600 rounded-md p-2"
				>
					<NavLink to={`coffees/${_id}`}>View</NavLink>
				</button>
				<button className="btn  bg-red-600 rounded-md p-2">
					<NavLink to={`update/${_id}`}>update</NavLink>
				</button>
				<button
					onClick={() => handleDelete(_id)}
					className="btn btn-danger bg-red-600 rounded-md p-2"
				>
					delete
				</button>
			</div>
		</div>
	);
};

export default CoffeeCart;
