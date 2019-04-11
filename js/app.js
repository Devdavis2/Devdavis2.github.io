
console.log('hello');

// const queryType = `t=`
// let titleQuery = 'Cashierless Amazon Go stores are planning to accept cash'

const newsURL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5909123013824ac0b06a5ce48c3afe05'

// fetch(newsURL)
// .then(response => response.json())
// .then(data => {

// console.log(data); 
// });


// // Fridays lesson
// const newsData = $.ajax({
//   url: newsURL
// })
// console.log(newsData.responseJSON);

// const getNews = () => {
//   $.ajax({
//     url: newsURL
//   }).then((newsData) => {
//     // $('.container').html(`
//     //     <h2> ${newsData.Name} </h2>
//     //     <h3> ${newsData.Title} </h3>
//     //     <h4> ${newsData.Author} <h4>
//     //     <p> ${newsData.Description} </p>
//     //     `)
//     console.log('news' + newsData);
    
//   }, (error) => {
//     console.error(error)
//   })
  
// }



const getNews = () => {
  $.ajax({
    url: newsURL
  }).then((newsData) => {

    const i = getNews;
    for (let i=0; i<=8; i++) {
      const $blurb = $('<div>')

      // START OF ROW_1
      if (i>=0 && i<=2){
        const $h2 = $('<h2>').attr('class','title')
        .text(newsData.articles[i].title)
        $($blurb).append($h2);

        const $p = $('<p>').attr('class','description')
        .text(newsData.articles[i].description)
        $($blurb).append($p);

        const $h5 = $('<h5>').attr('class','author')
        .text(newsData.articles[i].author)
        $($blurb).append($h5);

// READ MORE CONTENT BUTTON FUNCTION

const $button = $('<button>').attr('class', 'button')
.text('Read More').on('click', function (){
  $(newsData.articles[i].url.length)
  let articlesstring = ""
  // console.log(newsData.articles[i].url.length);

    for (let j=0; j < newsData.articles[i].url.length; j++) {
      articlesstring += newsData.articles[i].url[j]
    }
    console.log(articlesstring);    
        })
        $($blurb).append($button);


// CONTENT FUNCTION LOOP

        const $contentURL = $('<content>').attr('class', 'content')
        // .text(newsData.articles[i].content)
        $($blurb).append($contentURL);
        

  // CONTENT IMAGES
        const $img = $('<img>').attr('class','img')
        $img.attr('src', newsData.articles[i].urlToImage)
        $($blurb).append($img)
        $('.row_1').append($blurb)

      }
      // END OF ROW_1

      // START OF ROW_2

      if (i>=3 && i<=5){
        const $h2 = $('<h2>').attr('class','title')
        .text(newsData.articles[i].title)
        $($blurb).append($h2);

        const $p = $('<p>').attr('class','description')
        .text(newsData.articles[i].description)
        $($blurb).append($p);

        const $h5 = $('<h5>').attr('class','author')
        .text(newsData.articles[i].author)
        $($blurb).append($h5);

        const $img = $('<img>').attr('class','img')
        $img.attr('src', newsData.articles[i].urlToImage)
        $($blurb).append($img)
        $('.row_2').append($blurb)
      }
      // END OF ROW_2

      // START OF ROW_3

      if (i>=6 && i<=8){
        const $h2 = $('<h2>').attr('class','title')
        .text(newsData.articles[i].title)
        $($blurb).append($h2);

        const $p = $('<p>').attr('class','description')
        .text(newsData.articles[i].description)
        $($blurb).append($p);

        const $h5 = $('<h5>').attr('class','author')
        .text(newsData.articles[i].author)
        $($blurb).append($h5);

        const $img = $('<img>').attr('class','img')
        $img.attr('src', newsData.articles[i].urlToImage)
        $($blurb).append($img)
        $('.row_3').append($blurb)
      }
      // END OF ROW_2
        // const $h2 = $('<h2>').attr('class','title')
        // .text(newsData.articles[i].title)
        // $('blurb').append($h2);

        // const $p = $('<p>').attr('class','description')
        // .text(newsData.articles[i].description)
        // $('blurb').append($p);

        // const $h5 = $('<h5>').attr('class','author')
        // .text(newsData.articles[i].author)
        // $('blurb').append($h5);

        // const $img = $('<img>').attr('class','img')
        // $img.attr('src', newsData.articles[i].urlToImage)
        // $('blurb').append($img)
  
      }
 
  }, (error) => {
    console.error(error)
  })
}
getNews()
































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