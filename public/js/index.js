window.onload = () => {
    makeCountryCasesTable();
    loadGlobalCases();
    runLastDaysGlobalStatistics();
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
              <td class="table-data">${numberWithCommas(confirmedCases)}</th>
              <td class="table-data">${numberWithCommas(activeCases)}</th>
              <td class="table-data">${numberWithCommas(deathCases)}</th>
              <td class="table-data">${numberWithCommas(recoveredCases)}</th>
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
    <div class="total-header total-regular">Total infected countries</div>
    <div class="total-result" style="font-size: 80px;">${globalCases.infected_countries}</div>
    `
    var global = `
    <div class="total-tittle total-regular">Global Confirmed Cases</div>
    <div class="total-result">${parseNumber(globalCases.total.confirmed)}</div>
    <div class="total-tittle total-regular">Global Active Cases</div>
    <div class="total-result">${parseNumber(globalCases.total.actives)}</div>
    <div class="total-tittle total-regular">Global Closed Cases<div class="total-minor-tittle">(recovered cases + deaths cases)</div></div>
    <div class="total-result total-minor-result">${parseNumber(globalCases.total.closed_cases)}</div>
    `;

    var global2 = `
    <div class="total-tittle death-tittle">Global Death Cases</div>
    <div class="total-result death">${parseNumber(globalCases.total.deaths)} <a class="total-minor">(${globalCases.percentage.deaths})</a></div>
    <div class="total-tittle recovered-tittle">Global Recovered Cases</div>
    <div class="total-result recovered">${parseNumber(globalCases.total.recovered)} </div>
    <div class="total-tittle death-tittle" >Mortality Rate<div class="total-minor-tittle">(deaths cases / closed cases)</div></div>
    <div class="total-result death total-minor-result">${globalCases.percentage.mortality_rate}</div>
    `
    document.querySelector('.data-header').innerHTML = globalHeader
    document.querySelector('.data-col-1').innerHTML = global
    document.querySelector('.data-col-2').innerHTML = global2

};






async function searchCountry() {
    let countryName = await document.getElementById("country-name-input").value;
    if(countryName){
        makeCountryCasesTable(countryName.toUpperCase());    
    }else{
        makeCountryCasesTable();    
    }
}

