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


// 6.1.3章
// 画面の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if(windowwidth > 768){
    var responsiveImage1 = [
        {src:'pics/good.gif'},
        {src:'pics/love.gif'},
        {src:'pics/love2.gif'}
    ];
}else{
    var responsiveImage1 = [
        {src:'pics/sea.webp'},
        {src:'pics/universe.webp'},
        {src:'pics/my_sabian.png'}
    ]
}

// Vegas全体の設定
$('#slider').vegas({
    overlay:true, //画面の網線やドットのオーバーレイパターン画像を指定
    transition:'blur', // 切り替わりのアニメーション
    transitionDuration:2000, //切り替わりのアニメーション時間をミリ秒単位で指定
    delay:10000, // スライド間の遅延時間をミリ秒単位で指定
    animationDuration:90000,
    animation:'kenburns',
    slides:responsiveImage1,
});


// 6.2.6章
// 画像をクリックしたら画面を表示する設定
$(".gallery-list").modaal({
    fullscreen:'true',
    before_open:function(){
        $('html').css('overflow-y', 'hidden');
    },
    after_close:function(){
        $('html').css('overflow-y', 'scroll');
    }
});

$(".video-open").modaal({
    type:'video',
    fullscreen:'true',
    overlay_close:true,
    background:'#28BFE7',
    overlay_opacity:0.8,
    before_open:function(){
        $('html').css('overflow-y', 'hidden');
    },
    after_close:function(){
        $('html').css('overflow-y', 'scroll');
    }
});

// スライドshow!

$('.slide_show').slick({
    autoplay:true, /*自動的に動き出すか。初期値はfalse*/
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:'<div class="slick-prev"></div>',
    nextArrow:'<div class="slick-next"></div>',
    centerMode:true,
    variableWidth:true,
    dots:true,
});


$('.slide_show2').slick({
    arrows:false,/*左右の矢印ナシ*/
    autoplay:true,/* 自動的に動き出すか*/
    autoplaySpeed:0,/*自動的に動かす待ち時間。初期値は3000 */
    speed:6900,/*スライドのスピード*/
    infinite:true,/*スライドをループさせるか*/
    pauseOnHover:false,/*オンマウスでスライドを一時停止するか*/
    pauseOnFocus:false,/*フォーカス時にスライドを一時停止するか*/
    cssEase:'linear',/*動き方。スムースな動きはlinear*/
    slidesToShow:4,/*スライドを一度に4枚見せる*/
    slidesToScroll:1,/*1回のスライドで動かす要素数*/
    resposive:[
        {
            breakpoint:769,/*モニタの横幅が769px以下の場合*/
            settings:{
                slidesToShow:2,/*スライドを画面に2マイ見せる*/
            }
        },

        {
            breakpoint:426,
            settings:{
                slidesToShow:1.5,
            }
        }
    ]

});


$('.slider-top').slick({
    accessibility:false,
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    slidesToShow:1,
    slidesToScroll:1,
    swipe:false,
});

$('.slider-bottom').slick({
    accessibility:false,
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    slidesToShow:1,
    slidesToScroll:1,
    swipe:false,
    rtl:true,
});

$('.slide_show4').slick({
    autoplaySpeed:3000,
    speed:1000,
    autoplay:true,
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:true,
    prevArrow:'<div class="slick-prev4"></div>',
    nextArrow:'<div class="slick-next4"></div>',
    dots:true,
    pauseOnFocus:false,
    pauseOnHover:false,
    pauseOnDotsHover:false, /*ドッツナビゲーションをマウスホバーで一時停止を無効 */
});

$('.slide_show5').slick({
    fade:true,/* 切り替えをフェードで行う*/
    autoplaySpeed:3000,
    speed:1000,
    autoplay:true,
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:true,
    prevArrow:'<div class="slick-prev5"></div>',
    nextArrow:'<div class="slick-next5"></div>',
    dots:true,
    pauseOnFocus:false,
    pauseOnHover:false,
    pauseOnDotsHover:false, /*ドッツナビゲーションをマウスホバーで一時停止を無効 */
});


// スライダー6, 7
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if(windowwidth > 768){
        var responsiveImage6 = [
            {src: 'pics/universe.webp'},
            {src: 'pics/sea.webp'},
            {src: 'pics/nasa.webp'}
        ];

        var responsiveImage7 = [
            // PC用動画と画像
            {
                src:'pics/universe.webp',
                video:{
                    src:['pics/my_submission.mp4'],
                    loop:false,
                    mute:true,
                }
            },
        ];

    }else{
        var responsiveImage6 = [
            {src: 'pics/good.gif'},
            {src: 'pics/love.gif'},
            {src: 'pics/love2.gif'}
        ];

        var responsiveImage7 = [
            // タブレットサイズの場合
            {src: 'pics/universe.webp'},
            {src: 'pics/sea.webp'},
            {src: 'pics/nasa.webp'}
        ];
    }

// Vegas全体の設定
$('#slider6').vegas({
    overlay:true,/*overlayの種類はtrue */
    transition:'fade2',/* 切り替わりのアニメーション*/
    transitionDuration:2000,
    delay:5000,
    animationDuration:20000,
    animation:'random',/*スライドのアニメーション*/
    slides:responsiveImage6,
});

$('#slider7').vegas({
    overlay:true,/*overlayの種類はtrue */
    transition:'fade2',/* 切り替わりのアニメーション*/
    transitionDuration:2000,
    delay:5000,
    animationDuration:20000,
    animation:'random',/*スライドのアニメーション*/
    slides:responsiveImage7,
});

