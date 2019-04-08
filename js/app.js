console.log('hello');

 class ZOMATO {
constructor(){
this.api = "8aa173d3965ae6492837235b004a88af"
this.header = {
  method: 'GET',
  headers: {
    'user-key': this.api,
    'content-type': 'application/json'
  },
  credentials: 'same-origin'
};
  }
  async searchAPI(){
    // categoru url
    const categoryURL = `https://developers.zomato.com/api/v2.1/categories`;  
  
    // category data
  const categoryInfo = await fetch(categoryURL, this.header);
  const categoryJSON = await categoryInfo.json();
  const categories = await categoryJSON.categories;

return{
  categories 
}
  
  }
 }

 class UI {
 constructor(){
   this.loader = document.querySelector('.loader');
   this.restaurantList = document.getElementById('restaurant-list')
 }
 addSelectOptions(categories){
  const search = document.getElementById('searchForm');  
  let output = `<option value='0' selected> select category</option>`;
  categories.forEach(category => {
    output <= `<option value ="${category.categories.id}">${category.categories.name}</option>`
  });
  search.innerHTML = output;
 }
 }

 (function(){
const searchForm = document.getElementById('searchForm'); 
const searchCity = document.getElementById('searchForm'); 
const searchCategory = document.getElementById('searchForm'); 


const zomato = new ZOMATO();

const ui = new UI();
// Add select options
document.addEventListener('DOMConentLoaded',()=>{ })
// Logic starts here
zomato.searchAPI().then(data => console.log(data));
  // ui.addSelectOption(data.categories)); 
  
  // console.log(data));
 })();








// const zomato = ('zomato');
// key = '<8aa173d3965ae6492837235b004a88af>'


//   const baseURL = 'https://developers.zomato.com/api/v2.1/categories'
//   const apiKey = '8aa173d3965ae6492837235b004a88af'
//   const queryType = 't='
//   let titleQuery = 'restaurants'
//   const queryURL = baseURL + apiKey + '&' + queryType
//   const foodData = $.ajax({
//       url: queryURL + titleQuery
      
//   });
//   console.log(queryURL + titleQuery)

//   $(() => {

//   const getFood = () => {
//       $.ajax({
//           url: queryURL + titleQuery
//       }).then((yelpData) => {
//           // console.log(yelpData)
//           $('.container').html(`
//       <h2>${yelpData.Term}<h2>
//       <h3>${yelpData.Location}</h3>
//       <h4>${yelpData.categories}</h4>
//       <h5>${yelpData.Price}</h5>
//       <p>${yelpData.Attributes}</p>
//       `)
//           $('<img>')
//           .attr('src', yelpData.Image)
//           .attr('alt', yelpData.Title)
//           .appendTo($('.container'))
//   }, (error) => {
//       console.error(error)
//   }) 
//   }




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