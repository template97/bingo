import "./BingoDecorater.scss";
import React, { useEffect, useState } from "react";
import useBingoList from "../../hooks/useBingoList";
import { IBingoDto } from "../../modal/interface/bingo.interface";
import bingo, { updateBingo } from "../../redux/bingo";
import { useDispatch, useSelector } from "react-redux";

interface Props {}
const BingoDecorater: React.FC<Props> = (props) => {
  const bingoList = useBingoList();
  const bingoId = useSelector((state) => state.bingo.selectedBingoId);
  const dispatch = useDispatch();

  // const [bingoId, setBingoId] = useState<number>(1);
  const [bingoElement, setBingoElement] = useState<IBingoDto>();
  // const [elementContent, setElementContent] = useState<string>('');

  const saveBingoElement = (e: any) => {
    if (!bingoElement) return;

    updateBingo(bingoElement)(dispatch);
  };

  useEffect(() => {
    setBingoElement(bingoList.find((bingo) => bingo.id === bingoId));
  }, [bingoId]);

  return (
    <div className="bingo-decorater-container">
      <div className="bingo-decorater">
        <textarea
          className="bingo-element-text"
          defaultValue={bingoElement?.content}
          onChange={(e) => {
            setBingoElement((prev) => {
              if (!prev) return;
              return { ...prev, content: e.target.value };
            });
          }}
          onBlur={saveBingoElement}
        ></textarea>
      </div>
    </div>
  );
};

export default BingoDecorater;
