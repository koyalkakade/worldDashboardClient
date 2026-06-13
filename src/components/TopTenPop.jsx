import React, { useEffect, useState } from 'react'
import { getTopTenCounPop } from '../api/api'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import styles from "./Charts/Charts.module.css";

const TopTenPop = () => {

  const [topTen, setTopTen] = useState([])

  async function fetchdata() {
    const res = await getTopTenCounPop()
    setTopTen(res)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  //console.log(topTen)


  return (
    <>
      <div className={`${styles.card} ${styles.chartW}`}>
        <div className={styles.heading}>Top 10 Most Populated Countries:</div>
        <div className={styles.chartWH}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topTen}>
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

export default TopTenPop