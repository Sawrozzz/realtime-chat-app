import React, { useState } from "react";
import CheckBox from "./CheckBox";
import useSignUp from "../../hooks/useSignUp";

const Signup = () => {
   const [value, setValue] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
   });

  const { Signup , loading } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Signup(value);  
  };

  const handleCheckbox = (gender) => {
    setValue({ ...value,gender})
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-4 sm:p-12 max-w-2xl sm:max-w-xl md:max-w-lg lg:max-w-md xl:max-w-sm 2xl:max-w-xs rounded shadow-xl flex flex-col gap-5">
        <h1 className="text-2xl text-wrap text-center font-bold mb-4 ">
          Signup Here👇
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mb-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                value={value.fullName}
                onChange={(e) =>
                  setValue({ ...value, fullName: e.target.value })
                }
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                value={value.username}
                onChange={(e) =>
                  setValue({ ...value, username: e.target.value })
                }
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={value.password}
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
                value={value.confirmPassword}
                onChange={(e) =>
                  setValue({ ...value, confirmPassword: e.target.value })
                }
              />
            </label>
            <CheckBox
              onCheckboxChange={handleCheckbox}
              selectedGender={value.gender}
            />
          </div>
          <a href="/login" className="text-center mb-5">
            Already have an account !!
          </a>
          <div className="flex items-center justify-between">
            <button className="btn" disabled ={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
