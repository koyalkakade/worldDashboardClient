import React, { useEffect, useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";
import styles from "./Charts/Charts.module.css";
import { getTopMostSpokenLang } from '../api/api';

const MostSpokenLanguage = () => {
    const [langWithCount, setLangWithCount] = useState([])

    async function fetchdata() {
        const res = await getTopMostSpokenLang()
        setLangWithCount(res)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div className={`${styles.card} ${styles.chartW}`}>
                <div className={styles.heading}>Most Spoken Language:</div>
                <div className={styles.chartWH} style={{marginLeft:"-20px"}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            // width={900}
                            // height={600}
                            data={langWithCount}
                            layout="vertical"
                        >
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis type="number" />

                            <YAxis
                                type="category"
                                dataKey="Language"
                                width={100}
                            />

                            <Tooltip />

                            <Bar
                                dataKey="ContryCount"
                                fill="#8884d8"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default MostSpokenLanguage 