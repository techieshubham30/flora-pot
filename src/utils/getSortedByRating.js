const getSortedByRating=(sortedData,byRating)=>{
    switch(byRating){
        case 4:
            return sortedData.filter(item=>item.rating>=4);
        case 3:
            return sortedData.filter(item=>item.rating>=3);  
        case 2:
            return sortedData.filter(item=>item.rating>=2);
         default:
             return sortedData;        
    }
}
export {getSortedByRating};