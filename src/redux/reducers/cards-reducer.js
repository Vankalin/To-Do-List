import { typesCardsSort } from "../actions/cards-actions";

export const initState = {
	cards : [
		{
			url: 'https://res.cloudinary.com/vankalin/image/upload/v1652125675/Turtle/Table/Rectangle_kbj1no.png',
			name:'B',
			id: 1652090400000,
			renamed: 1652097600000,
			tags: ['life', 'codewars'],
		},    {
			url: 'https://res.cloudinary.com/vankalin/image/upload/v1652125675/Turtle/Table/Rectangle_kbj1no.png',
			name:'C',
			id: 1651899600000,
			renamed: 1651901400000,
			tags: ['life',],
		},
		{
			url: 'https://res.cloudinary.com/vankalin/image/upload/v1652125675/Turtle/Table/Rectangle_kbj1no.png',
			name:'A',
			id: 1651654800000,
			renamed: 1651665600000,
			tags: ['life', 'sport'],
		},
		{
			url: 'https://res.cloudinary.com/vankalin/image/upload/v1652125675/Turtle/Table/Rectangle_kbj1no.png',
			name:'E',
			id: 1651428000000,
			renamed: 1651428300000,
			tags: ['life', 'eat'],
		},
		{
			url: 'https://res.cloudinary.com/vankalin/image/upload/v1652125675/Turtle/Table/Rectangle_kbj1no.png',
			name:'D',
			id: 1651442400000,
			renamed: 1651450200000,
			tags: ['life', 'eat'],
		},
		{
			url: 'https://res.cloudinary.com/vankalin/image/upload/v1652125675/Turtle/Table/Rectangle_kbj1no.png',
			name:'G',
			id: 1651562400000,
			renamed: 1651990200000,
			tags: ['life', 'code'],
		},
		] 
};

const cardsReducer = (state = initState, action) => {
	switch (action.type) {
		case typesCardsSort.BY_NAME:
			const sortCardsByName = [...state.cards]
			sortCardsByName.sort((a,b)=>a.name.localeCompare(b.name));
			return {
				...state, cards:sortCardsByName,	
			};
		case typesCardsSort.BY_RENAME:
			const sortCardsByRename = [...state.cards]
			sortCardsByRename.sort((a,b)=>b.renamed-a.renamed);
			return {
				...state, cards:sortCardsByRename,	
			};
		case typesCardsSort.BY_ID:
			const sortCardsById = [...state.cards]
			sortCardsById.sort((a,b)=>a.id-b.id);
			return {
				...state, cards:sortCardsById,	
			};
			
	
		default:
			return state;
	}
};
export default cardsReducer;
