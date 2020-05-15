window.onload = () => {
    makeCountryCasesTable();
    loadGlobalCases();
}

async function makeCountryCasesTable(countryCode) {

    let countries = await consultCasesToday();

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
    for (let index = 0; index < countries.length; index++) {
        let countryName = countries[index].country;
        let confirmedCases = countries[index].total.confirmed;
        let activeCases = countries[index].total.actives;
        let deathCases = countries[index].total.deaths;
        let recoveredCases = countries[index].total.recovered;
        let percentageActives = countries[index].percentage.actives;
        let percentageDeaths = countries[index].percentage.deaths;
        let percentageRecovered = countries[index].percentage.recovered;
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
    document.querySelector('.my-table-container-s').innerHTML = countriesHtml
}

async function loadGlobalCases(){


    let globalCases = await consultGlobalStatistics();
    var global = `
    <h2 style="padding-bottom: 10px;">${getFullDate()} - Total infected countries: ${globalCases.infected_countries}</h1>
    <h4>Total Confirmed Cases: ${globalCases.total.confirmed}</h3>
    <h4>Total Active Cases:  ${globalCases.total.actives}</h3>
    <h4>Total Death Cases:  ${globalCases.total.deaths}</h3>
    <h4>Total Recovered Cases:  ${globalCases.total.recovered}</h3>
    <h4>Total Closed Cases:  ${globalCases.total.closed_cases}</h3>
    <h4>Average Death Cases: ${globalCases.percentage.deaths}</h3>
    <h4>Mortality Rate: ${globalCases.percentage.mortality_rate}</h3>
    `;
    document.querySelector('.global-data').innerHTML = global

};

function getFullDate(day, month, year) {
    let d = new Date();
    year = (year) ? year.toString() : d.getFullYear().toString();
    month = (month) ? getMonth(month) : getMonth();
    day = (day) ? getDay(day) : getDay();



    return year+"/"+month+"/"+day;
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