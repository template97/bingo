import { IBingoDto } from "./../modal/interface/bingo.interface";
import { useSelector } from "react-redux";

const useBingoList = () => {
  const bingoList: IBingoDto[] = useSelector((state) => state.bingo.bingoList);
  return bingoList;
};

export default useBingoList;
