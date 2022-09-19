import React,{createContext,useReducer} from "react";
import reducer from "./reducer"

export const AppContext = React.createContext()
const init={
    info:{
        _id:"",
        username:"",
        address:"",
        phone:"",
        email:"",
    },
    data:[],
    eve:true,
    them:true

}

export default ({children})=>{
    const [state,dispatch]=useReducer(reducer, init)
    
    const save=(info)=>{
        dispatch ({type:"SAVE",payload:info})
    }
    const saveData=(data)=>{
      dispatch ({type:"DATA",payload:data})
    }
    const setEve=(eve)=>{
      dispatch ({type:"EVE",payload:eve})
    }
    const setThem=(them)=>{
      dispatch ({type:"THEM",payload:them})
    }
    return(
        <AppContext.Provider
        value={{
          ...state,
          save,
          saveData,
          setEve,
          setThem,
        }}
      >
        {children}
      </AppContext.Provider>
    )
}