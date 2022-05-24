import { typesCards } from "../actions";

export const initState = {
	dataCards: [
		{
			id: 0,
			color: "red",
			text: "RED",
		},
		{
			id: 1,
			color: "aqua",
			text: "AQUA",
		},
		{
			id: 2,
			color: "pink",
			text: "PINK",
		},
		{
			id: 3,
			color: "grey",
			text: "GREY",
		},
		{
			id: 4,
			color: "green",
			text: "GREEN",
		},
	],
};

const cardReducer = (state = initState, action) => {
	switch (action.type) {
		case typesCards.DELETE_CARD:
			const localArrayDel = state.dataCards.filter(item => item.id !=action.payload);
			return {
				...state,
				dataCards:localArrayDel,
			};
			
		case typesCards.ADD_CARD:
			console.log('add',state.dataCards)
			const localArrayAdd = [...state.dataCards]
			localArrayAdd.push(action.payload)
			console.log('localArrayAdd',localArrayAdd)
			return {
				...state,
				dataCards:localArrayAdd,				
			};
		case typesCards.RENAME_CARD:
			delete action.payload.isVisible;
			const renamedDataCards = [...state.dataCards]
			const listIdRenameDataCars = renamedDataCards.map(item=>item.id)
			const indexRenamedCard = listIdRenameDataCars.indexOf(action.payload.id)
			renamedDataCards[indexRenamedCard]=action.payload
			
			console.log('renamedDataCards',renamedDataCards)
			console.log('action',action.payload)
			console.log('dataCards',state.dataCards)
			

			return {
				...state,dataCards:renamedDataCards,
			};
			
		case typesCards.COLOR_CARD:
			const localArrayColor = state.dataCards.map(
				item => item.id === action.payload.id?{...item, color:action.payload.color}:{...item}
				);
			return {
				...state,
				dataCards:localArrayColor,

				
			};	
		default:
			return state;
	}
};
export default cardReducer;
