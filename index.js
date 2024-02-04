
// 4.1.3章
var bar = new ProgressBar.Line(splash_text, {
    easing:'easeInOut',
    duration:1000,
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


