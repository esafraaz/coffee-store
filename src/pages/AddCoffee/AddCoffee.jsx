const AddCoffee = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const test = form.test.value;
        const details = form.details.value;

        const coffeeData = { name, supplier, category, chef, test , details}
        console.log(coffeeData)

        fetch('http://localhost:5000/coffees',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(coffeeData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }

	return (
		<div>
            <h1>ADD A COFFEE.</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<div className="flex">
					<div className="flex flex-col w-full gap-10 align-middle items-center justify-center mt-48 p-7  bg-slate-400 border rounded-md mx-auto">
						<div className=" flex flex-col gap-3">
							<label>
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Enter Your coffee Name."
								className="input pl-5 input-bordered"
								required
							/>
						</div>
						<div className=" flex flex-col gap-3">
							<label className="label">
								<span className="label-text ">Supplier</span>
							</label>
							<input
								type="text"
								placeholder="Enter Your supplier"
								name="supplier"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control ">
							<label className="label">
								<span className="label-text ">Category</span>
							</label>
							<input
								type="text"
								placeholder="Enter Your Category"
								name="category"
								className="input input-bordered"
								required
							/>
						</div>
					</div>
					<div className="flex flex-col w-full gap-10 align-middle items-center justify-center mt-48 p-7  bg-slate-400 border rounded-md mx-auto">
						<div className="form-control">
							<label>
								<span className="label-text">Chef</span>
							</label>
							<input
								type="text"
								name="chef"
								placeholder="Enter Your chef Name."
								className="input pl-5 input-bordered"
								required
							/>
						</div>
						<div className="form-control ">
							<label className="label">
								<span className="label-text ">Test</span>
							</label>
							<input
								type="text"
								placeholder="Enter Your coffee test."
								name="test"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control ">
							<label className="label">
								<span className="label-text ">Details</span>
							</label>
							<input
								type="text"
								placeholder="Enter Your Category"
								name="details"
								className="input input-bordered"
								required
							/>
						</div>
					</div>
				</div>

				<input className="mx-auto self-center bg-red-300 rounded-sm px-3 py-1 font-extrabold" type="submit" value="submit" />
			</form>
		</div>
	);
};

export default AddCoffee;
