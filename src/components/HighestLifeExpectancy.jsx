import React, { useEffect, useState } from 'react'
import { getHighestLifeExp } from '../api/api'
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

const HighestLifeExpectancy = () => {
    const [lifeExpData, setlifeExpData] = useState([])

    async function fetchdata() {
        const res = await getHighestLifeExp()
        setlifeExpData(res)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div className={`${styles.card} ${styles.chartW}`}>
                <div className={styles.heading}>Highest Life Expectancy:</div>
                <div className={styles.chartWH} style={{ marginLeft: "-20px" }}>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={lifeExpData}>
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

export default HighestLifeExpectancy