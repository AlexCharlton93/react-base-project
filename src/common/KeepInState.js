import _ from 'lodash'; 

const filterMatchesField = (item, filter, field, matchFunction) => { 
    const filterValue = _.get(filter, field); 
    return filterValue !== undefined && filterValue !== null && matchFunction(item, filterValue); 
}; 

const filterIsEmpty = filter => 
    filter === undefined || 
    Object.values(filter).filter( 
        x => 
            x !== null && 
            x !== undefined && 
            !((Array.isArray(x) && x.length === 0) || (typeof x === 'object' && filterIsEmpty(x))) 
    ).length === 0; 

const keepInState = (item, { filter, items = [] }, filterRules = []) => 
    !filterIsEmpty(filter) && 
    !filterRules.some(({ field, matchFunction }) => filterMatchesField(item, filter, field, matchFunction)) && 
    !items.some(x => x.id === item.id);

    export default keepInState;