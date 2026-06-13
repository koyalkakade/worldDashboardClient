import React, { useEffect, useState } from 'react'
import { getGDPPerCapita } from '../api/api'
import styles from "./Charts/Charts.module.css";

const GDPPerCapita = () => {
    const [gdp, setGdp] = useState([])

    const fetchdata = async () => {
        const res = await getGDPPerCapita()
        setGdp(res)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div className={`${styles.card} ${styles.chartW}`}>
                <div className={styles.heading}>GDP Per Capita:</div>
                <div className={styles.chartWH} style={{overflowY:"auto"}}>
                    <table className={styles.table} id='gdptableid'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>GDPPerCapita</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gdp.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.Name}</td>
                                    <td>{row.GDPPerCapita}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default GDPPerCapita