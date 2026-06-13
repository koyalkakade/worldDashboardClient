import React, { useEffect, useState } from 'react'
import { getAllCountries, getLangOfCountries, getPopulationOfCountries } from '../api/api'
import styles from "./Charts/Charts.module.css";


const PopOfSpecificCountry = () => {
    const [countries, setAllCountry] = useState([])
    const [selectedCountry, setSelectedCountry] = useState("");
    const [popOfCountry, setPopOfCountry] = useState([])
    const [lang,setLang]=useState([])
    const [activeTable, setActiveTable] = useState("");

    const AllCountries = async () => {
        const res = await getAllCountries()
        setAllCountry(res)
    }

    const handleSubmit = async () => {
        const res1 = await getPopulationOfCountries(selectedCountry)
        setPopOfCountry(res1)
        setActiveTable("population")
        //console.log(popOfCountry)
    }

    const handleSubmitLanguage= async () => {
        const resLang = await getLangOfCountries(selectedCountry)
        setLang(resLang)
        setActiveTable("language")
    }

    useEffect(() => {
        AllCountries();
    }, []);

    return (
        <>
            <div className={`${styles.card} ${styles.chartW}`}>
                <div className={styles.heading}>Population and Language Of Specific Country:</div>
                <div className={styles.chartWH}>
                    <select value={selectedCountry} id='dropid' onChange={(e) => setSelectedCountry(e.target.value)} style={{ width: "150px" }} className="m-1 mt-3 p-1">
                        <option value="">Select Country</option>

                        {countries.map((country, index) => (
                            <option key={index} value={country.Name}>
                                {country.Name}
                            </option>
                        ))}
                    </select>
                    <button className='btn btn-primary me-1 p-1' id='btnSub' onClick={handleSubmit}>Population</button>
                    <button className='btn btn-primary p-1' id='btnSublan' onClick={handleSubmitLanguage}>Language</button>

                    {
                       activeTable === "population" && (
                            <table className={styles.table} id='tableidpop'>
                                <thead>
                                    <tr><th>Country</th><th>Population</th></tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>{popOfCountry[0].Name}</td>
                                        <td>{popOfCountry[0].Population}</td>
                                    </tr>

                                </tbody>
                            </table>
                        )}
                         {
                        activeTable === "language"  && (
                            <table className={styles.table} id='tableidpop'>
                                <thead>
                                    <tr><th>Country</th><th>Language</th></tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>{lang[0].Name}</td>
                                        <td>{lang[0].Language}</td>
                                    </tr>

                                </tbody>
                            </table>
                        )}
                </div>
            </div>
        </>
    )
}

export default PopOfSpecificCountry