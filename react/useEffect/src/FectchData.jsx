import React, { useEffect, useState } from 'react'

function FectchData() {
    const [Data,setData]=useState([])
    const [search,setSearch]=useState('')
    async function fetchdata(){
        let res=await fetch(`https://jsonplaceholder.typicode.com/posts/${search}`)
        let data=await res.json()
        console.log(data)
        setData(data)
    }    
    useEffect(()=>{//callback fn
        fetchdata()
    },[search])//dependency array
    useEffect(()=>{
        console.log('hello')
        //clean up function
        return ()=>{console.clear()}
    })
  return (
    <div><input type='text' onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}

export default FectchData