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
            'font-size':'1rem',
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
    var responsiveImage = [
        {src:'../../stars/pics/julia.png'},
        {src:'../../stars/pics/julia2.png'},
        {src:'../../stars/pics/julia3.png'}
    ];
}else{
    var responsiveImage = [
        {src:'../../stars/pics/julia.png'},
        {src:'../../stars/pics/julia2.png'},
        {src:'../../stars/pics/julia3.png'}
    ]
}

// Vegas全体の設定
$('#slider').vegas({
    overlay:true, //画面の網線やドットのオーバーレイパターン画像を指定
    transition:'blur', // 切り替わりのアニメーション
    transitionDuration:20000, //切り替わりのアニメーション時間をミリ秒単位で指定
    delay:10000, // スライド間の遅延時間をミリ秒単位で指定
    animationDuration:20000,
    animation:'kenburns',
    slides:responsiveImage,
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