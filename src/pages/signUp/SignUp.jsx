import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
    const {createUser, setUser} = useContext(AuthContext)
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result=> {
                setUser(result.user)
                console.log(result.user)
                const email = result.user.email;
                const creationTime = result.user.metadata.creationTime
                const userData = {email, creationTime}
                fetch('http://localhost:5000/user',{
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(userData)

                })
                .then(res=> res.json())
                .then(data=> {
                    console.log(data)
                    if(data){
                        alert('user has been Created.')
                    }
                })

            })
            .catch(error =>{
                console.log(error)
            })

    }


	return (
		<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" name="submit" value="Submit"/>
        </div>
        
      </form>
    </div>
  </div>
</div>
	);
};

export default SignUp;
