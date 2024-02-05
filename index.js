
// 4.1.3章
var bar = new ProgressBar.Line(splash_text, {
    easing:'easeInOut',
    duration:5000,
    strokeWidth:0.2,
    color:"#555",
    trailWidth:0.2,
    trailColor:'#bbb',
    text:{
        style:{
            position:'absolute',
            left:'50%',
            top:'50%',
            padding:'0',
            margin:'-30px 0 0 0',
            transform:'translate(-50% -50%)',
            'font-size':'1.5rem',
            'font-weight':'10px',
            color:'#fff',
        },
        autoStyleContainer:false
    },
    
    step:function(state, bar){
        bar.setText(Math.round(bar.value()*100)+' %');
    }
});


// アニメーションスタート
bar.animate(1.0, function(){
    $("#splash_text").fadeOut(10);
    $(".loader_cover-up").addClass("coveranime");
    $(".loader_cover-down").addClass("coveranime");

    $("#splash-logo3").delay(90000).fadeOut('slow')
    $("#splash3").delay(2000).fadeOut('slow', function(){
        $('body').addClass('appear'); /*フェードアウト後bodyいappearクラス付与*/
    });
    $("#splash").fadeOut(10);
});



$('.slider').slick({
    autoplay:true, /*自動的に動き出すか。初期値はfalse*/
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:'<div class="slick-prev"></div>',
    nextArrow:'<div class="slick-next"></div>',
    centerMode:true,
    variableWidth:true,
    dots:false,
});

// picture

// スライダー6, 7
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
var responsiveImage6;

if(windowwidth > 768){
    var responsiveImage6 = [
        {src: 'html_css/pics/universe.webp'},
        {src: 'html_css/pics/sea.webp'},
        {src: 'html_css/pics/nasa.webp'}
    ];
}else{
    var responsiveImage6 = [
        {src: 'html_css/pics/good.gif'},
        {src: 'html_css/pics/love.gif'},
        {src: 'html_css/pics/love2.gif'}
    ];
}
// Vegas全体の設定
$('#slider6').vegas({
    overlay:true,/*overlayの種類はtrue */
    transition:'fade2',/* 切り替わりのアニメーション*/
    transitionDuration:2000,
    delay:5000,
    animationDuration:9000000,
    animation:'random',/*スライドのアニメーション*/
    slides:responsiveImage6,
});


// 読みやすいように幅を調整
if(windowwidth>1200){
    
    $('#author_caption').css({
        'width':'62%'
    });
    $('#motto_adler').css({
        'width':'60%'
    });
    $('#motto_aqua').css({
        'width':'60%'
    });

    $('.button .gradient_pics .caption').css({/*img要素に指定してもいいし、いっそcaptionで幅広げるのもあり？*/
        'width':'500px'
    });

    $('.button .gradient_pics .img').css({/*img要素に指定してもいいし、いっそcaptionで幅広げるのもあり？*/
        'width':'500px',
        'height':'500px'
    });

    $('#caption_fontsize').css({
        'font-size':'small'
    });

    $('.icon').css({
        'margin-left':'40%',
        'margin-right':'40%',
    });

    $('.caption1').css({
        'font-size':'xx-small'
    });


}else{

    $('.slider li').css({
        'margin-right':'100px',
        'margin-left':'100px',
    });

    $('.slider img').css({
        'width':'800px',
        'height':'800px'
    });

    $('#author_caption').css({
        'width':'80%'
    });

    $('#motto_adler').css({
        'width':'80%'
    });

    $('#motto_aqua').css({
        'width':'80%',
        'font-size':'9px'
    });

    $('.button .gradient_pics #slider6').css({
        'width':'800px',
        'height':'800px'
    });

    $('.button .gradient_diary .caption').css({
        'font-size':'25px'
    });

    $('.button .gradient_star .caption').css({
        'font-size':'25px'
    });

    $('.button .gradient_coding .caption').css({
        'font-size':'25px'
    });

    $('.button .gradient_books .caption').css({
        'font-size':'25px'
    });

    $('.button .gradient_form .caption').css({
        'font-size':'25px'
    });

    $('.button .gradient_pics .caption').css({
        'font-size':'25px'
    });

    $('#caption_fontsize').css({
        'font-size':'xx-small'
    });

    $('.icon').css({
        'margin-left':'30%',
        'margin-right':'30%',
        'padding-top':'5px'
    });

    $('.caption1').css({
        'font-size':'xx-small'
    });
};
