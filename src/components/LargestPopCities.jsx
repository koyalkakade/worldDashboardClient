import React, { useEffect, useState } from 'react'
import { getTopTenPopCities } from '../api/api'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import styles from "./Charts/Charts.module.css";

const LargestPopCities = () => {
     const [topTenCities, setTopTenCities] = useState([])
    
      async function fetchdata() {
        const res = await getTopTenPopCities()
        setTopTenCities(res)
      }
    
      useEffect(() => {
        fetchdata()
      }, [])

  return (
      <>
          <div className={`${styles.card} ${styles.chartW}`}>
            <div className={styles.heading}>Top 10 Most Populated Cities:</div>
            <div className={styles.chartWH}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topTenCities}>
                  <XAxis dataKey="Name" />
                  <YAxis tickFormatter={(value) => `${value / 1000000}M`}/>
                  <Tooltip />
                  <Bar dataKey="Population" fill="#594caf" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
  )
}

export default LargestPopCities