import React, { useEffect, useState } from 'react'
import styles from "./Charts/Charts.module.css";
import { getPopGreaterThanVal } from '../api/api';
import { FcNext,FcPrevious  } from "react-icons/fc";

const PopCounByGivenVal = () => {
    const [popData, setPop] = useState([])
    const [val, setVal] = useState()
    const [show, setShow] = useState(false);

    const handleSubmit = async () => {
        const res = await getPopGreaterThanVal(val)
        setPop(res)
          if (popData.length > 0) {
            setShow(!show)
        }
    }

    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 3;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const currentRows = popData.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(popData.length / rowsPerPage);


    return (
        <>
            <div className={`${styles.card} ${styles.chartW}`}>
                <div className={styles.heading}>Populated Countries greater than:</div>
                <div className={styles.chartWH}>
                    <input type='number' className="m-2" placeholder='Population Count' onChange={(e) => setVal(e.target.value)} id='pc1'/>
                    <button className='btn btn-primary' id='btn2' onClick={handleSubmit}>Submit</button>
                    <table className={styles.table} id='tablegreater'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Population</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.Name}</td>
                                    <td>{row.Population}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {show && (
                        <div style={{ marginLeft: "185px" }}>
                            <button style={{border:'none',backgroundColor:'white'}}
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                               <FcPrevious />
                            </button>

                            <span>
                                Page {currentPage} of {totalPages}
                            </span>

                            <button style={{border:'none',backgroundColor:'white'}}
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                              <FcNext />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default PopCounByGivenVal