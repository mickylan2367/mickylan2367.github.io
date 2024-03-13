$("#container .slide_show").slick({
    autoplay:true, /*自動的に動き出すか。初期値はfalse*/
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:'<div id="container slick-prev"></div>',
    nextArrow:'<div id="container slick-next"></div>',
    centerMode:true,
    variableWidth:true,
    dots:false,
});


$(".openbtn").click(function(){ /*ボタンがクリックされたら*/
    $(this).toggleClass('active');/*ボタンにactiveクラスを付与し*/
    $("#g-nav").toggleClass('panelactive');/*ナビゲーションにpanelaciveクラスを付与*/
    $(".circle-bg").toggleClass('circleactive');/*丸背景にcircleactiveクラスを付与*/
});

$("#g-nav a").click(function(){
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
});


$(window).on('load', function(){
    $("#splash-logo").delay(1200).fadeOut('slow');
    $("#splash").delay(2000).fadeOut('slow', function(){
        $('body').addClass('appear'); /*フェードアウト後bodyいappearクラス付与*/
    });
});

