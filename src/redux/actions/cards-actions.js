export const typesCardsSort = {
	BY_NAME: 	 "BY_NAME",
	BY_RENAME: "BY_RENAME",
	BY_ID: "BY_ID",
};

export const actionSortByName = (name) =>{
	return{
	type: typesCardsSort.BY_NAME,
	payload: name,
}};
export const actionSortByRename = (renamed) => ({
	type: typesCardsSort.BY_RENAME,
	payload: renamed,
});
export const actionSortById = (id) => ({
	type: typesCardsSort.BY_ID,
	payload: id,
});

