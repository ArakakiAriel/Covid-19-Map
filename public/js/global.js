window.onload = () => {
    makeGlobalCasesTable();
    loadAverageStatistics();
}

async function makeGlobalCasesTable() {

    let date;
    let infectedCountries;
    let confirmedCases;
    let activeCases;
    let deathCases;
    let recoveredCases;
    let percentageActives;
    let percentageDeaths;
    let percentageRecovered;
    let newConfirmed;
    let newDeaths;
    let newRecovered;
    let growthFactor;
    var statisticsHtml = `<tr>
    <th rowspan = "2" class="country-table-tittle">Updated_Date</th>
    <th rowspan = "2" class="country-table-tittle">Infected Countries</th>


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

  let redTD = `<td style="color: red; background-color: #efdede">`
  let greenTD = `<td style="color: green; background-color: #d8e6da">`

    let statistics = await runLastDaysGlobalStatistics();
    let growthDataArray = [];
        for (let index = 0; index < statistics.length - 1; index++) {
            date = statistics[index].date;
            infectedCountries = statistics[index].infected_countries;
            confirmedCases = statistics[index].total.confirmed;
            activeCases = statistics[index].total.actives;
            deathCases = statistics[index].total.deaths;
            recoveredCases = statistics[index].total.recovered;
            percentageActives = statistics[index].percentage.actives;
            percentageDeaths = statistics[index].percentage.deaths;
            percentageRecovered = statistics[index].percentage.recovered;
            newConfirmed = statistics[index].total.confirmed - statistics[index+1].total.confirmed;
            newDeaths = statistics[index].total.deaths - statistics[index+1].total.deaths;
            newRecovered = statistics[index].total.recovered - statistics[index+1].total.recovered;
            growthFactor = (Math.log(newConfirmed) / Math.log(statistics[index+1].total.actives)).toFixed(2);

            let growthData = {
                new_confirmed: newConfirmed,
                new_deaths: newDeaths,
                new_recovered: newRecovered,
                growth_factor: growthFactor,
                date: statistics[index].date
            };
            growthDataArray.push(growthData);
            statisticsHtml += `
            <tr class="country-list">
              <td class="table-data">${date}</th>
              <td class="table-data table-data-percentages">${infectedCountries}</th>
              <td class="table-data">${numberWithCommas(confirmedCases)}</th>
              <td class="table-data">${numberWithCommas(activeCases)}</th>
              <td class="table-data">${numberWithCommas(deathCases)}</th>
              <td class="table-data">${numberWithCommas(recoveredCases)}</th>
              <td class="table-data table-data-percentages">${percentageActives}</th>
              <td class="table-data table-data-percentages">${percentageDeaths}</th>
              <td class="table-data table-data-percentages">${percentageRecovered}</th>
              `

            if(newConfirmed > 0){
                statisticsHtml += redTD + "+" + newConfirmed + "</td>";
            }else{
                statisticsHtml += greenTD + newConfirmed + "</td>";
            }
            if(newDeaths > 0){
                statisticsHtml += redTD + "+" + newDeaths + "</td>";
            }else{
                statisticsHtml += greenTD + newDeaths + "</td>";
            }
            if(newRecovered > 0){
                statisticsHtml += greenTD + "+" + newRecovered + "</td>"
            }else{
                statisticsHtml += `<td style=" background-color: #e6e6d8">` + newRecovered + "</td>"
            }
            statisticsHtml += `
            <td class="table-data">${growthFactor}</td>
            </tr>`
    
        }
        displayNewCasesGraph(growthDataArray);
    document.querySelector('.my-table-container-s').innerHTML = statisticsHtml
}

async function loadAverageStatistics(){

    let statistics = await runLastDaysGlobalStatistics();
    let statisticsLength = statistics.length - 1;
    var globalHeader = `
    <div class="total-header total-regular">Global Statistics Last ${statisticsLength} Days</div>
    `;

    let totalNewConfirmed = 0;
    let totalNewDeaths = 0;
    let totalNewRecovered = 0;
    for (let index = 0; index < statisticsLength; index++) {
        totalNewConfirmed += statistics[index].total.confirmed - statistics[index+1].total.confirmed;
        totalNewDeaths += statistics[index].total.deaths - statistics[index+1].total.deaths;
        totalNewRecovered += statistics[index].total.recovered - statistics[index+1].total.recovered;
    }
    console.log(totalNewConfirmed);
    console.log(totalNewDeaths);
    console.log(totalNewRecovered);
    //<div class="total-result" style="font-size: 80px;">${globalCases.infected_countries}</div>
    var global = `
    <div class="total-tittle total-regular">Average New Confirmed per Day</div>
    <div class="total-result">+${numberWithCommas((totalNewConfirmed/statisticsLength).toFixed(0))}</div>
    <div class="total-tittle death-tittle">Average New Deaths per Day</div>
    <div class="total-result death">+${numberWithCommas((totalNewDeaths/statisticsLength).toFixed(0))}</div>
    <div class="total-tittle recovered-tittle">Average New Recovered per Day</div>
    <div class="total-result total-minor-result recovered">+${numberWithCommas((totalNewRecovered/statisticsLength).toFixed(0))}</div>
    `;

    var global2 = ""//`
    // <div class="total-tittle death-tittle">Global Death Cases</div>
    // <div class="total-result death">${numberWithCommas(globalCases.total.deaths)} <a class="total-minor">(${globalCases.percentage.deaths})</a></div>
    // <div class="total-tittle recovered-tittle">Global Recovered Cases</div>
    // <div class="total-result recovered">${numberWithCommas(globalCases.total.recovered)} <a class="total-minor">(${globalCases.percentage.recovered})</a></div>
    // <div class="total-tittle death-tittle" >Mortality Rate<div class="total-minor-tittle">(deaths cases / closed cases)</div></div>
    // <div class="total-result death total-minor-result">${globalCases.percentage.mortality_rate}</div>
    // `
    document.querySelector('.data-header').innerHTML = globalHeader
    document.querySelector('.data-col-1').innerHTML = global
    //document.querySelector('.data-col-2').innerHTML = global2

};
