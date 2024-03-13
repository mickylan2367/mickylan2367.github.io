$('.slide_show').slick({
    autoplay:true, /*自動的に動き出すか。初期値はfalse*/
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:'<div id="slick-prev"></div>',
    nextArrow:'<div id="slick-next"></div>',
    centerMode:true,
    variableWidth:true,
    dots:false,
});