import React, { useEffect, useState } from 'react'
import { getTotalNumberOfLang } from '../api/api'

const TotalNumOfLang = () => {
    const[totalLang,setTotalLang]=useState()

    const fetchData=async()=>{
        const res=await getTotalNumberOfLang()
        setTotalLang(res)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='headingFounding'>TotalNumOfLang <br/> {totalLang}
    </div>
  )
}

export default TotalNumOfLang