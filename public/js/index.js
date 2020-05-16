window.onload = () => {
    makeCountryCasesTable();
    loadGlobalCases();
}

async function makeCountryCasesTable(countryCode) {

    let countries = await consultCasesToday();
    let countryName;
    let confirmedCases;
    let activeCases;
    let deathCases;
    let recoveredCases;
    let percentageActives;
    let percentageDeaths;
    let percentageRecovered;
    //stores.map(function(store,index))
    var countriesHtml = `<tr>
    <th rowspan = "2" class="table-tittle" "></th>
    <th rowspan = "2" class="table-tittle" ">Country</th>
    <th colspan="4" class="table-tittle" ">Total Of</th>
    <th colspan="3" class="table-tittle" ">Percentage Of</th>
    <tr>
      <th class="table-tittle" >Confirmed</th>
      <th class="table-tittle" ">Actives</th>
      <th class="table-tittle" ">Deaths</th>
      <th class="table-tittle" ">Recovered</th>
      <th class="table-tittle" ">Actives</th>
      <th class="table-tittle" ">Deaths</th>
      <th class="table-tittle" ">Recovered</th>
    </tr>`;
    console.log(countryCode);
    if(!countryCode){

        for (let index = 0; index < countries.length; index++) {
            countryName = countries[index].country;
            confirmedCases = countries[index].total.confirmed;
            activeCases = countries[index].total.actives;
            deathCases = countries[index].total.deaths;
            recoveredCases = countries[index].total.recovered;
            percentageActives = countries[index].percentage.actives;
            percentageDeaths = countries[index].percentage.deaths;
            percentageRecovered = countries[index].percentage.recovered;
            countriesHtml += `
            <tr class="country-list">
              <td class="table-data">${index +1}</th>
              <td class="table-data table-country-name">${countryName}</th>
              <td class="table-data">${confirmedCases}</th>
              <td class="table-data">${activeCases}</th>
              <td class="table-data">${deathCases}</th>
              <td class="table-data">${recoveredCases}</th>
              <td class="table-data">${percentageActives}</th>
              <td class="table-data">${percentageDeaths}</th>
              <td class="table-data">${percentageRecovered}</th>
            </tr>
                `
    
        }
    }else{
        for (let index = 0; index < countries.length; index++) {
            if(countries[index].country == countryCode){
                countryName = countries[index].country;
                confirmedCases = countries[index].total.confirmed;
                activeCases = countries[index].total.actives;
                deathCases = countries[index].total.deaths;
                recoveredCases = countries[index].total.recovered;
                percentageActives = countries[index].percentage.actives;
                percentageDeaths = countries[index].percentage.deaths;
                percentageRecovered = countries[index].percentage.recovered;
                countriesHtml += `
                <tr class="country-list">
                <td class="table-data">${index +1}</th>
                <td class="table-data table-country-name">${countryName}</th>
                <td class="table-data">${confirmedCases}</th>
                <td class="table-data">${activeCases}</th>
                <td class="table-data">${deathCases}</th>
                <td class="table-data">${recoveredCases}</th>
                <td class="table-data">${percentageActives}</th>
                <td class="table-data">${percentageDeaths}</th>
                <td class="table-data">${percentageRecovered}</th>
                </tr>
                    `
            }
        }
    }
    document.querySelector('.my-table-container-s').innerHTML = countriesHtml
}

async function loadGlobalCases(){


    let globalCases = await consultGlobalStatistics();
    var globalHeader = `
    <h2 style="padding-bottom: 10px;">${getFullDate()} - Total infected countries: ${globalCases.infected_countries}</h1>
    `
    var global = `
    <h4 style="padding-bottom: 10px;">Total Confirmed Cases: ${globalCases.total.confirmed}</h3>
    <h4 style="padding-bottom: 10px;">Total Active Cases:  ${globalCases.total.actives}</h3>
    <h4 style="padding-bottom: 10px;">Total Death Cases:  ${globalCases.total.deaths}</h3>
    <h4>Total Recovered Cases:  ${globalCases.total.recovered}</h3>
    `;

    var global2 = `
    <h4 style="padding-bottom: 10px;">Total Closed Cases:  ${globalCases.total.closed_cases}</h3>
    <h4 style="padding-bottom: 10px;">Average Death Cases: ${globalCases.percentage.deaths}</h3>
    <h4 style="padding-bottom: 10px;">Average Closed Cases: ${globalCases.percentage.closed_cases}</h3>
    <h4>Mortality Rate: ${globalCases.percentage.mortality_rate}</h3>
    `
    document.querySelector('.data-header').innerHTML = globalHeader
    document.querySelector('.data-col-1').innerHTML = global
    document.querySelector('.data-col-2').innerHTML = global2

};

function getFullDate(day, month, year) {
    let d = new Date();
    year = (year) ? year.toString() : d.getFullYear().toString();
    month = (month) ? getMonth(month) : getMonth();
    day = (day) ? getDay(day) : getDay();



    return year+"."+month+"."+day;
}




async function consultCasesToday(){
    let apiUrl = 'https://covid-api-info.herokuapp.com/api/covid/cases'//'https://covid-api-info.herokuapp.com/api/covid/cases/';
    let countries = await fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        console.log(data.length);
        return data;
    }).catch(err => {
        console.log("Hubo un error: " + err);
        return {};
    });
    return countries;
}

async function consultGlobalStatistics(){
    let apiUrl = 'https://covid-api-info.herokuapp.com/api/covid/cases/basic_statistics'//'https://covid-api-info.herokuapp.com/api/covid/cases/';
    let statistics = await fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        console.log("hola mundo");
        console.log(data.length);
        return data;
    }).catch(err => {
        console.log("Hubo un error: " + err);
        return {};
    });
    return statistics;
}

function getMonth(month) {
    if(!month){
        let d = new Date();
        month = d.getMonth() + 1;
    }
    if (month < 10) {
        month = "0" + month;
    }else{
        month = month.toString();
    }
    return month;
}

function getDay(day) {
    if(!day){
        let d = new Date();
        day = d.getDate();
    }
    if (day < 10) {
        day = "0" + day;
    }else{
        day = day.toString();
    }
    return day;
}


async function searchCountry() {
    let countryName = await document.getElementById("country-name-input").value;
    if(countryName){
        makeCountryCasesTable(countryName.toUpperCase());    
    }else{
        makeCountryCasesTable();    
    }
}