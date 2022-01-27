/* eslint-disable no-dupe-keys */
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

// ハンバーガーメニュー
$(".l-header__spmenu-trigger, .l-sidemenu__closebtn, .l-sidemenu__closeBottom").on('click',() => {
  let trg = $(".l-header__spmenu-trigger");
  if(!$(".l-sidemenu").is(':animated')){
      trg.toggleClass('active');
      $('html').toggleClass('open');
      $('.back').toggleClass('open');
  }
  return false;
});

// ハンバーガーメニューの背景クリック時
$(".back").on('click', function(){
  if($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(".l-header__spmenu-trigger").removeClass('active');
    $('html').removeClass('open');
  }
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

import slick from 'slick-carousel';

// サブカルーセル
$(document).ready(() => {
  $(".p-topHero__sub").slick({
    arrows: true,
    prevArrow : $('.p-topHero__prev'),
		nextArrow : $('.p-topHero__next'),
    infinite : true
  });
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

// 定位置に来たらコンテンツフェードイン
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

// フッターバナー
$(document).ready(() => {
  $(".p-footer__banner").slick({
    arrows: true,
    prevArrow : '<div class="p-footer__prev"></div>',
		nextArrow : '<div class="p-footer__next"></div>',
    responsive : [
      {
				breakpoint: 1800,
				settings: {
          arrows: false,
					slidesToShow: 4,
				}
			},
      {
				breakpoint: 1119,
				settings: {
          arrows: false,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
          arrows: false,
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				}
			},
		]
  });
});

$(() => {
	function sliderSetting(){
    var width = $(window).width();
      if(width <= 500){
        $('.p-footer__banner').slick();
      } else {
        $('.p-footer__banner').unslick();
      }
	}
	sliderSetting();

	$(window).responsive(() => {
    sliderSetting();
    slider.slick('setPosition');
	});
});

// アクティブカテゴリ連動でコンテンツ表示
$(() => {
  $('.p-blog .p-blog__category').click(function() {
    var index = $('.p-blog .p-blog__category').index(this);
    $('.p-blog .p-blog__category, .p-blog .p-blog__contentsArea').removeClass('active');
    $(this).addClass('active');
    $('.p-blog .p-blog__contentsArea').eq(index).addClass('active');
  });
});

// ブログコンテンツスライドさせる
$(document).ready(() => {
  $(".p-blog__slider1").slick ({
    arrows: false,
    slidesToShow:3,
    variableWidth: true,
    responsive : [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 501,
				settings: {
					slidesToShow: 1
				}
			}
		]
  });
});

$(document).ready(() => {
  $(".p-blog__slider2").slick ({
    arrows: false,
    slidesToShow:3,
    variableWidth: true,
    responsive : [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 501,
				settings: {
					slidesToShow: 1
				}
			}
		]
  });
});

$(document).ready(() => {
  $(".p-blog__slider3").slick ({
    arrows: false,
    variableWidth: true,
    responsive : [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 501,
				settings: {
					slidesToShow: 1
				}
			}
		]
  });
});

$(document).ready(() => {
  $(".p-blog__slider4").slick ({
    arrows: false,
    slidesToShow:3,
    variableWidth: true,
    responsive : [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 501,
				settings: {
					slidesToShow: 1
				}
			}
		]
  });
});