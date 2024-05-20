import axios from 'axios'
import React, { useEffect } from 'react'

function AxiosData() {
    async function fetchdata(){
        let res=await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        console.log(res.data)
    }
    useEffect(()=>{
       fetchdata()
    },[])
  return (
    <div>AxiosData</div>
  )
}

export default AxiosData