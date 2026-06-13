import React, { useEffect, useState } from 'react'
import { grtAvgPopContries } from '../api/api'

const AvgPopContries = () => {
    const [avgPop,setAvgPop]=useState()

    const fetchData=async()=>{
       const res=await grtAvgPopContries()
       setAvgPop(res)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='headingFounding'>AvgPopContries <br/> {avgPop}</div>
  )
}

export default AvgPopContries