async function displayNewCasesGraph(growthData) {

    let confirmedChart = document.getElementById("line-chart-new-confirmed").getContext("2d");
    let recoveredChart = document.getElementById("line-chart-new-recovered").getContext("2d");
    let deathChart = document.getElementById("line-chart-new-deaths").getContext("2d");

    confirmedChart.clearRect(0, 0, 1000, 480);

    recoveredChart.clearRect(0, 0, 1000, 480);

    deathChart.clearRect(0, 0, 1000, 480);

    let growthDataLength = growthData.length - 1;
    let maxTicks = 0;
    if(growthDataLength > 35) {
        maxTicks = growthDataLength/7;
    }else if(growthDataLength < 10){
        maxTicks = growthDataLength;
    }else{
        maxTicks = growthDataLength/3;
    }
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
    
    new Chart(confirmedChart, {
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
                        fontSize: 15,
                        autoSkip: true,
                        maxTicksLimit: maxTicks
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
        
    new Chart(recoveredChart, {
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
                        fontSize: 15,
                        autoSkip: true,
                        maxTicksLimit: maxTicks
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
    new Chart(deathChart, {
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
                        fontColor: "white",
                        fontSize: 15,
                        autoSkip: true,
                        maxTicksLimit: maxTicks
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

async function resetCanvas(canvasName, canvasContainer){
    console.log("ENTRO AL RESET CANVAS", canvasName, canvasContainer);
    await $(`#${canvasName}`).remove(); // this is my <canvas> element
    console.log("1");
    await $(`.${canvasContainer}`).append(`<canvas class="canvas" id="${canvasName}"></canvas>`);
    console.log("2");
    let canvas = await document.querySelector(`#${canvasName}`);
    console.log("3");
    console.log(canvas);
    ctx = canvas.getContext('2d');
    ctx.canvas.width = 1000;
    ctx.canvas.height = 480;
  };