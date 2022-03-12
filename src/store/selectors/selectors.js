export const getAdverts = (state) => state.adverts.data;
export const getAdvertDetail = (state, id) => getAdverts(state).find((advert) => advert._id === id);
export const areAdvertsLoaded = (state) => state.adverts.loaded;
