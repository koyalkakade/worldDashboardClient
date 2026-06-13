import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function getTotalPopulation (){
    const res = await axiosInstance.get('/getTotalWorldPopulation')
    // console.log(res.data, "In api file")
    if(res.data.success){
      return  res.data.tpopulation
    }
}

export async function getTotalCountries(){
    const res = await axiosInstance.get('/getTotalNumberOfCountries')
    if(res.data.success){
        return res.data.total_countries
    }
}
export async function getTopTenCounPop(){
    const res = await axiosInstance.get('/getTop10MostPopulatedCountries')
        //console.log(res)
    if(res.data.success){
        return res.data.top10_most_populated_countries
    }
}
export async function getTopTenLeastPop(){
    const res = await axiosInstance.get('/getTop10LeastPopulatedCountries')
       // console.log(res)
    if(res.data.success){
        return res.data.top10_least_populated_countries
    }
}

export async function grtAvgPopContries(){
    const res=await axiosInstance.get('/getAveragePopulation')
    if(res.data.success){
        return res.data.avg_population
    }
}

export async function getTotalNumberOfLang(){
    const res=await axiosInstance.get('/getTotalNumberOfLanguage')
    if(res.data.success){
       return res.data.total_language
    }
}

export async function getAVGLifeExpectancyOfCoun(){
    const res=await axiosInstance.get('/getAVGLifeExpectancyOfCountry')
    if(res.data.success){
       return res.data.avgLifeExpectancy
    }
}

export async function getTotalNumberOfCities(){
    const res=await axiosInstance.get('/getTotalNumberOfCities')
    if(res.data.success){
       return res.data.cityCount
    }
}

export async function getTotalPopByContinent(){
    const res=await axiosInstance.get('/getTotalPopulationByContinent')
    //console.log(res)
    if(res.data.success){
       return res.data.result
    }
}

export async function getPopGreaterThanVal(popCount){
    const res=await axiosInstance.post('/getCountriesWithPopulationGreaterThanValue',{popCount})
    if(res.data.success){
       return res.data.greater_population
    }
}

export async function getPopLessThanVal(popCount){
    const res=await axiosInstance.post('/getCountriesWithPopulationLessThanValue',{popCount})
    if(res.data.success){
       return res.data.less_population
    }
}

export async function getAllCountries(){
    const res=await axiosInstance.get('/getAllCountries')
    if(res.data.success){
       return res.data.result
    }
}

export async function getPopulationOfCountries(countryNm){
    const res=await axiosInstance.post('/getPopulationOfCountry',{countryNm})
    if(res.data.success){
       return res.data.population_country
    }
}

export async function getLangOfCountries(countryNm){
    const res=await axiosInstance.post('/getOfficialLanguageSpokenInCountry',{countryNm})
    if(res.data.success){
       return res.data.language_country
    }
}

export async function getTopMostSpokenLang(){
    const res=await axiosInstance.get('/getTop10MostSpokenLanguage')
    if(res.data.success){
       return res.data.language_country
    }
}

export async function getGDPPerCapita(){
    const res=await axiosInstance.get('/getCountriesAndGDPPerCapita')
    if(res.data.success){
       return res.data.result
    }
}

export async function getInfoAboutCity(city){
    const res=await axiosInstance.post('/getInfoAboutSpecificCity',{city})
    if(res.data.success){
       return res.data.city
    }
}

export async function getAllCities(){
    const res=await axiosInstance.get('/getAllCities')
    if(res.data.success){
       return res.data.result
    }
}

export async function getHighestLifeExp(){
    const res=await axiosInstance.get('/getCountriesWithHighestLifeExpectancy')
    if(res.data.success){
       return res.data.top10_highest_LifeExpectancy
    }
}

export async function getLowestLifeExp(){
    const res=await axiosInstance.get('/getCountriesWithLowestLifeExpectancy')
    if(res.data.success){
       return res.data.top10_lowest_LifeExpectancy
    }
}

export async function getTopTenPopCities(){
    const res=await axiosInstance.get('/get10LargestCitiesByPopulation')
    if(res.data.success){
       return res.data.top10_largest_populated_cities
    }
}