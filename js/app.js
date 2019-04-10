
console.log('hello');

const ts = 1
const privateKey = 'a0cda04987b968ca37b0519019645ae8'
const publicKey = 'Bbbe3b3e008ddc8eda8950c6c41881ebb6994544'
const hash = '1505641d8bf74e3e24ea808cf0152de9'

const charactersURL = `https://gateway.marvel.com:443/v1/public/characters?limit=20&apikey=a0cda04987b968ca37b0519019645ae8`

fetch(charactersURL)
.then(response => response.json())
.then(data => {

console.log(hash); 
});







































// const getMovie = () => {
//     $.ajax({
//         url: queryURL + titleQuery
//     }).then((movieData) => {
//         // console.log(movieData)
//         $('.container').html(`
//     <h2>${movieData.Title}<h2>
//     <h3>${movieData.Year}</h3>
//     <h4>${movieData.Rated}</h4>
//     <h5>${movieData.Genre}</h5>
//     <p>${movieData.Plot}</p>
//     `)
//         $('<img>')
//         .attr('src', movieData.Poster)
//         .attr('alt', movieData.Title)
//         .appendTo($('.container'))
// }, (error) => {
//     console.error(error)
// }) 
// }
// // console.log(movieData.responseJSON);
// $(() => { // document on reay

//         // input value search for movies. 
//     $('form').on('submit', (event) =>{
//         event.preventDefault()
//         titleQuery = $('input[type="text"]').val()
//         getFood()
//     })
// });



//     const defaultBounds = new google.maps.LatLngBounds(
//         new google.maps.LatLng(41.0398,  -73.5425),
//         new google.maps.LatLng(41.1106, -73.5455));

//         const boundsOptions = {
//         bounds: defaultBounds
//         }

//         const input = document.getElementById('searchTextField');
//         var options = {
//         bounds: defaultBounds,
//         types: ['establishment', '(stamford)']
//         };

//         autocomplete = new google.maps.places.autocomplete(input, options);

//         // Bias the autocomplete object to the user's geographical location,
// // as supplied by the browser's 'navigator.geolocation' object.

// function geolocate() {
// if (navigator.geolocation) {
// navigator.geolocation.getCurrentPosition(function(position) {
//   var geolocation = {
//     lat: position.coords.latitude,
//     lng: position.coords.longitude
//   };
//   var circle = new google.maps.Circle(
//       {center: geolocation, radius: position.coords.accuracy});
//   autocomplete.setBounds(circle.getBounds());
// });
// }
// }

// autocomplete.bindTo('bounds', map);

// });