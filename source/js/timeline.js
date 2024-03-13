
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;

if (windowwidth>1200){
    $('.timeline').css({
      'max-width':'50%'
    });
}else{
  $('.timeline').css({
    'max-width':'80%'
  });
};

//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime(){
    $('.timeline li').each(function(){// それぞれのli要素の
      var elemPos = $(this).offset().top;// 上からの高さ取得
      var scroll = $(window).scrollTop();// スクロール値取得
      var windowHeight = $(window).height();// windowの高さ取得

      var startPoint;
      if (windowwidth>1200){
          startPoint = 250; //線をスタートさせる位置を指定※レイアウトによって調整してください
      }else{
          startPoint = 700;
      }
      if (scroll >= elemPos - windowHeight-startPoint){       
        var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
        //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
        var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす
  
        // 100% を超えたらずっと100%を入れ続ける
        if(percent  > 100){
          percent  = 100;
        }
        // ボーダーの長さをセット
        $(this).children('.border-line').css({
          height: percent + "%", //CSSでパーセント指定
        });
      } 
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).on('scroll', function(){
    ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
  });