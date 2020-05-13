window.onload = () => {
  displayStores();
}

var map;
var markers = [];
var infoWindow;

function searchCountries() {
  let countryCode = document.getElementById("country-code-input").value;
  displayStores(countryCode);
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  showStoresMarkers(countryCode)

}

function initMap() {
  var losAngeles = { lat: 34.063380, lng: -118.358080 };
  map = new google.maps.Map(document.getElementById('map'), { //document.getElementById indicates where it's going to live the "map"
    center: losAngeles,
    zoom: 3,
    mapTypeId: 'roadmap',
  });
  infoWindow = new google.maps.InfoWindow();
  showStoresMarkers();
}



async function consultCasesToday() {
  let apiUrl = 'http:s//covid-api-info.herokuapp.com/api/covid/cases'//'https://covid-api-info.herokuapp.com/api/covid/cases/';
  countryCases = await fetch(apiUrl).then(response => {
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

async function displayStores(countryCode) {
  //stores.map(function(store,index))
  var storesHtml = '';
  let counter = 1;
  var countryCases = await consultCasesToday();
  console.log(countryCases);
  for (let index = 0; index < countryCases.length; index++) {
    let countryName = countryCases[index].country;//countries[index].addressLines;
    let confirmedCases = countryCases[index].total.confirmed;//countries[index].phoneNumber;
    if (countryName.includes(countryCode) || countryCode == null) {
      storesHtml += `
                  <div class="store-container" onclick="setOnClickListener(${index});" >
                      <div class="store-container-background">
                          <div class="store-info-container">
                              <div class="store-address">
                                  <span> <b>${countryName} </b></span> 
                                  <span> Confirmed cases: <b>${confirmedCases}</b> </span>
                              </div>
                              <div class="store-phone-number">
                              ${"Active cases: " + countryCases[index].total.actives}
                              </div>   
                              <div class="store-phone-number">
                              ${"Recovered cases: " + countryCases[index].total.recovered}
                              </div>   
                              <div class="store-phone-number">
                              ${"Death cases: " + countryCases[index].total.deaths}
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
    document.querySelector('.store-list').innerHTML = storesHtml
  }
}

function setOnClickListener(index) {
  google.maps.event.trigger(markers[index], 'click');
  var latLng = markers[index].getPosition();
  map.setCenter(latLng);
  map.setZoom(7);
}

async function showStoresMarkers(countryCode) {
  var bounds = new google.maps.LatLngBounds();
  for (var [index, country] of countries.entries()) {


    var latlng = new google.maps.LatLng(
      countries[index].coordinates.latitude,
      countries[index].coordinates.longitude);

    var status = "Some status";
    var name = countries[index].country;
    var phoneNumber = "SomePhoneNumber";
    var address = "SomeAdress";
    bounds.extend(latlng)
      createMarker(name, index + 1, latlng);
  }
}

async function showGrowth(country) {
  let apiUrl = `http:s//covid-api-info.herokuapp.com/api/covid/cases/country/${country}/growth`//'https://covid-api-info.herokuapp.com/api/covid/cases/';
  let countries = await fetch(apiUrl).then(response => {
    return response.json();
  }).then(data => {
    console.log(data.length);
    return data;
  }).catch(err => {
    return {};
    console.log("Hubo un error: " + err);
  });
  return countries[0];
}

function createMarker(name, index, latlng) {


  var html = "<b>" + name + "</b> <br/> " + "some-status" + " <hr/> <br/>" + "someAdress";
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    icon: {
      url: "https://i.imgur.com/fa6vgMx.png"
    },
    label: index.toString()
  });
  google.maps.event.addListener(marker, 'click', async function () {
    let countryGrowth = await showGrowth(name);
    console.log(countryGrowth);
    var aux = `
              <div class="marker-container">
                  <div class="marker-store">
                      <div class="marker-store-name">
                          <label style="font-size: large;"><b>${name}</b></label>
                      </div>
                      <div class="marker-store-status">
                      Last updated date: ${countryGrowth.date}
                      </div>      
                      <div class="marker-store-status">
                      Days since previous update: ${countryGrowth.days_since_previous_update}
                      </div>      
                  </div>
                  <div class= "marker-store-info">
                      <div class="marker-info">
                          <div class="marker-store-address">
                          <u>New Confirmed Cases</u>: <b>+${countryGrowth.new_confirmed_cases}</b>
                          </div>
                          <div class="marker-store-phone">
                          <u>New Active Cases</u>: <b>+${countryGrowth.new_active_cases}</b>
                          </div>
                          <div class="marker-store-phone" style="color:red">
                          <u>New Death Cases</u>: <b>+${countryGrowth.new_death_cases}</b>
                          </div>
                          <div class="marker-store-phone" style="color:green">
                          <u>New Recovered Cases</u>: <b>+${countryGrowth.new_recovered_cases}</b>
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