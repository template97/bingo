import React, { useState } from "react";
import useBingoList from "../../hooks/useBingoList";
import useBingoMatrix from "../../hooks/useBingoMatrix";
import { IBingoDto } from "../../modal/interface/bingo.interface";
import "./BingoCreator.scss";
import BingoSizeSetter from "./BingoSizeSetter";

interface Props {}

const BingoCreator: React.FC<Props> = (props) => {
  const [row, setRow] = useState(4);
  const [col, setCol] = useState(4);
  const bingoList: IBingoDto[][] = useBingoMatrix(row, col);

  const getBingo = () => {
    return (
      <div className="bingo-container">
        {bingoList &&
          bingoList.map((bingoRow, i) => (
            <div className="bingo-row-element">
              {bingoRow.map((bingoElement) => (
                <div className="bingo-element" key={i}>
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
