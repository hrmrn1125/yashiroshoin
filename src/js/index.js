/* eslint-disable no-var */
/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)
})

// toggle
$(() => {
  $(".p-menu__item").hover(function(){
    $(this).children(".p-menu__toggle").stop().slideToggle();
  });
});

// サイドメニュー
$(".l-header__spmenu-trigger, .l-sidemenu__closebtn, .l-sidemenu__closeBottom").on('click',() => {
  let trg = $(".l-header__spmenu-trigger");
  if(!$(".l-sidemenu").is(':animated')){
      trg.toggleClass('active');
      $('html').toggleClass('open');
  }
  return false;
});

// topHero
$(() => {
  let $width = "100%",
      $height =  "554px",
      $interval = 5000,
      $fade_speed = 2000;
  $(".p-topHero__item li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
  $(".p-topHero__item li").hide().css({"position":"absolute","top":0,"left":0});
  $(".p-topHero__item li:first").addClass("active").show();
  setInterval(() => {
  let $active = $(".p-topHero__item li.active"),
      $next = $active.next("li").length?$active.next("li"):$(".p-topHero__item li:first");
  $active.fadeOut($fade_speed).removeClass("active");
  $next.fadeIn($fade_speed).addClass("active");
  },$interval);
});

// go to top
$(() => {
  const pageTop = $(".p-footer__goToTop");
      heroBottom = $(".p-topHero").height();
  pageTop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > heroBottom) {
      pageTop.fadeIn(500);
    } else {
      pageTop.fadeOut(500);
    }
  });
  pageTop.click(() => {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

// header
let $window = $(window),
    $headerChange = $(".l-header__change"),
    heroBottom;

$window.on("load scroll", () => {
  heroBottom = $(".p-topHero").height();
  if($window.scrollTop() > heroBottom) {
    $headerChange.addClass("show");
  } else {
    $headerChange.removeClass("show");
  }
});

$window.trigger("scroll");

// タイトル定位置フェードイン
$window.scroll(() => {
  $(".p-contents__blogTitle").each(function(){
    let $elemPos = $(this).offset().top,
        $scroll = $window.scrollTop(),
        $windowHeight = $window.height();
    if ($scroll > $elemPos - $windowHeight + 100){
      $(this).addClass('scrollIn');
    } else {
      $(this).removeClass('scrollIn');
    }
  });
});
$window.scroll(() => {
  $(".p-contents__curriTitle").each(function(){
    let $elemPos = $(this).offset().top,
        $scroll = $window.scrollTop(),
        $windowHeight = $window.height();
    if ($scroll > $elemPos - $windowHeight + 100){
      $(this).addClass('scrollIn');
    } else {
      $(this).removeClass('scrollIn');
    }
  });
});
$window.scroll(() => {
  $(".p-contents__briefingTitle").each(function(){
    let $elemPos = $(this).offset().top,
        $scroll = $window.scrollTop(),
        $windowHeight = $window.height();
    if ($scroll > $elemPos - $windowHeight + 100){
      $(this).addClass('scrollIn');
    } else {
      $(this).removeClass('scrollIn');
    }
  });
});

// ブログカテゴリアクティブ
$(".p-blog__category").on("click",function(){
  $(".p-blog__category").removeClass("change");
  $(this).addClass("change");
});

// blog
function showContents($index) {
  let $navIndex = $index.index();
  $(".p-blog__contentsWrap ul").addClass("p-blog__hidden");
  $(".p-blog__contentsWrap ul").eq($navIndex).removeClass("p-blog__hidden");
}
$(".p-blog__index li").on("click",function() {
  showContents($(this));
});

// 定位置に来たらフェードイン
$window.scroll(() => {
  $(".p-blog").each(function(){
    let $elemPos = $(this).offset().top,
        $scroll = $window.scrollTop(),
        $windowHeight = $window.height();
    if ($scroll > $elemPos - $windowHeight + 100){
      $(this).addClass('scrollIn');
    } else {
      $(this).removeClass('scrollIn');
    }
  });
});
$window.scroll(() => {
  $(".p-blog__contentsCover").each(function(){
    let $elemPos = $(this).offset().top,
        $scroll = $window.scrollTop(),
        $windowHeight = $window.height();
    if ($scroll > $elemPos - $windowHeight + 100){
      $(this).addClass('scrollIn');
    } else {
      $(this).removeClass('scrollIn');
    }
  });
});

$window.scroll(() => {
  $(".p-curri__contents").each(function(){
    let $elemPos = $(this).offset().top,
        $scroll = $window.scrollTop(),
        $windowHeight = $window.height();
    if ($scroll > $elemPos - $windowHeight + 100){
      $(this).addClass('scrollIn');
    } else {
      $(this).removeClass('scrollIn');
    }
  });
});
$window.scroll(() => {
  $(".p-briefing__box").each(function(){
    let $elemPos = $(this).offset().top,
        $scroll = $window.scrollTop(),
        $windowHeight = $window.height();
    if ($scroll > $elemPos - $windowHeight + 100){
      $(this).addClass('scrollIn');
    } else {
      $(this).removeClass('scrollIn');
    }
  });
});

import slick from 'slick-carousel';

// サブカルーセル
$(document).ready(() => {
  $(".p-topHero__sub").slick({
    arrows: true,
    appendArrows: $(".p-topHero__subImg"),
    prevArrow : '<div class="p-topHero__prev"></div>',
		nextArrow : '<div class="p-topHero__next"></div>',
    infinite: true
  });
});
