window.onload = () => {
  displayStores();
}

var map;
var markers = [];
var infoWindow;

function searchStores() {
  let zipCode = document.getElementById("zip-code-input").value;
  displayStores(zipCode);
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  showStoresMarkers(zipCode)

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



function displayStores(zipCode) {
  //stores.map(function(store,index))
  var storesHtml = '';
  let counter = 1;
  for (var [index, country] of countries.entries()) {
    let countryName = country.country;//country.addressLines;
    let confirmedCases = country.total.confirmed;//country.phoneNumber;
    storesHtml += `
                  <div class="store-container" onclick="setOnClickListener(${index});" >
                      <div class="store-container-background">
                          <div class="store-info-container">
                              <div class="store-address">
                                  <span> <b>${countryName} </b></span> 
                                  <span> Confirmed cases: <b>${confirmedCases}</b> </span>
                              </div>
                              <div class="store-phone-number">
                              ${"Active cases: " + country.total.actives}
                              </div>   
                              <div class="store-phone-number">
                              ${"Recovered cases: " + country.total.recovered}
                              </div>   
                              <div class="store-phone-number">
                              ${"Death cases: " + country.total.deaths}
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

    document.querySelector('.store-list').innerHTML = storesHtml
  }
}


function setOnClickListener(index) {
  google.maps.event.trigger(markers[index], 'click');
}

function showStoresMarkers(zipCode) {
  var bounds = new google.maps.LatLngBounds();
  for (var [index, country] of countries.entries()) {


    var latlng = new google.maps.LatLng(
      country.coordinates.latitude,
      country.coordinates.longitude);
    var status = "Some status";
    var name = country.country;
    var phoneNumber = "SomePhoneNumber";
    var address = "SomeAdress";
    bounds.extend(latlng)
    if (zipCode == null) {
      createMarker(name, address, latlng, index + 1, status, phoneNumber);
    }
  }
}

function createMarker(name, address, latlng, index, status, phoneNumber) {

  var aux = `
              <div class="marker-container">
                  <div class="marker-store">
                      <div class="marker-store-name">
                          <label onclick="javascript:alert('TODO: Trigger google api for directions');"><b>${name}</b></label>
                      </div>
                      <div class="marker-store-status">
                      ${status}
                      </div>      
                  </div>
                  <div class= "marker-store-info">
                      <div class="marker-icons">
                          <div class="location-icon">
                              <i class="fas fa-location-arrow"></i>
                          </div>
                          <div class="phone-icon">
                              <i class="fas fa-phone-alt"></i>
                          </div>
                      </div>
                      <div class="marker-info">
                          <div class="marker-store-address">
                              ${address}
                          </div>
                          <div class="marker-store-phone">
                              ${phoneNumber}
                          </div>
                      </div>
                  </div>
              </div>
          `
  var html = "<b>" + name + "</b> <br/> " + status + " <hr/> <br/>" + address;
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    icon: {
      url: "https://i.imgur.com/fa6vgMx.png"
    },
    label: index.toString()
  });
  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.setContent(aux);
    infoWindow.open(map, marker);
  });
  markers.push(marker);
}