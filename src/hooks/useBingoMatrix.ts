import { IBingoDto } from "./../modal/interface/bingo.interface";
import { useSelector } from "react-redux";
import useBingoList from "./useBingoList";

const useBingoMatrix = (row: number, col: number) => {
  const bingoList: IBingoDto[] = useBingoList();

  let bingoMatrix = [];
  for (let i = 0; i < row; i++) {
    bingoMatrix.push(bingoList.slice(i * col, (i + 1) * col));
  }
  return bingoMatrix;
};

export default useBingoMatrix;
