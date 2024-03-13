
// スライダー6, 7
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
// var diary, stars, coding, books, form;

if(windowwidth > 1200){

    const diary = document.querySelector("#diary_img");
    diary.src = "html_css/pics/nasa.webp";

    const stars = document.querySelector("#star_img");
    stars.src = "html_css/pics/horoscope.png";

    const coding = document.querySelector("#coding_img");
    coding.src = "html_css/pics/programming.png";

    const books = document.querySelector("#books_img");
    books.src = "html_css/pics/aqueri2.png";

    const form = document.querySelector("#form_img");
    form.src = "html_css/pics/my_sabian.png";

}else{

    const diary = document.querySelector("#diary_img");
    diary.src = "homePicture/smlpics/books.png";

    const stars = document.querySelector("#star_img");
    stars.src = "homePicture/smlpics/horoscope.png";

    const coding = document.querySelector("#coding_img");
    coding.src = "homePicture/smlpics/coding.png";

    const books = document.querySelector("#books_img");
    books.src = "homePicture/smlpics/books.png";

    const form = document.querySelector("#form_img");
    form.src = "homePicture/smlpics/form.png";

}




