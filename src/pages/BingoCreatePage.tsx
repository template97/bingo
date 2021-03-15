import React, { useEffect } from "react";
import "./BingoCreatePage.scss";
import BingoCreator from "../components/BingoCreator/BingoCreator";
import { useDispatch } from "react-redux";
import { initBingo } from "../redux/bingo";
import { INIT_BINGO_LENGHT } from "../utils/util.bingo";

const BingoCreatePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initBingo(INIT_BINGO_LENGHT)(dispatch);
  }, []);

  return (
    <div className="bingo-create-layout">
      <BingoCreator />
    </div>
  );
};

export default BingoCreatePage;
