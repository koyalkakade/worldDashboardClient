import React, { useEffect, useState } from 'react'
import { getAVGLifeExpectancyOfCoun } from '../api/api'

const AvgLifeExp = () => {
     const [avgLifeEx,setavgLifeEx]=useState()
    
        const fetchData=async()=>{
           const res=await getAVGLifeExpectancyOfCoun()
           setavgLifeEx(res)
        }
    
        useEffect(()=>{
            fetchData()
        },[])

  return (
    <div className='headingFounding'>AvgLifeExp <br/> {avgLifeEx}</div>
  )
}

export default AvgLifeExp