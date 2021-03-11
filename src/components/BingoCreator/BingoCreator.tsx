import React, { useState } from "react";
import "./BingoCreator.scss";
import BingoSizeSetter from "./BingoSizeSetter";

interface Props {}

const BingoCreator: React.FC<Props> = (props) => {
  const [row, setRow] = useState(4);
  const [col, setCol] = useState(4);

  const getBingoRow = () => {
    let rowElement = [];
    for (let i = 0; i < col; i++) {
      rowElement.push(i);
    }

    return (
      <div className="bingo-row-element">
        {rowElement.map((item) => (
          <div className="bingo-element"></div>
        ))}
      </div>
    );
  };

  const getBingo = () => {
    let bingoElement = [];
    for (let i = 0; i < row; i++) {
      bingoElement.push(i);
    }

    return (
      <div className="bingo-container">
        {bingoElement.map((item) => getBingoRow())}
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
