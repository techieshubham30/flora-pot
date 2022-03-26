const getSortedByCategory=(productList,{air_purifier,indoor_plants,outdoor_plants,outdoor_flower_plants,plants_for_gifts})=>{
    
    const  filteredProductList = [];

    if(air_purifier === false && indoor_plants === false && outdoor_plants ===false && outdoor_flower_plants===false && plants_for_gifts == false){
        return productList;
    }
    if(air_purifier===true){
        let newProductList = productList.filter(item => item.category === "air_purifier_plants");
        filteredProductList.push(...newProductList); 
    }
    if(indoor_plants===true){
        let newProductList = productList.filter(item => item.category === "indoor");
        filteredProductList.push(...newProductList); 
    }
   
    if(outdoor_flower_plants===true){
        let newProductList = productList.filter(item => item.category === "outdoor_flower_plants");
        filteredProductList.push(...newProductList); 
    }
    if(plants_for_gifts===true){
        let newProductList = productList.filter(item => item.category === "plants_for_gift");
        filteredProductList.push(...newProductList); 
    }

    return filteredProductList;
}

export {getSortedByCategory};