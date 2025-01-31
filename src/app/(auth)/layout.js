import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      {children}
      <footer className=" text-center">Footer</footer>
    </div>
  );
};

export default AuthLayout;
