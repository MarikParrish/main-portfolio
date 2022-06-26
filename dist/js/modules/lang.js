function lang(){
    const langArr = {

        title:{
            en:'Igor Pryimak - Front-End',
            ru:'Игорь Приймак - Front-End',
            ua:'Ігор Приймак - Front-End'
        },
    
        promo__title: {
            en: 'Hello,',
            ru: 'Привет,',
            ua:'Привiт,'
        },
    
        promo__subtitle:{
            en:"I'm Igor Pryimak",
            ru:'Меня зовут Игорь Приймак',
            ua:'Мене звуть Ігор Приймак'
        },
    
        promo__info:{
            en:'Front-end Developer',
            ru:'Front-end разработчик',
            ua:'Front-end розробник'
        },
    
        promo__btn:{
            en:'MORE',
            ru:'подробнее',
            ua:'Більше'
        },
    
        about__title:{
            en:'About',
            ru:'Обо мне',
            ua:'Про мене'
        },
    
        about__subtitle:{
            en:'Let me introduce myself',
            ru:'Позвольте представиться',
            ua:'Дозвольте представитися'
        },
    
        about__descr:{
            en:"I'm Igor. I am beginner Web-Developer from Odessa. I know such languages like HTML, CSS. And some basic knowledge of the programming language - JavaScript.",
            ru:'Меня зовут Игорь. Я начинающий Web-разработчик из города Одесса. Владею языками HTML, CSS. Имею базовые знания в языке программирования JavaScript.',
            ua:'Мене звати Ігор. Я початковий Web-розробник із міста Одеса. Володію мовами HTML, CSS. Маю базові знання у мові програмування JavaScript.'
        },
    
        about__main:{
            en:'Profile:',
            ru:'Профиль:',
            ua:'Профіль:'
        },
    
        name:{
            en:'Name:',
            ru:'Имя:',
            ua:"Ім'я:"
        },
    
        myname:{
            en:'Igor Pryimak',
            ru:'Игорь Приймак',
            ua:'Ігор Приймак'
        },
    
        age:{
            en:'Age:',
            ru:'Возраст:',
            ua:'Вік:'
        },
        
        rank:{
            en:'Job:',
            ru:'Работа:',
            ua:'Робота:'
        },
    
        myrank:{
            en:'Front-End Developer',
            ru:'Front-End разработчик',
            ua:'Front-End розробник'
        },
    
        gmail:{
            en:'email:',
            ru:'почта:',
            ua:'пошта:'
        },
    
        skills:{
            en:'skills',
            ru:'навыки',
            ua:'навички'
        },
    
        resume__title:{
            en:'Resume',
            ru:'Резюме',
            ua:'Резюме'
        },
    
        resume__subtitle:{
            en:'More of my credentials',
            ru:'Больше о моих навыках',
            ua:'Більше про мої навички'
        },
    
        resume__education:{
            en:'Education',
            ru:'Образование',
            ua:'Освіта'
        },
    
        school:{
            en:'Chernomorskaya School',
            ru:'Черноморская ООШ',
            ua:'Чорноморська ЗОШ'
        },
    
        school_data:{
            en:'September 2009 - May 2020',
            ru:'Сентябрь 2009 - Май 2020',
            ua:'Вересень 2009 - Травень 2020'
        },
    
        school_info:{
            en:'Comprehensive School',
            ru:'Общеобразовательная Школа',
            ua:'Загальноосвітня школа'
        },
    
        school_descr:{
            en:'Comprehensive school in Odessa region.',
            ru:'Общеобразовательная школа в Одесской области.',
            ua:'Загальноосвітня школа Одеської області.'
        },
    
        udemy:{
            en:'Udemy - Web-Developer',
            ru:'Udemy - Web-разработчик',
            ua:'Udemy - Web-розробник'
        },
    
        udemy_data:{
            en:'February 2022 - April 2022',
            ru:'Февраль 2022 - Апрель 2022',
            ua:'Лютий 2022 - Квітень 2022'
        },
    
        udemy_info:{
            en:'Udemy Courses',
            ru:'Udemy Курсы',
            ua:'Udemy Курси'
        },
    
        udemy_descr:{
            en:'Udemy Web-Development Courses, where I have learned how to work with the Gulp task, Git, use the BEM methodology.',
            ru:'Курсы Udemy по Web-разработке, на которых я научился работать с планировщиком задач Gulp, Git, использовать методологию БЭМ.',
            ua:'Курси Udemy з Web-розробки, на яких я навчився працювати з планувальником задач Gulp, Git та використовувати методологію БЕМ.'
        },
    
        univer:{
            en:'University of ONTU',
            ru:'ВУЗ ОНТУ',
            ua:'ВНЗ ОНТУ'
        },
    
        univer_data:{
            en:'September 2020 - present days',
            ru:'Сентябрь 2020 - настоящее время',
            ua:'Вересень 2020 – теперішній час'
        },
    
        univer_info:{
            en:'University',
            ru:'ВУЗ',
            ua:'ВНЗ'
        },
    
        univer_descr:{
            en:'Odessa National Technological University. Computer science. Cybersecurity.',
            ru:'Одесский Национальный Технологический Университет. Компьютерные науки. Кибербезопасность.',
            ua:"Одеський Національний Технологічний Університет. Комп'ютерні науки. Кібербезпека."
        },
    
        portfolio__title:{
            en:'Portfolio',
            ru:'Портфолио',
            ua:'Портфоліо'
        },
    
        portfolio__subtitle:{
            en:'Check Out Some of My Works',
            ru:'Несколько моих работ',
            ua:'Декілька моїх робіт'
        },
    
        services__title:{
            en:'Services',
            ru:'Услуги',
            ua:'Послуги'
        },
    
        services__subtitle:{
            en:'What Can I Do For You?',
            ru:'Что я могу для Вас сделать?',
            ua:'Що я можу зробити для вас?'
        },
    
        web:{
            en:"Web-Development",
            ru:"Веб-разработка",
            ua:'Веб-розробка'
        },
    
        web_descr:{
            en:"I will develop, make up a website using modern technologies. I will adapt the site for mobile devices, optimize website speed, validate the layout according to w3c standards.",
            ru:'Разработаю, сверстаю веб-сайт используя современные технологии. Адаптирую сайт под мобильные устройства. Оптимизирую скорость работы сайтов, проведу валидацию верстки по стандартам w3c.',
            ua:'Розроблю, зверстаю веб-сайт, використовуючи сучасні технології. Адаптую сайт під мобільні пристрої. Оптимізую швидкість роботи сайтів, проведу валідацію верстки за стандартами w3c.'
        },
    
        consult:{
            en:'Consultancy',
            ru:'Консультация',
            ua:'Консультація'
        },
    
        consult_descr:{
            en:'I will answer technical questions, help solve issues related to the creation, optimization and support of websites.',
            ru:'Отвечу на технические вопросы, помогу решить вопросы связанные с созданием, оптимизацией и поддержкой веб-сайтов.',
            ua:"Відповім на технічні питання, допоможу вирішити питання, пов'язані зі створенням, оптимізацією та підтримкою веб-сайтів."
        }
      };

    document
        .querySelectorAll('.promo__change_lang button')
        .forEach((b) => b.addEventListener('click',setLang));


    function setLang() {
        for (let key in langArr) {
          let elem = document.querySelector('.lng-' + key);
          if (elem) {
            elem.innerHTML = langArr[key][this.value];
          }
        }
        document.querySelector('title').innerHTML = langArr['title'][this.value];
      }



    // changeLangActive

    function changeLangActive(){
        $('.promo__change_lang button').on('click',function(){
            $(this).addClass('promo__change_lang-active').siblings().removeClass('promo__change_lang-active');
        });
    }
    

    changeLangActive();
}

export default lang;