window.onload = () => {
}

async function makeTableByCountry() {

    let countryName = await document.getElementById("country-name-input").value;
    let countryData = await consultCasesOnCountry(countryName);
    let countryGrowthData = await consultGrowthOnCountry(countryName);
    //Only errors has code TODO: fix the API and every api-call
    if(countryData.code){
        alert("(404) Couldn't find data related with the country " + countryName.toUpperCase());
    }else{
        //showStatisticsLastDays(countryName, countryData, countryGrowthData);
    
        var countriesHtml = `
        <tr>
          <th colspan="13" class="country-table-tittle">${countryName.toUpperCase()}</th>
        <tr>
        <tr>
          <th rowspan = "2" class="country-table-tittle">Updated_date</th>
          <th rowspan = "2" class="country-table-tittle">Days Since Previous Update</th>
    
    
          <th colspan="4" class="country-table-tittle">Total Of</th>
          <th colspan="3" class="country-table-tittle">Percentage Of</th>
          <th colspan="4" class="country-table-tittle">Growth</th>
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
          <th class="country-table-tittle">New Deaths</th>
          <th class="country-table-tittle">New Recovered</th>
          <th class="country-table-tittle">Growth Factor</th>
        </tr>`;

        let growthDataArray = [];
        for (let i = 0; i < countryData.length; i++) {
            if(i < countryData.length - 1){
                
                let newConfirmed = countryGrowthData[i].new_confirmed_cases;
                let newDeaths = countryGrowthData[i].new_death_cases;
                let newRecovered = countryGrowthData[i].new_recovered_cases;
                let growthFactor = countryGrowthData[i].growth_factor;

                let growthData = {
                    new_confirmed: newConfirmed,
                    new_deaths: newDeaths,
                    new_recovered: newRecovered,
                    growth_factor: growthFactor,
                    date: countryData[i].updated_date
                }; 
                growthDataArray.push(growthData);
                
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
                <td class="table-data">${growthFactor}</td>
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
        document.querySelector('.country-name').innerHTML = countryName.toUpperCase();
        await resetCanvas("line-chart-new-confirmed", "graph-confirmed");
        await resetCanvas("line-chart-new-recovered", "graph-recovered");
        await resetCanvas("line-chart-new-deaths", "graph-deaths");
        displayNewCasesGraph(growthDataArray);
        document.querySelector('.my-country-table-container').innerHTML = countriesHtml
    }  
}


function search() {
    if(event.key === 'Enter') {
        makeTableByCountry();       
    }
}

async function showStatisticsLastDays(countryName, countryData, countryGrowthData){

    
    var globalHeader = `
    <div class="total-header total-regular">${countryName.toUpperCase()}</div>
    `
    var global = `
    <div class="total-tittle total-regular">Global Confirmed Cases </div>
    <div class="total-result">${""}</div>
    <div class="total-tittle total-regular">Global Active Cases </div>
    <div class="total-result total-last-item">${""}</div>
    <div class="total-tittle death-tittle">Mortality Rate </div>
    <div class="total-result death">${""}</div>
    <div class="total-tittle death-tittle">Average Death Cases </div>
    <div class="total-result death">${""}</div>
    `;

    var global2 = `
    <div class="total-tittle death-tittle">Global Death Cases </div>
    <div class="total-result death">${""}</div>
    <div class="total-tittle recovered-tittle">Global Recovered Cases </div>
    <div class="total-result recovered total-last-item">${""}</div>
    <div class="total-tittle total-regular">Global Closed Cases </div>
    <div class="total-result">${""}</div>
    <div class="total-tittle total-regular">Average Closed Cases </div>
    <div class="total-result">${""}</div>
    `
    document.querySelector('.data-header').innerHTML = globalHeader
    document.querySelector('.data-col-1').innerHTML = global
    document.querySelector('.data-col-2').innerHTML = global2

};
