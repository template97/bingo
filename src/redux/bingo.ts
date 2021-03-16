import { IBingoDto } from "./../modal/interface/bingo.interface";
import { Dispatch } from "redux";
import { handleActions } from "redux-actions";
import { BingoDataState } from "./interface/bingoInterface";

/* Actions */
const INIT_BINGO_LIST = "BINGO/INIT_BINGO_LIST";
const UPDATE_BINGO = "BINGO/UPDATE_BINGO";
const SELECT_BINGO = "BINGO/SELECT_BINGO";

export const initBingoList = (length: number) => (dispatch: Dispatch): void => {
  dispatch({
    type: INIT_BINGO_LIST,
    payload: { length: length },
  });
};
export const updateBingo = (updatedBingo: IBingoDto) => (
  dispatch: Dispatch
): void => {
  dispatch({
    type: UPDATE_BINGO,
    payload: { updatedBingo: updatedBingo },
  });
};
export const selectBingo = (id: number) => (dispatch: Dispatch): void => {
  dispatch({
    type: SELECT_BINGO,
    payload: { id: id },
  });
};

const initialState: BingoDataState = {
  pending: false,
  error: false,

  bingoList: [],
  selectedBingoId: -1,
};

/* Reducer */
export default handleActions<BingoDataState, any>(
  {
    [INIT_BINGO_LIST]: (state: BingoDataState, action: any) => {
      let bingoList: IBingoDto[] = [];
      for (let i = 0; i < action.payload.length; i++) {
        const bingoElement: IBingoDto = {
          id: i + 1,
          index: i + 1,
          content: "good",
        };
        bingoList.push(bingoElement);
      }

      return {
        ...state,
        bingoList: bingoList,
        selectedBingoId: 1,
      };
    },
    [UPDATE_BINGO]: (state: BingoDataState, action: any) => {
      const bingoList: IBingoDto[] = [...state.bingoList];
      let updatedBingoList: IBingoDto[] = bingoList.map((bingo) => {
        if (bingo.id === action.payload.updatedBingo.id)
          return action.payload.updatedBingo;
        else return bingo;
      });

      return {
        ...state,
        bingoList: updatedBingoList,
      };
    },
    [SELECT_BINGO]: (state: BingoDataState, action: any) => {
      return {
        ...state,
        selectedBingoId: action.payload.id,
      };
    },
  },
  initialState
);
