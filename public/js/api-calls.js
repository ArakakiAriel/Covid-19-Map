
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


async function runLastDaysGlobalStatistics(){
    let statistics;
    let apiUrl = "http://localhost:3000/api/covid/cases/list_basic_statistics"//`https://covid-api-info.herokuapp.com/api/covid/cases/list_basic_statistics`//'https://covid-api-info.herokuapp.com/api/covid/cases/';
        statistics = await fetch(apiUrl).then(response => {
            return response.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log("Hubo un error: " + err);
            return {};
        });
    return statistics;
}


async function consultCasesToday(){
    let apiUrl = 'https://covid-api-info.herokuapp.com/api/covid/cases'//'https://covid-api-info.herokuapp.com/api/covid/cases/';
    let countries = await fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
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
        return data;
    }).catch(err => {
        console.log("Hubo un error: " + err);
        return {};
    });
    return statistics;
}