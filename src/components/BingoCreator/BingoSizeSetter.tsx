import React, { useState } from "react";
import "./BingoSizeSetter.scss";

interface Props {
  row: number;
  col: number;
  onRowSelect: (row: number) => void;
  onColSelect: (col: number) => void;
}

const BingoSizeSetter: React.FC<Props> = (props) => {
  const rowSizeList = [3, 4, 5];
  const colSizeList = [3, 4, 5];

  return (
    <div className="bingo-size-setter">
      <div className="size-setter-container">
        <div
          className="size-setter row"
          style={{ transform: "translateY(" + (4 - props.row) * 32 + "px)" }}
        >
          {rowSizeList.map((row, i) => (
            <div
              className={`size-setter-element ${
                props.row === row ? "selected" : ""
              }`}
              onClick={() => {
                props.onRowSelect(row);
              }}
              key={i}
            >
              {row}
            </div>
          ))}
        </div>
      </div>
      -
      <div className="size-setter-container">
        <div
          className="size-setter col"
          style={{ transform: "translateY(" + (4 - props.col) * 32 + "px)" }}
        >
          {colSizeList.map((col, i) => (
            <div
              className={`size-setter-element ${
                props.col === col ? "selected" : ""
              }`}
              onClick={() => {
                props.onColSelect(col);
              }}
              key={i}
            >
              {col}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BingoSizeSetter;
