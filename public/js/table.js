window.onload = () => {
    makeCountryCasesTable();
}

async function makeCountryCasesTable(countryCode) {

    let countries = await consultCasesToday();

    console.log(countries);
    //stores.map(function(store,index))
    var countriesHtml = `<tr>
    <th rowspan = "2" class="table-pos" style="background-color: #343a40; color: white"></div>
    <th rowspan = "2" class="table-country" style="background-color: #343a40; color: white">Country</div>
    <th colspan="4" class="table-t" style="background-color: #343a40; color: white">Total Of</div>
    <th colspan="3" class="table-p" style="background-color: #343a40; color: white">Percentage Of</div>
    <tr>
      <th class="table-t-confirmed" style="background-color: #343a40; color: white">Confirmed</div>
      <th class="table-t-actives" style="background-color: #343a40; color: white">Actives</div>
      <th class="table-t-deaths" style="background-color: #343a40; color: white">Deaths</div>
      <th class="table-p-recovered" style="background-color: #343a40; color: white">Recovered</div>
      <th class="table-p-actives" style="background-color: #343a40; color: white">Actives</div>
      <th class="table-p-deaths" style="background-color: #343a40; color: white">Deaths</div>
      <th class="table-p-recovered" style="background-color: #343a40; color: white">Recovered</div>
    </tr>`;
    let counter = 1;
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
          <td class="table-pos">${index +1}</div>
          <td class="table-country">${countryName}</div>
          <td class="table-t-confirmed">${confirmedCases}</div>
          <td class="table-t-actives">${activeCases}</div>
          <td class="table-t-deaths">${deathCases}</div>
          <td class="table-p-recovered">${recoveredCases}</div>
          <td class="table-p-actives">${percentageActives}</div>
          <td class="table-p-deaths">${percentageDeaths}</div>
          <td class="table-p-recovered">${percentageRecovered}</div>
        </tr>
            `

    }
    document.querySelector('.my-table-container-s').innerHTML = countriesHtml
}

async function consultCasesToday(){
    let apiUrl = 'http://localhost:3000/api/covid/cases'//'https://covid-api-info.herokuapp.com/api/covid/cases/';
    let countries = await fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        console.log(data.length);
        return data;
    }).catch(err => {
        return {};
        console.log("Hubo un error: " + err);
    });
    return countries;
}