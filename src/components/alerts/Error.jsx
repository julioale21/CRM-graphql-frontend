import React, { Fragment } from "react";

const Error = ({ error }) => {
  if (error.message) {
    error = error.message.replace("GraphQL error: ", "");
  }

  return (
    <Fragment>
      <div className="flex justify-start items-center my-1 font-medium py-1 px-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-300 mb-3">
        <div slot="avatar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-alert-octagon w-5 h-5 mx-2"
          >
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <div className="text-sx font-normal  max-w-full flex-initial ml-5">
          <p className="font-bold">There is an error.</p>
          <p>{error}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Error;
