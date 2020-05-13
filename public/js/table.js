window.onload = () => {
    makeCountryCasesTable();
}

async function makeCountryCasesTable(countryCode) {

    let countries = await consultCasesToday();

    //stores.map(function(store,index))
    var countriesHtml = `<tr>
    <th rowspan = "2" class="table-pos" style="background-color: #343a40; color: white"></th>
    <th rowspan = "2" class="table-country" style="background-color: #343a40; color: white">Country</th>
    <th colspan="4" class="table-t" style="background-color: #343a40; color: white">Total Of</th>
    <th colspan="3" class="table-p" style="background-color: #343a40; color: white">Percentage Of</th>
    <tr>
      <th class="table-t-confirmed" style="background-color: #343a40; color: white">Confirmed</th>
      <th class="table-t-actives" style="background-color: #343a40; color: white">Actives</th>
      <th class="table-t-deaths" style="background-color: #343a40; color: white">Deaths</th>
      <th class="table-p-recovered" style="background-color: #343a40; color: white">Recovered</th>
      <th class="table-p-actives" style="background-color: #343a40; color: white">Actives</th>
      <th class="table-p-deaths" style="background-color: #343a40; color: white">Deaths</th>
      <th class="table-p-recovered" style="background-color: #343a40; color: white">Recovered</th>
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
          <td class="table-pos">${index +1}</th>
          <td class="table-country">${countryName}</th>
          <td class="table-t-confirmed">${confirmedCases}</th>
          <td class="table-t-actives">${activeCases}</th>
          <td class="table-t-deaths">${deathCases}</th>
          <td class="table-p-recovered">${recoveredCases}</th>
          <td class="table-p-actives">${percentageActives}</th>
          <td class="table-p-deaths">${percentageDeaths}</th>
          <td class="table-p-recovered">${percentageRecovered}</th>
        </tr>
            `

    }
    document.querySelector('.my-table-container-s').innerHTML = countriesHtml
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