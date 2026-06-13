import React from "react";
import styles from "./Charts.module.css";

export default function Charts(){
  return (
    <section className={styles.charts}>
      <div className={styles.card}>
        <div className={styles.heading}>Population Growth Trend</div>
        <div id="trend-chart" className={styles.chartPlaceholder}>Chart placeholder</div>
      </div>

      <div className={styles.card}>
        <div className={styles.heading}>Top 10 Countries</div>
        <table className={styles.table}>
          <thead>
            <tr><th>Country</th><th>Population</th><th>Change</th></tr>
          </thead>
          <tbody>
            <tr><td>Country A</td><td>1.4B</td><td className={styles.muted}>+0.3%</td></tr>
            <tr><td>Country B</td><td>1.3B</td><td className={styles.muted}>+0.2%</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
