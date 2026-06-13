import React, { useEffect, useState } from 'react'
import { getAllCities, getInfoAboutCity } from '../api/api'
import styles from "./Charts/Charts.module.css";

const InfoAboutCity = () => {
    const [info, setInfo] = useState([])
    const [cities, setcities] = useState([])
    const [selectedCity, setSelectedCountry] = useState("");

    const handleSubmitCity = async () => {
        const res = await getInfoAboutCity(selectedCity)
        setInfo(res)
    }

    const AllCities = async () => {
        const res = await getAllCities()
        setcities(res)
    }

    useEffect(() => {
        AllCities()
    }, [])

    return (
        <>
            <div className={`${styles.card} ${styles.chartW}`}>
                <div className={styles.heading}>Information About City:</div>
                <div className={styles.chartWH} >
                    <select value={selectedCity} id='dropidcity' onChange={(e) => setSelectedCountry(e.target.value)} style={{ width: "200px" }} className="m-2 p-1">
                        <option value="">Select City</option>

                        {cities.map((city, index) => (
                            <option key={index} value={city.Name}>
                                {city.Name}
                            </option>
                        ))}
                    </select>
                    <button className='btn btn-primary' id='btnSubcity' onClick={handleSubmitCity}>Submit</button>

                    <table className={styles.table} id='infotableid'>
                        {
                            info.length > 0 && (
                                <tbody>
                                    <tr>
                                        <td><b>City</b></td>
                                        <td>{info[0].Name}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Country Code</b></td>
                                        <td>{info[0].CountryCode}</td>
                                    </tr>
                                    <tr>
                                        <td><b>District</b></td>
                                        <td>{info[0].District}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Population</b></td>
                                        <td>{info[0].Population}</td>
                                    </tr>
                                </tbody>
                            )}
                    </table>
                </div>
            </div>
        </>
    )
}

export default InfoAboutCity