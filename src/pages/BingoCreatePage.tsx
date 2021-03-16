import React, { useEffect } from "react";
import "./BingoCreatePage.scss";
import BingoCreator from "../components/BingoCreator/BingoCreator";
import { useDispatch } from "react-redux";
import { initBingoList } from "../redux/bingo";
import { INIT_BINGO_LENGHT } from "../utils/util.bingo";
import BingoDecorater from "../components/BingoDecorater/BingoDecorater";

const BingoCreatePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initBingoList(INIT_BINGO_LENGHT)(dispatch);
  }, []);

  return (
    <div className="bingo-create-layout">
      <BingoCreator />
      <BingoDecorater />
    </div>
  );
};

export default BingoCreatePage;
