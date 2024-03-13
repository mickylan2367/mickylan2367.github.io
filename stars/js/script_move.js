
$(window).on('load', function(){
    $("#splash-logo").delay(1200).fadeOut('slow');
    $("#splash").delay(2000).fadeOut('slow', function(){
        $('body').addClass('appear'); /*フェードアウト後bodyいappearクラス付与*/
    });
});

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




// $('.h2-title .type1').on('click', function(){
//     $("#splash-logo").delay(1200).fadeOut('slow')
//     $("#splash").delay(2000).fadeOut('slow', function(){
//         $('body').addClass('appear'); /*フェードアウト後bodyいappearクラス付与*/
//     });

//     $('.splashbg').on('animationed', function(){
//         // 背景が伸びた後に動かしたいJavaScriptがある場合は、この中にJavaScriptを記述する
//     });
// });