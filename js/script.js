//=====画面読込時のjquery
$(window).on("load", function () {
  $("#splash-logo").delay(0).fadeOut("slow");

  //=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる
  $("#splash")
    .delay(10)
    .fadeOut("slow", function () {
      $("body").addClass("appear"); //フェードアウト後bodyにappearクラス付与
    });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
});

//=====メインビジュアルのスライド
$(".slider").slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});
$(".slider").on("touchmove", function (event, slick, currentSlide, nextSlide) {
  $(".slider").slick("slickPlay");
});

//=====ハンバーガーメニュー部分
$(".openbtn").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active");
  $("#g-nav").removeClass("panelactive");
});

// 「ページトップに戻る」ボタンの実装
var pagetop = $("#js-pagetop");
pagetop.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
});
pagetop.click(function () {
  $("body, html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

// smoothTextクラスが滑らかに出現する動き
function SmoothTextAnime() {
  $(".smoothTextTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("smoothTextAppear");
    } else {
      $(this).removeClass("smoothTextAppear");
    }
  });
}
$(window).scroll(function () {
  SmoothTextAnime();
});