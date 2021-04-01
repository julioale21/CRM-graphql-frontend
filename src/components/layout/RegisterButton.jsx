import React from "react";
import { Link } from "react-router-dom";
const RegisterButton = ({ session }) => {
  const { role } = session.getUser;
  if (role !== "ADMIN") return null;

  return (
    <Link
      to="/register"
      className="group w-28 p-2 inline-flex items-center text-base font-medium text-green-300 focus:outline-none hover:text-green-400 sm:ml-1"
    >
      Create User
    </Link>
  );
};

export default RegisterButton;
