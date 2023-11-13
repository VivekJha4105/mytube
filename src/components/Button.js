import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-1 px-3 m-2 w-auto text-black bg-gray-400 rounded-lg hover:bg-gray-800 hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
