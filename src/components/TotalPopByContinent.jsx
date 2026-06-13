import React, { useEffect, useState } from 'react'
import { getTotalPopByContinent } from '../api/api'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";
import styles from "./Charts/Charts.module.css";

const TotalPopByContinent = () => {
    const [popByContinent, setpopByContinent] = useState([])

    async function fetdata() {
        const res = await getTotalPopByContinent()
        const pieData = res.map(item => ({
            name: item.Continent,
            value: Number(item.totalPopulation),
        }));
        setpopByContinent(pieData)
    }

    useEffect(() => {
        fetdata()
    }, [])

    const formatPopulation = (value) => {
        if (value >= 1_000_000_000)
            return `${(value / 1_000_000_000).toFixed(1)}B`;
        if (value >= 1_000_000)
            return `${(value / 1_000_000).toFixed(1)}M`;
        if (value >= 1_000)
            return `${(value / 1_000).toFixed(1)}K`;

        return value;
    };

    const COLORS = [
        "#0088FE", // North America
        "#00C49F", // Asia
        "#FFBB28", // Africa
        "#FF8042", // Europe
        "#A855F7", // South America
        "#14B8A6", // Oceania
        "#94A3B8", // Antarctica
    ];

    return (
        <>
            <div className={`${styles.card} ${styles.chartW}`}>
                <div className={styles.heading}>Total Population By Continent:</div>
                <div >
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={popByContinent}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={80}
                                // label={({ name, percent }) =>
                                //     `${name} ${(percent * 100).toFixed(1)}%`
                                // }
                                label={({ value }) =>
                                    `${formatPopulation(value)} `
                                }
                            >
                                {popByContinent.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            {/* <Tooltip
                                formatter={(value) => formatPopulation(value)}
                            /> */}
                            <Legend layout="vertical"
                                verticalAlign="right"
                                align="right"
                                wrapperStyle={{  right: -20,fontSize: "11px" }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>

    )
}

export default TotalPopByContinent