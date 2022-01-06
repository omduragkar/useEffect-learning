import axios, {} from "axios";
export const callapi1 = (id) => async (dispatch)=>{
    
    dispatch({type:"HA1"});
    const config={
        headers:{
            "Content-Type": "application/json"
        }
    }
    try{
        id = {id};
        const data = await axios.post("http://localhost:5000/api/user", id, config); 
        // console.log(data, data.data);    
        console.log("Hitting API");   
        dispatch({type:"HA1S", payload:data.data})
    }catch(error)
    {
        dispatch({type:"HA1F"});
        localStorage.clear();
    }
}
export const callapi2 = (id) =>async (dispatch)=>{
    dispatch({type:"HA1I"});
    const config={
        headers:{
            "Content-Type": "application/json"
        }
    }
    try{
        id = {id};
        console.log("Hitting API-1");
        const data = await axios.post("http://localhost:5000/api/check", id, config);  
        localStorage.setItem("user_info", data.data);
        console.log(data.data);      
        dispatch({type:"HA1IS", payload:data.data})
        dispatch({type:"HA1"});
        if(data && data.data){
            try{
                console.log("Hitting API-2");   
                const data = await axios.post("http://localhost:5000/api/user", id, config); 
                dispatch({type:"HA1S", payload:data.data})
            }catch(error)
            {
                dispatch({type:"HA1F"});
                dispatch({type:"HA1IF"});
                localStorage.clear();
            }
        }
        else{
            dispatch({type:"HA1F"});
        }
    }catch(error)
    {
        console.log("JKDC")
        dispatch({type:"HA1F"});
        console.log("JKDC")
        dispatch({type:"HA1IF"});
        console.log("JKDC")
        localStorage.clear();
    }
    
}