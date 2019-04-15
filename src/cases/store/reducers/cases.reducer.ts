import * as fromCases from '../actions/cases.action';

export interface CasesState {
  someState: any;
  loading: boolean;
  loaded: boolean;
}

export const initialState: CasesState = {
  someState: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromCases.CasesAction
): CasesState {
  switch (action.type) {

    case fromCases.SEARCH_CASES: {
      // tbc
      return {
        ...state,
        loading: true,
      };
    }

  }

  return state;
}
