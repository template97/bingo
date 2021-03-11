import React from "react";
import { useHistory } from "react-router";
import "./MainHeader.scss";

interface Props {}

const MainHeader: React.FC<Props> = (props) => {
  const history = useHistory();

  const navigators = [
    {
      string: "Create Bingo",
      path: "create",
    },
    {
      string: "Go to Main",
      path: "/",
    },
    {
      string: "Sign In",
      path: "signin",
    },
  ];

  return (
    <div className="main-header">
      Welcome To Bingo World!
      {navigators.map((item) => (
        <button onClick={() => history.push(item.path)}>{item.string}</button>
      ))}
    </div>
  );
};

export default MainHeader;
