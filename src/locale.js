(function (){
  return dataLocale =() =>  ( { dataRus,
      dataEng }
  )
})()

const dataRus = {
  about: 'Кто я такой',
  lang:'In English',
  works: 'Мои работы',
  contacts: 'Мои контакты',
  
  aboutData:{
    title:'Привет. Я Александр Лукиянов, мне 27 лет. Как вы заметили, дизайнер из меня не оч. Зато визитка собрана за 3 часа...',
  },
  worksData:[
    {
      infoRight:'Март 2019',
      infoLeft:'Начало изучение фронтенда',
      left: false, 
      right: false,
    },
    {
      infoRight:'Старт работы в качестве фронтенда',
      infoLeft:'Aвгуст 2019',
      left: false, 
      right: false,
    },
    {
      infoRight:'Март 2019',
      infoLeft:'Vue-разработчик, мониторинговый сервис в',
      link:'https://www.kgk-global.com/',
      linkName:'КГК',
      left: true, 
      right: false,
    },
    {
      infoLeft:'Май 2020',
      infoRight:'Vue-разработчик, разработка площадки обучения в',
      link:'https://likecentre.ru/',
      linkName:'Like Центер',
      left: false, 
      right: true,
    },
    {
      infoRight:'Ноябрь 2020',
      infoLeft:'React-разработчик, контент и поддержка в ',
      link:'https://bcs.ru/',
      linkName:'БКС',
      left: true, 
      right: false,
    },
    {
      infoLeft:'Надежда на прекрасное будущее',
      infoRight:'Вечно',
      left: false, 
      right: false,
    },
  ],
  contactsData:{
    info:'* Если вам стало скучно, можем обсудить фронтовые технологии ^_^',
    tel:'Телефон для связи:',
    email:'Почта:'

  }
}
const dataEng = {
  about: 'How i am',
  lang:'На Русском',
  works: 'My works',
  contacts:'My contacts',
  aboutData:{
    title:'Hey. I am Alexander Lukiyanov, I am 27 years old. As you can see, I am not a great designer. But the site was assembled in 3 hours ...',
    text:'',
  },
  worksData:[
    {
      infoRight:'March 2019',
      infoLeft:'Start exploring the frontend',
      left: false, 
      right: false,
    },
    {
      infoRight:'Starting work as a frontend',
      infoLeft:'August 2019',
      left: false, 
      right: false,
    },
    {
      infoRight:'March 2019',
      infoLeft:'Vue developer, monitoring service in',
      link:'https://www.kgk-global.com/',
      linkName:'KGK',
      left: true, 
      right: false,
    },
    {
      infoLeft:'May 2020',
      infoRight:'Vue developer, development of a training platform in',
      link:'https://likecentre.ru/',
      linkName:'Like Center',
      left: false, 
      right: true,
    },
    {
      infoRight:'November 2020',
      infoLeft:'React developer, content and support in',
      link:'https://bcs.ru/',
      linkName:'BCS',
      left: true, 
      right: false,
    },
    {
      infoLeft:'Hope for a great future',
      infoRight:'Always',
      left: false, 
      right: false,
    },
  ],
  contactsData:{
    info:'If you get bored, we can discuss front-end technologies',
    tel:'Phone for call:',
    email:'Mail:'
  }
}