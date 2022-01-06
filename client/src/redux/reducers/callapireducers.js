export const callapireducers1 = (state={}, action)=>{
    // console.log(action.payload);
    switch(action.type)
    {
        case "HA1":
            state ={loading:true};
            return state;
        case "HA1S":
            state = {loading:false, data:action.payload};
            return state;
        case "HA1F":
            state = {loading:false, "error":"InvalidAuth"};
            return state;
        default:
            return state;
    }
}
export const callapireducers2 = (state={}, action)=>{
    switch(action.type)
    {
        case "HA1I":
            state ={loading:true};
            return state;
        case "HA1IS":
            state = {loading:false, status:action.payload.status};
            return state;
        case "HA1IF":
            state = {loading:false, "error":"InvalidAuth"};
            return state;
        default:
            return state;
    }
}