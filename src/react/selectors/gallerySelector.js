export const gallery =state=>state.gallery;

export const lager = state => gallery(state).filter(el=> el.srm < 3 ? el : null);

export const pilsner = gallery => gallery().filter(el=> el.srm < 3 ? el : null);
