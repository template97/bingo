import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useBingoList from "../../hooks/useBingoList";
import useBingoMatrix from "../../hooks/useBingoMatrix";
import { IBingoDto } from "../../modal/interface/bingo.interface";
import { selectBingo } from "../../redux/bingo";
import "./BingoCreator.scss";
import BingoSizeSetter from "./BingoSizeSetter";

interface Props {}

const BingoCreator: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const [row, setRow] = useState(4);
  const [col, setCol] = useState(4);
  const bingoList: IBingoDto[][] = useBingoMatrix(row, col);
  const selectedBingoId = useSelector((state) => state.bingo.selectedBingoId);

  const getBingo = () => {
    return (
      <div className="bingo-container">
        {bingoList &&
          bingoList.map((bingoRow) => (
            <div className="bingo-row-element">
              {bingoRow.map((bingoElement, i) => (
                <div
                  className={`bingo-element ${
                    selectedBingoId === bingoElement.id ? "selected" : ""
                  }`}
                  key={i}
                  onClick={() => {
                    selectBingo(bingoElement.id)(dispatch);
                  }}
                >
                  {bingoElement.id}
                  {bingoElement.content}
                </div>
              ))}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="bingo-creator-container">
      <BingoSizeSetter
        row={row}
        col={col}
        onRowSelect={(row) => {
          setRow(row);
        }}
        onColSelect={(col) => {
          setCol(col);
        }}
      />
      {getBingo()}
    </div>
  );
};

export default BingoCreator;
