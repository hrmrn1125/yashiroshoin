import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)
})

$(() => {
  $(".p-menu__item").hover(function(){
    $(this).children(".p-menu__toggle").stop().slideToggle();
  });
});

$(() => {
  const $width = "73vw";
  const $height =  "554px";
  const $interval = 5000;
  const $fade_speed = 2000;
  $(".p-topHero__item li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
  $(".p-topHero__item li").hide().css({"position":"absolute","top":0,"left":0});
  $(".p-topHero__item li:first").addClass("active").show();
  setInterval(() => {
  const $active = $(".p-topHero__item li.active");
  const $next = $active.next("li").length?$active.next("li"):$(".p-topHero__item li:first");
  $active.fadeOut($fade_speed).removeClass("active");
  $next.fadeIn($fade_speed).addClass("active");
  },$interval);
});


