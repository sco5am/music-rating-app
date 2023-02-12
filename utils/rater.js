function onload(event) {
   
    var myDataService =  {
        rate:function(rating) {
               return {then:function (callback) {
                   setTimeout(function () {
                       callback((Math.random() * 5)); 
                   }, 1000); 
               }
           }
       }
   }

   var starRating1 = raterJs( {
       starSize:32, 
       element:document.querySelector("#rater"), 
       rateCallback:function rateCallback(rating, done) {
           this.setRating(rating); 
           done(); 
       }
   }); 

document.querySelector('#rater6-button').addEventListener("click", function() {
   starRating1.clear();
   console.log(starRating1.getRating());
}, false); 

}

window.addEventListener("load", onload, false); 