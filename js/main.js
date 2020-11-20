var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop:true,
    navigation: {
        nextEl: '.arrow',
      },
      breakpoints: {
        540: {
          slidesPerView: 2,
        }
      }
});


var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function(){
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})


let arrLang = {
  'en':{
      'title' : 'The Witcher - Official site of the series',
      'description' : 'Description',
      'trailer' : 'Trailer',
      'reviews' : 'Reviews',
      'fantasy' : '2019, fantasy',
      'witcher':'The Witcher',
      'text':'The Witcher Geralt, a mutant and a killer of monsters, travels the Continent on his faithful horse Roach. For a tight bag of minted coins, this man will save you from any stubborn evil spirits - even from marsh monsters, werewolves and even enchanted princesses.',
      'watch':'Watch trailer',
      'Series1':'Series #1',
      'Series2':'Series #2',
      'Series3':'Series #3',
      'Series4':'Series #4',
      'Series5':'Series #5',
      'Series6':'Series #6',
      'beginning':'Beginning of the End',
      'Four_signs':'Four signs',
      'rights':'© 2020 The Witcher. All right reserved.',
      'privacy':'Privacy Policy',
      'terms':'Terms of Service',
      'legal':'Legal'
  },
  'ru':{
      'title' : 'Ведьмак - Офицальный сайт сериала',
      'description' : 'Описание',
      'trailer' : 'Трейлер',
      'reviews' : 'Отзывы',
      'fantasy' : '2019, фэнтези',
      'witcher':'Ведьмак',
      'text': 'Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ болотных,оборотней и даже заколдованных принцесс.',
      'watch':'Смотреть трейлер',
      'Series1':'Серия #1',
      'Series2':'Серия #2',
      'Series3':'Серия #3',
      'Series4':'Серия #4',
      'Series5':'Серия #5',
      'Series6':'Серия #6',
      'beginning':'Начало конца',
      'Four_signs':'Четыре знака',
      'rights':'© 2020 Ведьмак. Все права защищены.',
      'privacy':'Политика конфиденциальности',
      'terms':'Условия использования',
      'legal':'Юридический'
  }
};


$(function(){
  
  $('.translate').click(function () { 
     let lang =  $(this).attr('id');

     $('.lang').each(function(index,item){
         $(this).text(arrLang[lang][$(this).attr('key')]);
     }); 
  });
})
