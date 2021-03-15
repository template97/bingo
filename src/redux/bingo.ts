import { IBingoDto } from "./../modal/interface/bingo.interface";
import { Dispatch } from "redux";
import { handleActions } from "redux-actions";
import { BingoDataState } from "./interface/bingoInterface";

/* Actions */
const INIT_BINGO = "BINGO/INIT_BINGO";

export const initBingo = (length: number) => (dispatch: Dispatch): void => {
  dispatch({
    type: INIT_BINGO,
    payload: length,
  });
};

const initialState: BingoDataState = {
  pending: false,
  error: false,

  bingoList: [],
};

/* Reducer */
export default handleActions<BingoDataState, any>(
  {
    [INIT_BINGO]: (state: BingoDataState, action: any) => {
      let bingoList: IBingoDto[] = [];
      for (let i = 0; i < action.payload; i++) {
        const bingoElement: IBingoDto = {
          id: i + 1,
          index: i + 1,
          content: "hello",
        };
        bingoList.push(bingoElement);
      }

      return {
        ...state,
        bingoList: bingoList,
      };
    },
  },
  initialState
);
