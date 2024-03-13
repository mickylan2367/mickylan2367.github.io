
$(window).on('load', function(){
    $("#splash-logo").delay(1200).fadeOut('slow');
    $("#splash").delay(2000).fadeOut('slow', function(){
        $('body').addClass('appear'); /*フェードアウト後bodyいappearクラス付与*/
    });
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