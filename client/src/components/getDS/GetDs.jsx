import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector,  } from 'react-redux';
import {  callapi2 } from '../../redux/actions/hitapi';
const Getds = () => {
    const data = useSelector(state => state.data)
    const [btn, setBtn] = useState("One");
    const [datase, setDatase] = useState({});
    const dispatch = useDispatch();
    useEffect(()=>{
        if(btn === "Three"){
            dispatch(callapi2("12345"));
        }else{
            dispatch(callapi2("1234"));
        }
    },[btn, dispatch])
    useEffect(() => {
        if(data){
            console.log(data);
        }
    },[data]);
    const setb =(e)=>{
        let option = e.target.innerHTML;
        if( option ==="One"){
            setBtn("One");
        }else if(option === "Two"){
            setBtn("Two");
        }
        else{
            setBtn("Three");            
        }

    }

    useEffect(() => {
        console.log(datase);
    }, [datase])
    
    return (
        <>  
            <h1>Dashboard</h1>
            <div>
                <button onClick={e=>{setb(e)}}>One</button>
                <button onClick={e=>{setb(e)}}>Two</button>
                <button onClick={e=>{setb(e)}}>Three</button>
                {/* <button onClick={e=>{setb(e)}}>Four</button> */}
                {btn === "One"?
                    <h2>
                        {btn}
                    </h2>
                    :
                    btn === "Two"?
                        <h2>
                            {btn}
                        </h2>
                    :
                    <h2>
                        {btn}
                    </h2>
                }
                { (data && data.data) && (data.data.users)?
                    data.data.users.map((v, i)=>(
                        <div>
                            <h2>{v && v.name}</h2>
                            <input type={"text"} name={`id${i}`} value={ datase[`id${i}`] || v.name } onChange={e=>setDatase({...datase,[e.target.name]:e.target.value})}></input>
                            
                        </div>
                    ))
                    :
                    <h3>Not Authorized</h3>
                }
                {data && data.data && datase && <h3>{datase["id0"]}</h3>}
                {data && data.data && datase && <h3>{datase["id1"]}</h3>}
            </div>
        </>
    )
}

export default Getds
