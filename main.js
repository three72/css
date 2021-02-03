$(document).ready(function() {
    $("head").prepend('<script src="/-/media/peet/General Images/SA/Bluestone/assets/parallaxmin.js"></script>');
    $("head").prepend('<script src="/-/media/plugins/slickmin.js"></script>');
    $("head").prepend('<link href="/-/media/plugins/slick.css" rel="stylesheet" />');
    $("head").prepend('<link href="https://cdn.jsdelivr.net/gh/three72/css@340accce595a0caa3829195ccfe77c3ce2263d4a/style.css" rel="stylesheet" />');
   setTimeout(function(){ 
       $('.card__full-width.card__full-width--image-right .card__image-wrapper').parallax({imageSrc: '/-/media/peet/update-images/sa/lightsview/lightsview-updates-grant-masonryv2/lightsview-updates-grant-masonryv2021.ashx'}); 
          $(".container-4-columns").slick({
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 700,
                arrows: false,
                variableWidth: true

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
   }, 100);
   

});
