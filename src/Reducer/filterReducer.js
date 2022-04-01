import { initialState } from "../context/FilterContext";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "Sort_By_Price":
      return { ...state, SortBy: action.payload };

    case "Filter_By_Rating":
      return { ...state, byRating: action.payload };

    case "AIR_PURIFIER_PLANTS":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          air_purifier: !state.byCategory.air_purifier,
        },
      };
    case "INDOOR_PLANTS":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          indoor_plants: !state.byCategory.indoor_plants,
        },
      };
    case "OUTDOOR_FLOWER_PLANTS":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          outdoor_flower_plants: !state.byCategory.outdoor_flower_plants,
        },
      };
    case "PLANTS_FOR_GIFTS":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          plants_for_gifts: !state.byCategory.plants_for_gifts,
        },
      };

    case "THRONIC":
      return {
        ...state,
        byBrand: { ...state.byBrand, thronic: !state.byBrand.thronic },
      };

    case "FERNS_N_PETALS":
      return {
        ...state,
        byBrand: {
          ...state.byBrand,
          ferns_n_petals: !state.byBrand.ferns_n_petals,
        },
      };

    case "ROOT_BRIDGES":
      return {
        ...state,
        byBrand: {
          ...state.byBrand,
          root_bridges: !state.byBrand.root_bridges,
        },
      };
    case "ABANA_HOMES":
      return {
        ...state,
        byBrand: { ...state.byBrand, abana_homes: !state.byBrand.abana_homes },
      };

    case "CLEAR_ALL":
      return initialState;
    default:
      return state;
  }
};

export { filterReducer };
