import React from "react";
import Profile from "../components/Profile/Profile";

const ProtectedPage = ({ user }) => {
  return (
    <div>
      <Profile cookbooks={user.Cookbook} />
    </div>
  );
};

export default ProtectedPage;
