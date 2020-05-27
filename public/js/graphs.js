async function displayNewCasesGraph(growthData) {

    let growthDataLength = growthData.length - 1;
    let dates = [];
    let confirmedCases = [];
    let recoveredCases = [];
    let deathCases = [];

    let newConfirmed = [];
    let newRecovered = [];
    let newDeaths = [];

    let averageConfirmed = 0;
    let averageRecovered = 0;
    let averageDeaths = 0;

    for (let i = 0; i < growthDataLength; i++) {
        dates.push(growthData[i].date);
        newConfirmed.push(growthData[i].new_confirmed);
        newRecovered.push(growthData[i].new_recovered);
        newDeaths.push(growthData[i].new_deaths);

        averageConfirmed += growthData[i].new_confirmed;
        averageRecovered += growthData[i].new_recovered;
        averageDeaths += growthData[i].new_deaths;

    }
    console.log(dates, confirmedCases);
    new Chart(document.getElementById("line-chart-new-confirmed"), {
        type: 'line',
        data: {
            labels: dates.reverse(),
            datasets: [{
                data: newConfirmed.reverse(),
                label: "New confirmed cases",
                borderColor: "#5fb7da",
                borderWidth: 2,
                fill: false
            },
            ]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "white"
                }
            },
     
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 18
                    },
                    gridLines: {
                        color: "rgb(184, 184, 184, 0.3)",
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                    },
                    gridLines: {
                        color: "rgb(184, 184, 184, 0.3)",
                    }
                }]
            },
            datasets:{
                fontColor: "white"
            },
            title: {
                fontColor: "white",
                fontSize: 25,
                display: true,
                text: `New Confirmed Cases Per Day`
            }
        }
    });
    new Chart(document.getElementById("line-chart-new-recovered"), {
        type: 'line',
        data: {
            labels: dates.reverse(),
            datasets: [
                {
                    data: newRecovered.reverse(),
                    label: "New recovered cases",
                    borderColor: "rgb(33, 175, 33)",
                    borderWidth: 2,
                    fill: false
                },
            ]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "white"
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 18
                    },
                    gridLines: {
                        color: "rgb(184, 184, 184, 0.3)",
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                    },
                    gridLines: {
                        color: "rgb(184, 184, 184, 0.3)",
                    }
                }]
            },
            datasets:{
                fontColor: "white"
            },
            title: {
                fontColor: "white",
                fontSize: 25,
                display: true,
                text: `New Recovered Cases Per Day`
            }
        }
    });
    new Chart(document.getElementById("line-chart-new-deaths"), {
        type: 'line',
        data: {
            labels: dates.reverse(),
            datasets: [
            {
                data: newDeaths.reverse(),
                label: "New death cases",
                borderColor: "rgb(218, 51, 51)",
                borderWidth: 2,
                fill: false
            }
            ]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "white"
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 18
                    },
                    gridLines: {
                        color: "rgb(184, 184, 184, 0.3)",
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "white"
                    },
                    gridLines: {
                        color: "rgb(184, 184, 184, 0.3)",
                    }
                }]
            },
            datasets:{
                fontColor: "white"
            },
            title: {
                fontColor: "white",
                fontSize: 25,
                display: true,
                text: `New Death Cases Per Day`
            }
        }
    });
}
