import { useEffect, useState } from "react";

const ShowUsers = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/user")
			.then((res) => res.json())
			.then((users) => {
				console.log(users);
				setUsers(users);
			});
	}, []);
	return <div className="container mx-auto my-20 ">
        {
            users.map(user=>{
             return <>
                <p className="bg-red-200 mt-5 p-5">{user.email}</p>
                <p className="bg-red-200 mt-5 p-5">{user.creationTime}</p>
             </>
        })
        }
    </div>;
};

export default ShowUsers;
