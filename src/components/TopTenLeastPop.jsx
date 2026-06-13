import React, { useEffect, useState } from 'react'
import { getTopTenLeastPop } from '../api/api'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import styles from "./Charts/Charts.module.css";

const TopTenLeastPop = () => {
    
      const [topTen, setTopTen] = useState([])
    
      async function fetdata() {
        const res = await getTopTenLeastPop()
        setTopTen(res)
      }
    
      useEffect(() => {
        fetdata()
      }, [])

  return (
   <>
      <div className={`${styles.card} ${styles.chartW}`}>
           <div className={styles.heading}>Top 10 Most Populated Countries:</div>
           <div className={styles.chartWH}>
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={topTen}>
                 <XAxis dataKey="Name" />
                 <YAxis />
                 <Tooltip />
                 <Bar dataKey="Population" fill="#594caf" />
               </BarChart>
             </ResponsiveContainer>
           </div>
         </div>
   </>
  )
}

export default TopTenLeastPop