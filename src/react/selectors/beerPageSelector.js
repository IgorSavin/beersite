
export const beerPageCard = state => state.beerpage;
export const name = state => beerPageCard(state).name;
export const description = state => beerPageCard(state).description;
export const dishes = state => beerPageCard(state).food_pairing;
export const abvLength = state => beerPageCard(state).abv;
export const ibuLength = state => beerPageCard(state).ibu;
export const srmLength = state => beerPageCard(state).srm;
export const year = state => beerPageCard(state).first_brewed;
export const imageBottle = state => beerPageCard(state).image_url;
export const price = state => beerPageCard(state).attenuation_level;

