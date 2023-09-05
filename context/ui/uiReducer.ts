import { UiState } from './';

type UiActionType = 
	| { type: '[Ui] - Toggle Menu' };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
	switch (action.type) {
		case '[Ui] - Toggle Menu':
			return {
				...state,
				isMenuOpen: !state.isMenuOpen
			};
		default:
			return state;
	}
}