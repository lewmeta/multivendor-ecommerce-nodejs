import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { admin_login } from "../../store/Reducers/authReducer";

const AdminLogin = () => {

  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
    // console.log(state);
  };
  return (
    <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 p-6 min-h-screen">
      <div className="grid lg:grid-cols-[1fr_.75fr] md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md min-h-full">
        <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
        {/* <img src="https://readymadeui.com/signin-image.webp" class="lg:max-w-[90%] w-full h-full object-contain block mx-auto" alt="login-image" /> */}
        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="lg:max-w-[90%] w-full h-full object-contain block mx-auto" alt="login-image" />

        </div>

        <div className="sm:p-8 p-4 w-full h-full">
          <form className="w-full" onSubmit={onSubmit}>
            <div className="mb-5 flex items-center justify-center">
            <img src="/images/logo.png" className="object-contain block w-[150px] h-auto" alt="login-image" />
            </div>

            <div className="grid gap-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <input
                  name="email"
                  onChange={inputHandler}
                  value={state.email}
                  type="text"
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  onChange={inputHandler}
                  value={state.password}
                  type="password"
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="py-3 w-full px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
