import React from "react";
import "./BingoCreatePage.scss";
import BingoCreator from "../components/BingoCreator/BingoCreator";

const BingoCreatePage: React.FC = () => {
  return (
    <div className="bingo-create-layout">
      <BingoCreator />
    </div>
  );
};

export default BingoCreatePage;
