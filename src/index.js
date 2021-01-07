const localeData = dataLocale();
(function (){

  if(!localStorage.getItem('lang'))
    localStorage.setItem('lang','dataRus')
  if(!localStorage.getItem('tab'))
    localStorage.setItem('tab','about')

  const lang = document.querySelector('.header-lang');
  const about = document.querySelector('.menu-about');
  const contacts = document.querySelector('.menu-contacts');
  lang.addEventListener('click', langClick);
  about.addEventListener('click', e => clickTab(e, 'about'));
  contacts.addEventListener('click', e => clickTab(e, 'contacts'));


  build();
  
})()

// Events 

function langClick(event){
  const storageLang = localStorage.getItem('lang') || 'dataRus';
  localStorage.setItem('lang', storageLang === 'dataRus' ? 'dataEng' : 'dataRus')
  build()
}

function clickTab( event, tabName )
{
  document.querySelector('.-active-').classList.toggle('-active-')
  document.querySelector('.body-active').classList.toggle('body-active')
  document.querySelector(`.menu-${tabName}`).classList.add('-active-')

  localStorage.setItem('tab', tabName);
  buildBody()
}

// Building functions 

function build(){

  let storageLang = localStorage.getItem('lang');
  let storageTab = localStorage.getItem('tab');

    buildHeader(storageLang,
      storageTab);
    buildBody();
}

function buildHeader (storageLang,
  storageTab ){
  const langContainer = document.querySelector('.header-lang');
  langContainer.innerText = localeData[storageLang].lang;

  menuBuilder(storageLang, storageTab )

}

function menuBuilder(storageLang, storageTab ){
  const about = document.querySelector('.menu-about');
  const contacts = document.querySelector('.menu-contacts');
  document.querySelector(`.menu-${storageTab}`).classList.add('-active-')
  about.innerText = localeData[storageLang].about
  contacts.innerText = localeData[storageLang].contacts

}
function buildBody (){
  const tabBody = localStorage.getItem('tab');

  const body = document.querySelector(`.${tabBody}`);
  body.classList.add('body-active')
  new Function(`${tabBody}Func()`)()
}
function aboutFunc(){
  const lang = localStorage.getItem('lang');
  const data = localeData[lang][`aboutData`];
  document.querySelector('.about-title').innerText = data.title;
  const timelines = document.querySelector('.about-timelines');
  timelines.innerHTML = localeData[lang]['worksData'].map( ( el ) => `
    <time-lines
    ${el.left ? `left="${el.left}"` : ''}
    ${el.right ? `right="${el.right}"` : ''}
    ${el.infoLeft ? `info-left="${el.infoLeft}"`:''}
    ${el.infoRight ? `info-right="${el.infoRight}"`:''}
    ${el.link ? `link="${el.link}"` : ''}
    ${el.linkName ? `link-name="${el.linkName}"` : ''}
    >
    </time-lines>
    `
  )
}

function contactsFunc(){
  const lang = localStorage.getItem('lang');
  const data = localeData[lang][`contactsData`];
  document.querySelector('.contacts-email-name').innerText = data.email
  document.querySelector('.contacts-tel-name').innerText = data.tel
  document.querySelector('.contacts-info').innerText = data.info
}



