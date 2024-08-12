import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <>
      <form className="flex flex-col gap-4 mb-4">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <IoIosSearch className="cursor-pointer" />
        </label>
      </form>
    </>
  );
};

export default SearchBar;
