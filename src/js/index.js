import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)
})

$(() => {
  $('.p-topHero__btn').on('click', function(){
    console.log($(this));
  });
});