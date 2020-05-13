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
      <th colspan="14" style="background-color: #343a40; color: white">${countryName.toUpperCase()}</th>
    <tr>
    <tr>
      <th rowspan = "2" style="background-color: #343a40; color: white">Updated_date</th>
      <th rowspan = "2" style="background-color: #343a40; color: white">Days Since Previous Update</th>


      <th colspan="4" style="background-color: #343a40; color: white">Total Of</th>
      <th colspan="3" style="background-color: #343a40; color: white">Percentage Of</th>
      <th colspan="5" style="background-color: #343a40; color: white">Growth</th>
    </tr>
    <tr>
      <th style="background-color: #343a40; color: white">Confirmed</th>
      <th style="background-color: #343a40; color: white">Actives</th>
      <th style="background-color: #343a40; color: white">Deaths</th>
      <th style="background-color: #343a40; color: white">Recovered</th>

      <th style="background-color: #343a40; color: white">Actives</th>
      <th style="background-color: #343a40; color: white">Deaths</th>
      <th style="background-color: #343a40; color: white">Recovered</th>

      <th style="background-color: #343a40; color: white">New Confirmed</th>
      <th style="background-color: #343a40; color: white">New Actives</th>
      <th style="background-color: #343a40; color: white">New Deaths</th>
      <th style="background-color: #343a40; color: white">New Recovered</th>
      <th style="background-color: #343a40; color: white">Growth Factor</th>
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
              <td>${countryData[i].updated_date}</td>
              <td style="background-color: #c3ceda">${countryGrowthData[i].days_since_previous_update}</td>
              <td>${countryData[i].total.confirmed}</td>
              <td>${countryData[i].total.actives}</td>
              <td>${countryData[i].total.deaths}</td>
              <td>${countryData[i].total.recovered}</td>
              <td style="background-color: #c3ceda" >${countryData[i].percentage.actives}</td>
              <td style="background-color: #c3ceda" >${countryData[i].percentage.deaths}</td>
              <td style="background-color: #c3ceda" >${countryData[i].percentage.recovered}</td>
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
            <td>${countryGrowthData[i].growth_factor}</td>
            </tr>`
            
    

        }else{
            countriesHtml += `
            <tr>
              <td>${countryData[i].updated_date}</td>
              <td></td>
              <td>${countryData[i].total.confirmed}</td>
              <td>${countryData[i].total.actives}</td>
              <td>${countryData[i].total.deaths}</td>
              <td>${countryData[i].total.recovered}</td>
              <td style="background-color: #c3ceda" >${countryData[i].percentage.actives}</td>
              <td style="background-color: #c3ceda" >${countryData[i].percentage.deaths}</td>
              <td style="background-color: #c3ceda" >${countryData[i].percentage.recovered}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
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