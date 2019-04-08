console.log('hello');

$(() => {

    const defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(41.0398,  -73.5425),
        new google.maps.LatLng(41.1106, -73.5455));

        const boundsOptions = {
        bounds: defaultBounds
        }

        const input = document.getElementById('searchTextField');
        var options = {
        bounds: defaultBounds,
        types: ['establishment', '(stamford)']
        };

        autocomplete = new google.maps.places.autocomplete(input, options);

        // Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.

function geolocate() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  var geolocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  var circle = new google.maps.Circle(
      {center: geolocation, radius: position.coords.accuracy});
  autocomplete.setBounds(circle.getBounds());
});
}
}

autocomplete.bindTo('bounds', map);

});