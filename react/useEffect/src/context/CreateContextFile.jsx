import React, { createContext, useEffect, useState } from 'react'
import CompA from './CompA'

export const postContext=createContext(null)

function Createcontext() {
    const [Data,setData]=useState([])
   
    async function fetchdata(){
        let res=await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let data=await res.json()
        // console.log(data)
        setData(data)
    }    
    useEffect(()=>{//callback fn
        fetchdata()
    },[])
   
  return (
    <div>
        <postContext.Provider value={Data}>
            <CompA />
        </postContext.Provider>
        
    </div>
  )
}

export default Createcontext
