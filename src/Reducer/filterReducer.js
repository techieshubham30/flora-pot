import { initialState } from "../context/FilterContext";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "Sort_By_Price":
      return { ...state, SortBy: action.payload };
    case "Filter_By_Rating":
      return { ...state, byRating: action.payload };
    case "air_purifier_plants":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          air_purifier: !state.byCategory.air_purifier,
        },
      };
    case "indoor_plants":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          indoor_plants: !state.byCategory.indoor_plants,
        },
      };
    case "outdoor_flower_plants":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          outdoor_flower_plants: !state.byCategory.outdoor_flower_plants,
        },
      };
    case "plants_for_gifts":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          plants_for_gifts: !state.byCategory.plants_for_gifts,
        },
      };

    case "thronic":
      return {
        ...state,
        byBrand: { ...state.byBrand, thronic: !state.byBrand.thronic },
      };

    case "ferns_n_petals":
      return {
        ...state,
        byBrand: {
          ...state.byBrand,
          ferns_n_petals: !state.byBrand.ferns_n_petals,
        },
      };

    case "root_bridges":
      return {
        ...state,
        byBrand: {
          ...state.byBrand,
          root_bridges: !state.byBrand.root_bridges,
        },
      };
    case "abana_homes":
      return {
        ...state,
        byBrand: { ...state.byBrand, abana_homes: !state.byBrand.abana_homes },
      };

    case "clear_all":
      return initialState;
    default:
      return state;
  }
};

export { filterReducer };
