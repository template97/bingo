import { IBingoDto } from "./../../modal/interface/bingo.interface";

export interface BingoDataState {
  pending: boolean;
  error: boolean;

  bingoList: IBingoDto[];
}
