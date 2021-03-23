import React, { Fragment } from "react";

const Spinner = ({ textColor }) => {
  return (
    <div className="w-full mt-5 h-screen z-50 overflow-hidden opacity-75 flex flex-col items-center justify-start">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className={`text-center text-xl font-semibold ${textColor} font-bold`}>
        Loading...
      </h2>
      <p className={`w-1/3 text-center ${textColor}`}>
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  );
};

Spinner.defaultProps = {
  textColor: "text-green-900",
};

export default Spinner;
