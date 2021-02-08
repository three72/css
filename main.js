$(document).ready(function() {
    $("head").prepend('<script src="/-/media/peet/General Images/SA/Bluestone/assets/parallaxmin.js"></script>');
    $("head").prepend('<script src="/-/media/plugins/slickmin.js"></script>');
    $("head").prepend('<link href="/-/media/plugins/slick.css" rel="stylesheet" />');
    console.log("started");
   setTimeout(function(){ 
//         var allCards = $(".card__full-width .card__image-wrapper");
    
//             allCards.each(function(i,e) {
//                 var backgroundImage = $(this).css("backgroundImage");
//                 backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
//                console.log(backgroundImage);
//                 $(this).parallax({
//                     imageSrc: backgroundImage,
//                     zIndex: 999,
//                     speed: 0.0,
//                 });
//             });
       
       $(".carousel-controller__data").append("<div class='slide-down'></div>");
       
          $(".container-4-columns").slick({
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 700,
                arrows: false,
                variableWidth: true,
                responsive: [
                {
                  breakpoint: 840,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                      variableWidth: true,
                  }
                }, 
                ]
            });
            
            var slideCount = $(".slick-slide").not(".slick-cloned").length;
    var slickButton = setInterval(function(){ 
        if($(".slick-dots li button").html() != undefined){
            $(".slick-dots li button").css({
                 "width" : "calc(100% / " + slideCount + ")",
                 "float" : "left"
            });

            $(".slick-dots li button").html("");

            clearInterval(slickButton);
        }
    }, 1000);
       console.log("ended");
   }, 0);
   

});
