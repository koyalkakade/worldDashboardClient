import React, { useEffect, useState } from 'react'
import { getLowestLifeExp } from '../api/api'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import styles from "./Charts/Charts.module.css";

const LowestLifeExpectancy = () => {
      const [lowestLifeExpData, setLowestLifeExpData] = useState([])
    
        async function fetchdata() {
            const res = await getLowestLifeExp()
            setLowestLifeExpData(res)
        }
    
        useEffect(() => {
            fetchdata()
        }, [])

  return (
      <>
                <div className={`${styles.card} ${styles.chartW}`}>
                    <div className={styles.heading}>Lowest Life Expectancy:</div>
                    <div className={styles.chartWH} style={{ marginLeft: "-20px" }}>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={lowestLifeExpData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="Name" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="LifeExpectancy"
                                    stroke="#2563eb"
                                    strokeWidth={3}
                                    dot={false}          // hide all dots
                                    activeDot={{ r: 6 }} // show dot on hover
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </>
  )
}

export default LowestLifeExpectancy