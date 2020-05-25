window.onload = () => {
  displayStores();
}

var map;
var markers = [];
var infoWindow;

function searchCountries() {
  let countryCode = document.getElementById("country-code-input").value;
  displayStores(countryCode.toUpperCase());
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  showStoresMarkers();

}

function initMap() {
  var losAngeles = { lat: -0.858977, lng: -28.016151 };
  map = new google.maps.Map(document.getElementById('map'), { //document.getElementById indicates where it's going to live the "map"
    center: losAngeles,
    zoom: 4,
    mapTypeControl: false,
    minZoom: 3,
    mapTypeId: 'roadmap',
    styles: [
      {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "color": "#356671"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#444444"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#143846"
              },
              {
                  "weight": "1.00"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "color": "#356671"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural.landcover",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural.terrain",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#143846"
              },
              {
                  "visibility": "on"
              }
          ]
      }
  ]
  });
  infoWindow = new google.maps.InfoWindow();
  showStoresMarkers();
}



async function consultCasesToday() {
  let apiUrl = 'https://covid-api-info.herokuapp.com/api/covid/cases'//'https://covid-api-info.herokuapp.com/api/covid/cases/';
  countryCases = await fetch(apiUrl).then(response => {
    return response.json();
  }).then(data => {
    console.log(data.length);
    return data;
  }).catch(err => {
    console.log("Hubo un error: " + err);
    return {};
  });

  return countryCases;
}
//If flag is TRUE then it only search for the entire name.
async function displayStores(countryCode, flag) {
  //stores.map(function(store,index))
  var storesHtml = '';
  let counter = 1;
  var countryCases = await consultCasesToday();
  console.log(countryCases);
  for (let index = 0; index < countryCases.length; index++) {
    let countryName = countryCases[index].country;//countries[index].addressLines;
    let confirmedCases = countryCases[index].total.confirmed;//countries[index].phoneNumber;
    if(flag){
      if (countryName == countryCode || countryCode == null) {
        storesHtml += `
                    <div class="store-container" onclick="setOnClickListener(${index});" >
                        <div class="store-container-background">
                            <div class="store-info-container">
                                <div class="store-address">
                                    <span> <b>${countryName} </b></span> 
                                    <span> Confirmed cases: <b>${numberWithCommas(confirmedCases)}</b> </span>
                                </div>
                                <div class="store-phone-number neutral-tittle">
                                ${"Active cases: " + numberWithCommas(countryCases[index].total.actives)}
                                </div>   
                                <div class="store-phone-number recovered-tittle" >
                                ${"Recovered cases: " + numberWithCommas(countryCases[index].total.recovered)}
                                </div>   
                                <div class="store-phone-number death-tittle">
                                ${"Death cases: " + numberWithCommas(countryCases[index].total.deaths)}
                                </div>      
                            </div>
                            <div class= "store-number-container">
                                <div class="store-number">
                                    ${index + 1}
                                </div>
                            </div>
                        </div>
                    </div>
            `
      }
    }else{
      if (countryName.includes(countryCode) || countryCode == null) {
        storesHtml += `
                    <div class="store-container" onclick="setOnClickListener(${index});" >
                        <div class="store-container-background">
                            <div class="store-info-container">
                                <div class="store-address">
                                    <span> <b>${countryName} </b></span> 
                                    <span> Confirmed cases: <b>${numberWithCommas(confirmedCases)}</b> </span>
                                </div>
                                <div class="store-phone-number neutral-tittle">
                                ${"Active cases: " + numberWithCommas(countryCases[index].total.actives)}
                                </div>   
                                <div class="store-phone-number recovered-tittle" >
                                ${"Recovered cases: " + numberWithCommas(countryCases[index].total.recovered)}
                                </div>   
                                <div class="store-phone-number death-tittle">
                                ${"Death cases: " + numberWithCommas(countryCases[index].total.deaths)}
                                </div>      
                            </div>
                            <div class= "store-number-container">
                                <div class="store-number">
                                    ${index + 1}
                                </div>
                            </div>
                        </div>
                    </div>
            `
      }
    }

    
    
  }
  storesHtml += ` 
  <div class="display-container"  onclick="displayStores();" >
    <div class="display-all-onclick-background">
      <div class="display-all-info">Display all countries</div>
    </div>
  </div>`
  
  document.querySelector('.store-list').innerHTML = storesHtml
}

function setOnClickListener(index) {
  google.maps.event.trigger(markers[index], 'click');
  var latLng = markers[index].getPosition();
  map.setCenter(latLng);
  map.setZoom(6);
}

async function showStoresMarkers(countryCode) {
  var bounds = new google.maps.LatLngBounds();
  var countryCases = await consultCasesToday();
  for (let index=0; index < countryCases.length; index++) {


    var latlng = new google.maps.LatLng(
      countryCases[index].coordinates.latitude,
      countryCases[index].coordinates.longitude);

    var name = countryCases[index].country;
    bounds.extend(latlng)
      createMarker(name, index + 1, latlng, countryCases[index]);
  }
}

async function showGrowth(country) {
  let apiUrl = `https://covid-api-info.herokuapp.com/api/covid/cases/country/${country}/growth`//'https://covid-api-info.herokuapp.com/api/covid/cases/';
  let countries = await fetch(apiUrl).then(response => {
    return response.json();
  }).then(data => {
    console.log(data.length);
    return data;
  }).catch(err => {
    console.log("Hubo un error: " + err);
    return {};
  });
  return countries[0];
}

function createMarker(name, index, latlng, countryData) {


  var html = "<b>" + name + "</b> <br/> " + "some-status" + " <hr/> <br/>" + "someAdress";
  let sizeOfMarker = 100;
    if(countryData.total.confirmed < 10){
      sizeOfMarker = 20;
    }else if(countryData.total.confirmed < 100){
      sizeOfMarker = 30;
    }else if(countryData.total.confirmed < 1000){
      sizeOfMarker = 40;
    }else if(countryData.total.confirmed < 10000){
      sizeOfMarker = 50;
    }else if(countryData.total.confirmed < 10000){
      sizeOfMarker = 60;
    }else if(countryData.total.confirmed < 1000000){
      sizeOfMarker = 70;
    }else{
      sizeOfMarker = 120;
    }
  var image = {
    url: 'https://i.imgur.com/VpKBnQk.png',
    // This marker is 20 pixels wide by 32 pixels high.
    scaledSize: new google.maps.Size(sizeOfMarker, sizeOfMarker),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(10, 0)
  };
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    icon: image,
    label: numberWithCommas(countryData.total.confirmed),
  });
  google.maps.event.addListener(marker, 'click', async function () {
    console.log(name);

    map.setCenter(marker.position);
    map.setZoom(5);
    let countryGrowth = await showGrowth(name);
    displayStores(name, true);
    console.log(countryGrowth);
    var aux = `
              <div class="marker-container">
                  <div class="marker-store">
                      <div class="marker-store-name">
                          <label style="font-size: large;"><b>${name}</b></label>
                      </div>
                      <div class="marker-store-status">
                      Confirmed Cases Ranking: ${(index)}
                      </div>      
                      <div class="marker-store-status">
                      Last updated date: ${countryGrowth.date}
                      </div>      
                      
                  </div>
                  <div class= "marker-store-info">
                      <div class="marker-info">
                          <div class="marker-store-address">
                          <u>New Confirmed Cases</u>: <b>+${numberWithCommas(countryGrowth.new_confirmed_cases)}</b>
                          </div>
                          <div class="marker-store-phone" style="color:red">
                          <u>New Death Cases</u>: <b>+${numberWithCommas(countryGrowth.new_death_cases)}</b>
                          </div>
                          <div class="marker-store-phone" style="color:green">
                          <u>New Recovered Cases</u>: <b>+${numberWithCommas(countryGrowth.new_recovered_cases)}</b>
                          </div>
                          <div class="marker-store-phone">
                          <u>Growth Factor</u>: <b>${countryGrowth.growth_factor}</b>
                          </div>
                      </div>
                  </div>
              </div>
  `;

    infoWindow.setContent(aux);
    infoWindow.open(map, marker);
  });
  markers.push(marker);
}