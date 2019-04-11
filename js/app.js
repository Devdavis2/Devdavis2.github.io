
// console.log('hello');

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
      const $blurb = $('<div>').addClass('col')

      // START OF ROW_1
      if (i>=0 && i<=2){
        const $h2 = $('<h2>').attr('class','title')
        .text(newsData.articles[i].title)
        $($blurb).append($h2);

        const $p = $('<p>').attr('class','description')
        // .text(newsData.articles[i].description)
        $($blurb).append($p);

        const $h5 = $('<h5>').attr('class','author')
        .text(newsData.articles[i].author)
        $($blurb).append($h5);

// Copy starting from here

// READ MORE CONTENT BUTTON FUNCTION

// const $modalContent = $('<modalContent')
//        $blurb.append($modalContent)

const $button = $('<button>').attr('class', 'button')
.text('Read More').on('click', function (){
  $(newsData.articles[i].url.length)
  $('.modal').show()
  .text(newsData.articles[i].title + ' ' + newsData.articles[i].description + newsData.articles[i].url)
  
  

  $('.modal').on('click', function (){
    $('.modal').hide()
  })
  
  let articlesstring = ""
  // console.log(newsData.articles[i].url.length);
    for (let j=0; j < newsData.articles[i].url.length; j++) {
      articlesstring += newsData.articles[i].url[j]
    }
    console.log(articlesstring);    
        })
        $($blurb).append($button);

        // Close modal/article
const $closeBtn = $('#close');
const closeModal = () => {
  $modal.css('display', 'none')
}

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
        // .text(newsData.articles[i].description)
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
        // .text(newsData.articles[i].description)
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

        const $img = $('<img>').attr('class','img')
        $img.attr('src', newsData.articles[i].urlToImage)
        $($blurb).append($img)
        $('.row_3').append($blurb)
      } // END OF ROW_3

      //  const MC = [newsData.articles[i].title, newsData.articles[i].description, newsData.articles[i].url]
      //   $blurb.append(MC)

  
      } // End of For Loop line 49                    
 
  }, (error) => {
    console.error(error)
  })

}
getNews()




 // START OF THE MODAL BUTTONS 
  // MODAL BUTTON FUNCTIONALITY

         
  // const $close = $('<div>').attr('class','close')
  // const $openReadMore = $('$openReadMore');               
  const $closeBtn = $('#closeBtn');
  
  // APPEND MODEL FUNTIONALITY
  // $($blurb).append($modalTextBox); // Grab the Read More  
  // $($blurb).append($modal); // $('.modal');
  // $($blurb).append($openReadMore);
  // $($blurb).append($close); // Grabbing close button
  // $($blurb).append($closeBtn);
























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