const getSortedByBrand=(productList,{thronic,ferns_n_petals,root_bridges,abana_homes})=>{
    const filteredProductList=[];
    if(thronic===false && ferns_n_petals===false && root_bridges===false && abana_homes===false){
        return productList;
    }

    if(thronic===true){
        let newProductList = productList.filter(item=>item.brand==="thronic")
        filteredProductList.push(...newProductList);

    }

    if(ferns_n_petals===true){
        let newProductList = productList.filter(item=>item.brand==="ferns_n_petals")
        filteredProductList.push(...newProductList);
    }
    if(root_bridges===true){
        let newProductList = productList.filter(item=>item.brand==="root_bridges")
        filteredProductList.push(...newProductList);
    }

    if(abana_homes===true){
        let newProductList = productList.filter(item=>item.brand==="abana_homes")
        filteredProductList.push(...newProductList);
    }

    return filteredProductList;
}

export {getSortedByBrand};