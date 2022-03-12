export const getAdverts = (state) => state.adverts.data;
export const getAdvertDetail = (state, advId) =>
  getAdverts(state).find((advert) => advert._id === advId);
export const areAdvertsLoaded = (state) => state.adverts.loaded;
