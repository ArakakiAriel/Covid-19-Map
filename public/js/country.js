window.onload = () => {
}

async function makeTableByCountry() {

    let countryName = await document.getElementById("country-name-input").value;
    console.log(countryName);
    console.log(countryName);
    let countryData = await consultCasesOnCountry(countryName);
    let countryGrowthData = await consultGrowthOnCountry(countryName);

    var countriesHtml = `
    <tr>
      <th colspan="14" class="country-table-tittle">${countryName.toUpperCase()}</th>
    <tr>
    <tr>
      <th rowspan = "2" class="country-table-tittle">Updated_date</th>
      <th rowspan = "2" class="country-table-tittle">Days Since Previous Update</th>


      <th colspan="4" class="country-table-tittle">Total Of</th>
      <th colspan="3" class="country-table-tittle">Percentage Of</th>
      <th colspan="5" class="country-table-tittle">Growth</th>
    </tr>
    <tr>
      <th class="country-table-tittle">Confirmed</th>
      <th class="country-table-tittle">Actives</th>
      <th class="country-table-tittle">Deaths</th>
      <th class="country-table-tittle">Recovered</th>

      <th class="country-table-tittle">Actives</th>
      <th class="country-table-tittle">Deaths</th>
      <th class="country-table-tittle">Recovered</th>

      <th class="country-table-tittle">New Confirmed</th>
      <th class="country-table-tittle">New Actives</th>
      <th class="country-table-tittle">New Deaths</th>
      <th class="country-table-tittle">New Recovered</th>
      <th class="country-table-tittle">Growth Factor</th>
    </tr>`;
    for (let i = 0; i < countryData.length; i++) {
        if(i < countryData.length - 1){
            
            let newActives = countryGrowthData[i].new_active_cases;
            let newConfirmed = countryGrowthData[i].new_confirmed_cases;
            let newDeaths = countryGrowthData[i].new_death_cases;
            let newRecovered = countryGrowthData[i].new_recovered_cases;
            
            let redTD = `<td style="color: red; background-color: #efdede">`
            let greenTD = `<td style="color: green; background-color: #d8e6da">`
            countriesHtml += `
            <tr>
              <td class="table-data">${countryData[i].updated_date}</td>
              <td class="table-data-percentages">${countryGrowthData[i].days_since_previous_update}</td>
              <td class="table-data">${countryData[i].total.confirmed}</td>
              <td class="table-data">${countryData[i].total.actives}</td>
              <td class="table-data">${countryData[i].total.deaths}</td>
              <td class="table-data">${countryData[i].total.recovered}</td>
              <td class="table-data-percentages" >${countryData[i].percentage.actives}</td>
              <td class="table-data-percentages" >${countryData[i].percentage.deaths}</td>
              <td class="table-data-percentages" >${countryData[i].percentage.recovered}</td>
            `
            if(newConfirmed > 0){
                countriesHtml += redTD + "+" + newConfirmed + "</td>";
            }else{
                countriesHtml += greenTD + newConfirmed + "</td>";
            }
            if(newActives > 0){
                countriesHtml += redTD + "+" + newActives + "</td>"
            }else if(newActives > 0){
                countriesHtml += greenTD + newActives + "</td>"
            }else{
                countriesHtml += `<td style=" background-color: #e6e6d8">` + newActives + "</td>"
            }
            if(newDeaths > 0){
                countriesHtml += redTD + "+" + newDeaths + "</td>";
            }else{
                countriesHtml += greenTD + newDeaths + "</td>";
            }
            if(newRecovered > 0){
                countriesHtml += greenTD + "+" + newRecovered + "</td>"
            }else{
                countriesHtml += `<td style=" background-color: #e6e6d8">` + newRecovered + "</td>"
            }
            countriesHtml += `
            <td class="table-data">${countryGrowthData[i].growth_factor}</td>
            </tr>`
            
    

        }else{
            countriesHtml += `
            <tr>
              <td class="table-data">${countryData[i].updated_date}</td>
              <td class="table-data"></td>
              <td class="table-data">${countryData[i].total.confirmed}</td>
              <td class="table-data">${countryData[i].total.actives}</td>
              <td class="table-data">${countryData[i].total.deaths}</td>
              <td class="table-data">${countryData[i].total.recovered}</td>
              <td class="table-data-percentages" >${countryData[i].percentage.actives}</td>
              <td class="table-data-percentages" >${countryData[i].percentage.deaths}</td>
              <td class="table-data-percentages" >${countryData[i].percentage.recovered}</td>
              <td class="table-data"></td>
              <td class="table-data"></td>
              <td class="table-data"></td>
              <td class="table-data"></td>
              <td class="table-data"></td>
            </tr>
                `

        }

    }
    document.querySelector('.my-country-table-container').innerHTML = countriesHtml
}

async function consultCasesOnCountry(country){
    let apiUrl = `https://covid-api-info.herokuapp.com/api/covid/cases/country/${country}`//'https://covid-api-info.herokuapp.com/api/covid/cases/';
    let countryData = await fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        return data;
    }).catch(err => {
        console.log("Hubo un error: " + err);
        return {};
    });
    return countryData;
}
async function consultGrowthOnCountry(country){
    let apiUrl = `https://covid-api-info.herokuapp.com/api/covid/cases/country/${country}/growth`//'https://covid-api-info.herokuapp.com/api/covid/cases/';
    let countryData = await fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        return data;
    }).catch(err => {
        console.log("Hubo un error: " + err);
        return {};
    });
    return countryData;
}

function search() {
    if(event.key === 'Enter') {
        makeTableByCountry();       
    }
}