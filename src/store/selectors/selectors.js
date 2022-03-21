export const getAdverts = (state) => state.adverts.data;
export const getAdvertDetail = (state, id) => getAdverts(state).find((advert) => advert._id === id);
export const areAdvertsLoaded = (state) => state.adverts.loaded;

export const getCategories = (state) => state.categories;
export const getCagetoriesIsLoaded = (state) => getCategories(state).length > 0;

export const getTags = (state) => state.adverts.tags;
export const getTagsIsLoaded = (state) => getTags(state).length > 0;

export const getUi = (state) => state.ui;
