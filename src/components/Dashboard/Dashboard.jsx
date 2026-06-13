import React from "react";
import Header from "../Header/Header";
import TotalPop from "../TotalPop";
import style from '../Dashboard/Dashboard.module.css'
import TotalContriesCount from "../TotalContriesCount";
import TopTenPop from "../TopTenPop";
import TopTenLeastPop from "../TopTenLeastPop";
import AvgPopContries from "../AvgPopContries";
import TotalNumOfLang from "../TotalNumOfLang";
import AvgLifeExp from "../AvgLifeExp";
import TotalNumOfCities from "../TotalNumOfCities";
import TotalPopByContinent from "../TotalPopByContinent";
import PopCounByGivenVal from "../PopCounByGivenVal";
import PopCounLessThanVal from "../PopCounLessThanVal";
import PopOfSpecificCountry from "../PopOfSpecificCountry";
import MostSpokenLanguage from "../MostSpokenLanguage ";
import GDPPerCapita from "../GDPPerCapita";
import InfoAboutCity from "../InfoAboutCity";
import HighestLifeExpectancy from "../HighestLifeExpectancy";
import LowestLifeExpectancy from "../LowestLifeExpectancy";
import LargestPopCities from "../LargestPopCities";


export default function Dashboard() {
  return (
    <div >
      <main>
        <Header />
        <div className={style.leftboxcard}>
          <TotalPop />
          <TotalContriesCount />
          <AvgPopContries />
          <TotalNumOfLang />
          <AvgLifeExp />
          <TotalNumOfCities />
        </div>

        <div className="row col-12">
          <div className="col-md-4">
            <TopTenPop />
          </div>
          <div className="col-md-4">
            <TopTenLeastPop />
          </div>
          <div className="col-md-4 ">
            <TotalPopByContinent />
          </div>
        </div>

        <div className="row col-12">
          <div className="col-md-4">
            <HighestLifeExpectancy />
          </div>
          <div className="col-md-4">
            <LowestLifeExpectancy />
          </div>
          <div className="col-md-4 ">
            <LargestPopCities />
          </div>
        </div>

        <div className="row col-12">
          <div className="col-md-4">
            <PopCounByGivenVal />
          </div>
          <div className="col-md-4">
            <PopCounLessThanVal />
          </div>
          <div className="col-md-4 ">
            <PopOfSpecificCountry />
          </div>
        </div>

        <div className="row col-12">
          <div className="col-md-4">
            <MostSpokenLanguage />
          </div>
          <div className="col-md-4">
            <GDPPerCapita />
          </div>
          <div className="col-md-4 ">
            <InfoAboutCity />
          </div>
        </div>



      </main>
    </div>
  );
}
