import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";

const FilterContext = createContext();

const initialState={
    SortBy:null,
    byRating:0,
    byCategory:{air_purifier:false,indoor_plants:false,outdoor_plants:false,outdoor_flower_plants:false,plants_for_gifts:false},
    byBrand:{thronic:false,ferns_n_petals:false,root_bridges:false,abana_homes:false}
}

const FilterProvider=({children})=>{

    const [state,dispatch] = useReducer(filterReducer,initialState)
    return(
     <FilterContext.Provider value={{state,dispatch}}>
         {
             children
         }
     </FilterContext.Provider>
    );
}

const useFilter=()=>{
    return(
        useContext(FilterContext)
    );
}

export {FilterProvider,useFilter,initialState};