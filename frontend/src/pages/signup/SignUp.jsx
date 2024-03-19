import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-600"> chat-app-by-axe</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text text-blue-600">
                FullName
              </span>
            </label>
            <input
              type="text"
              placeholder="Dipesh Sedani"
              className="w-full input file-input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text text-blue-600">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input file-input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label" htmlFor="">
              <span className="text-base label-text text-blue-600">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input file-input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label" htmlFor="">
              <span className="text-base label-text text-blue-600">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input file-input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-900 mt-2 inline-block text-blue-600"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//Code snipet for this file
// import { GenderCheckbox } from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-red-600"> chat-app-by-axe</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2" htmlFor="">
//               <span className="text-base label-text">FullName</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Dipesh Sedani"
//               className="w-full input file-input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2" htmlFor="">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input file-input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label" htmlFor="">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Password"
//               className="w-full input file-input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label" htmlFor="">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Confirm Password"
//               className="w-full input file-input-bordered h-10"
//             />
//           </div>
//           <GenderCheckbox />
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-green-600 mt-2 inline-block"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
