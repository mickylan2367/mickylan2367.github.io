
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
    speed:1000,
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

if(windowwidth > 1200){
    var responsiveImage1 = [
        {src: 'homePicture/camellia.jpg'},
        {src: 'homePicture/stars.jpg'},
        {src: 'homePicture/rose.jpg'}
    ];

    var responsiveImage6 = [
        {src: 'html_css/pics/universe.webp'},
        {src: 'html_css/pics/sea.webp'},
        {src: 'html_css/pics/nasa.webp'}
    ];
}else{

    var responsiveImage1 = [
        {src:'homePicture/camellia.jpg'},
        {src:'homePicture/rose.jpg'},
        {src:'homePicture/stars.jpg'}
    ];

    var responsiveImage6 = [
        {src: 'homePicture/smlpics/slider/camellia.png'},
        {src: 'homePicture/smlpics/slider/julia.png'},
        {src: 'homePicture/smlpics/slider/rose.png'}
    ];
}

// Vegas全体の設定
$('#slider').vegas({
    overlay:true, //画面の網線やドットのオーバーレイパターン画像を指定
    transition:'blur', // 切り替わりのアニメーション
    transitionDuration:10000, //切り替わりのアニメーション時間をミリ秒単位で指定
    delay:8000, // スライド間の遅延時間をミリ秒単位で指定
    animationDuration:9999999,
    animation:'kenburns',
    slides:responsiveImage1,
});


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

// ページ内リンク
$('#page-link a[href^="."]').click(function(){
    var elmHash =  $(this).attr('href');
    var pos = $(elmHash).offset().top; /*idの上部の距離を取得*/
    $('body, html').animate({scrollTop:pos},500); /*取得した位置にスクロール　500が大きいほどゆっくり*/
    return false;
});

$('.finish').click(function(){
    $('body, html').animate({
        scrollTop:0
    }, 500);
    return false;
});

// 読みやすいように幅を調整
if(windowwidth>1200){

    $('.top .goodview').css({
        'top':'28%',
        'left':'0%'
    });

    $('.top .goodview p').css({
        'color': '#fef9fb'
    });

    $('.enterprise_logo').css({
        'top':'8px',
        'right':'2%' 
    });

    $('.enterprise_logo li img').css({
        'width':'30px'
    });

    $('.enterprise_logo li').css({
        'width':'30px',
        'margin-left':'8px',
        'margin-right':'8px'
    });
    
    $('#page-link li').css({
        'margin-left':'11%',
        'margin-right':'11%',
        'font-size': '30px',
        'color': '#931E56'
    });

    $('.btnripple1').css({
        'color': '#f7f6f5'
    });
    
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

    $('.icon p').css({
        'font-size':'xx-small'
    })

    $('.icon img').css({
        'width':'80%',
        'height':'200px'
    })

    $('.caption1').css({
        'font-size':'xx-small'
    });

    $('#slider6').css({
        'height':'500px'
    });

    $('.slider img').css({
        'height':'500px'
    });

    $('.h2-title1').css({
        'margin-right':'40%',
        'margin-left':'40%'
    })


}else{

    $('.top .goodview').css({
        'top':'35%',
        'left':'0%'
    });

    $('.top .goodview p').css({
        'color':'#fff'
    });


    $('.enterprise_logo').css({
        'top':'2vh',
        'right':'2%'
    });

    $('.enterprise_logo li').css({
        'width':'30px',
        'margin-left':'3vw',
        'margin-right':'3vw'
    });

    $('.enterprise_logo li img').css({
        'width':'50px'
    });

    $('#page-link li').css({
        'margin-left':'8%',
        'margin-right':'8%',
        'font-size': '40px',
        'color': '#fff'
    });

    $('.btnripple1').css({
        'color': '#fff'
    })
    
    $('.slider li').css({
        'margin-right':'100px',
        'margin-left':'100px',
    });

    $('.index').css({
        'height':"100vh",
        'justify-content':'center',
        'vertical-align':'center'
    })

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
        'margin-left':'35%',
        'margin-right':'35%',
        'padding-top':'5px'
    });

    $('.caption1').css({
        'font-size':'xx-small'
    });

    $('.icon img').css({
        'width':'50%',
        'height':'200px'
    });

    $('#slider6').css({
        'height':'80vh',
        'margin-bottom':'3vh'
    });

    $('.slider img').css({
        'height':'80vh'
    });

    $('.slider img').css({
        'height':'80vh'
    });

    $('.h2-title1').css({
        'margin-right':'30%',
        'margin-left':'30%'
    });


    $('.timeline #year').css({/*img要素に指定してもいいし、いっそcaptionで幅広げるのもあり？*/
        'width': '80%',
        'margin': '0 auto',
        'padding': '20px 30px',
        'font-size':'xx-large'
    });


    $('.timeline #timeline-design-tau').css({
        'font-size':'x-large',
        'padding':'10% 5%',
        'border': 'solid #005D4D'
    })

    $('.timeline #timeline-design-sag').css({
        'font-size':'x-large',
        'padding':'10% 5%',
        'border': 'solid #AFB4DB'
    })

    $('.timeline #timeline-design-aqu').css({
        'font-size':'x-large',
        // 上　右　下　左
        // 'padding':'10% 20% 10% 5%',
        'padding':'10% 5%',
        'border': 'solid #B455A0'
    })
};
