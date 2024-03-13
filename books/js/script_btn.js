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