
// テキストのみの場合
$(".info").modaal({
    overlay_close:true,
    before_open:function(){
        $('html').css('overflow-y', 'hidden');
    },
    after_close:function(){
        $('html').css('overflow-y', 'scroll');
    }
});

// 確認画面
$(".confirm").modaal({
    type:'confirm',
    confirm_title:'ログイン画面',
    confirm_button_text:'ログイン',
    confirm_cancel_button_text:'キャンセル',
    // 確認画面の内容
    confirm_content:'確認画面の内容。<br>この画面はボタンを押さないととじません'
});

// 画像の場合
$(".gallery").modaal({
    type:'image',
    overlay_close:true,
    before_open:function(){
        $('html').css('overflow-y', 'hidden');
    },
    after_close:function(){
        $('html').css('overflow-y', 'scroll');
    }
});

// 動画の場合
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


// アイフレームの場合
$(".iframe-open").modaal({
    type:'iframe', 
    width:800, //iframeの横幅
    height:600, //iframeの高さ
    overlay_close:true, //モーダル背景クリック
    before_open:function(){
        $('html').css('overflow-y', 'hidden');
    },
    after_close:function(){
        $('html').css('overflow-y', 'scroll');
    }
});

