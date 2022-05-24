import { typesCards } from "../actions";

export const initState = {
	modalData:
		{
			id: -1,
			color: "",
			text: "",
			isVisible: false,
			
		},
};

const ModalCardReducer = (state = initState, action) => {
	switch (action.type) {
		case typesCards.OPEN_MODAL_CARD:
			return {
				...state,modalData:action.payload
			};
		case typesCards.CLOSE_MODAL_CARD:
			return {
				...state,modalData:{id: -1,color: "",text: "",isVisible:action.payload}
			};
		case typesCards.CHANGE_MODAL_CARD:
			const tempModalData = {...state.modalData,...action.payload}
			return {
				...state,modalData:tempModalData
			};


		default:
			return state;
	}
};
export default ModalCardReducer;
