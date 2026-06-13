import React, { useEffect, useState } from 'react'
import { getTotalNumberOfCities } from '../api/api'

const TotalNumOfCities = () => {
     const [totalCity, setTotalCity] = useState()
    
    
        async function fetchData(){
            const res =await getTotalNumberOfCities()
            setTotalCity(res)
        }
        useEffect(()=>{
            fetchData()
        },[])

  return (
    <div className='headingFounding'>TotalNumOfCities <br/> {totalCity}</div>
  )
}

export default TotalNumOfCities