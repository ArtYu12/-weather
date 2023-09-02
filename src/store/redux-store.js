import {legacy_createStore as createStore} from "redux"; 

let lang = {
    'en':{
        motto:'Our forecasts will help you',
        weather:'Weather',
        city:'Your city',
        features:'Features',
        importance:'Importance',
        weakness:'Weakness',
        weaknessp:'The clarity of weather data is one of the most important criteria in assessing the quality of meteorological information. To ensure high accuracy of weather data, we use reliable methods of collecting and processing information.However, despite the high accuracy of modern systems for collecting and processing weather data, errors can sometimes occur. Therefore, we have the opportunity to check and confirm weather data from other sources.',
        actuality:'Actuality',
        actualityp:'Up-to-date weather information helps to identify possible threats and risks, as well as make decisions about planning and organizing various events.To keep the weather information up-to-date, we update it in real time. Today, thanks to modern technologies and communication networks, it is possible to receive weather data almost instantly. This allows us to respond quickly to changes in the weather and take timely measures to protect people and property.',
        сlarity:'Clarity',
        title:'Stop the sound',
        par:'The quality of weather data is a critical factor for many industries, including agriculture, air transportation, tourism, as well as for disaster prediction and emergency management. To ensure high-quality weather data, several factors must be taken into account.',
        parli1:'First, the data must be accurate. This means that they should be collected by reliable and proven methods that ensure high measurement accuracy. In addition, the data should be updated in a timely and regular manner to ensure that the information is up-to-date.',
        parli2:'Secondly, the data should be standardized. This means that they must be collected in a single form to ensure consistency and compatibility between different data sources. This makes it easier to compare and analyze data, as well as use it to create forecasts.',
        parli3:'Third, the data must be reliable. This means that they must be verified and confirmed by experts to ensure the accuracy of the information. Data that has not passed such verification may be incomplete or inaccurate, which may lead to incorrect decisions and forecasts.',
        parli4:'Finally, the data should be accessible and understandable. This means that they should be presented in a format that is understandable to a wide audience, including people without special knowledge in the field of meteorology. In addition, the data should be available on various devices and platforms so that users can easily access it.',
        parend:'In general, the quality of weather data plays an important role in ensuring the safety and prosperity of society. To achieve high data quality, it is necessary to use proven collection methods, standardized formats and reliable data validation processes.',
        humidity:'Humidity',
        pressure:'Pressure',
        wind_direction:'Wind direction',
        wind_speed:'Wind speed',
        wind_speedE:'m/s',
        feels_like:'Feels like',
        сlarityp:'The clarity of weather data plays an important role in their effective use. The simpler and clearer the weather information is presented, the easier it is for people to navigate and make decisions based on it.In general, the clarity of weather data is an important factor for their effective use. To ensure the clarity of weather data, we take into account the needs and level of knowledge of the target audience, use various formats for presenting information and create high-quality and visual materials.',
    },
    'ru':{
        motto:'Наши прогнозы Вам в помощь',
        weather:'Погода',
        city:'Ваш город',
        features:'Особенности',
        importance:'Важность',
        weakness:'Точность', 
        weaknessp:'Точность данных о погоде является одним из наиболее важных критериев при оценке качества метеорологической информации. Для обеспечения высокой точности данных о погоде мы используем надежные методы сбора и обработки информации.Однако, несмотря на высокую точность современных систем сбора и обработки данных о погоде, иногда могут возникать ошибки. Поэтому мы имеем возможность проверять и подтверждать данные о погоде с других источников.',
        actuality:'Актуальнсоть',
        actualityp:'Актуальная информация о погоде помогает определить возможные угрозы и риски, а также принять решения по поводу планирования и организации различных мероприятий.Чтобы информация о погоде была актуальной, мы обновляем ее в режиме реального времени. Сегодня, благодаря современным технологиям и сетям связи, можно получать данные о погоде практически мгновенно. Это позволяет нам оперативно реагировать на изменения погоды и своевременно принимать меры для защиты людей и имущества.',
        сlarity:'Понятность',
        par:'Качество данных о погоде является критически важным фактором для многих отраслей, включая сельское хозяйство, авиаперевозки, туризм, а также для предсказания катастроф и управления чрезвычайными ситуациями. Чтобы обеспечить высокое качество данных о погоде, необходимо учитывать несколько факторов.',
        parli1:'Во-первых, данные должны быть точными. Это означает, что их следует собирать надежными и проверенными методами, обеспечивающими высокую точность измерений. Кроме того, данные должны обновляться своевременно и регулярно, чтобы обеспечить актуальность информации.',
        parli2:'Во-вторых, данные должны быть стандартизированными. Это означает, что они должны быть собраны в единой форме, чтобы обеспечить согласованность и совместимость между различными источниками данных. Это позволяет легче сравнивать и анализировать данные, а также использовать их для создания прогнозов.',
        parli3:'В-третьих, данные должны быть надежными. Это означает, что они должны быть проверены и подтверждены экспертами, чтобы обеспечить достоверность информации. Данные, которые не прошли такую проверку, могут быть неполными или неточными, что может привести к неправильным решениям и прогнозам.',
        parli4:'Наконец, данные должны быть доступными и понятными. Это означает, что они должны быть представлены в формате, который понятен широкой аудитории, включая людей без специальных знаний в области метеорологии. Кроме того, данные должны быть доступны на различных устройствах и платформах, чтобы пользователи могли легко получать доступ к ним.',
        parend:'В целом, качество данных о погоде играет важную роль в обеспечении безопасности и процветания общества. Чтобы достичь высокого качества данных, необходимо использовать проверенные методы сбора, стандартизированные форматы и надежные процессы проверки данных.',
        title:'Остановить звук',
        humidity:'Влажность',
        pressure:'Давление',
        wind_direction:'Направление ветра',
        wind_speed:'Скорость ветра',
        wind_speedE:'м/с',
        feels_like:'Ощущаеться как',
        сlarityp:'Понятность данных о погоде играет важную роль в их эффективном использовании. Чем проще и понятнее представлена информация о погоде, тем легче людям ориентироваться и принимать решения на ее основе.В целом, понятность данных о погоде является важным фактором для их эффективного использования. Чтобы обеспечить понятность данных о погоде, мы учитываем потребности и уровень знаний целевой аудитории, использовать различные форматы представления информации и создавать высококачественные и наглядные материалы.',
    },
    'kz':{
        motto:'Сізге көмектесу үшін біздің болжамдар',
        weather:'Табиғат',
        city:'Сіздің қалаңыз',
        features:'Ерекшеліктері',
        importance:'Маңыздылығы',
        weakness:'Дәлдік',
        weaknessp:'Ауа-райы деректерінің дәлдігі метеорологиялық ақпараттың сапасын бағалаудағы маңызды критерийлердің бірі болып табылады. Ауа-райы деректерінің жоғары дәлдігін қамтамасыз ету үшін біз ақпаратты жинау мен өңдеудің сенімді әдістерін қолданамыз.Дегенмен, қазіргі ауа-райы деректерін жинау және өңдеу жүйелерінің жоғары дәлдігіне қарамастан, кейде қателер болуы мүмкін. Сондықтан біз басқа көздерден ауа-райы туралы деректерді тексеруге және растауға мүмкіндігіміз бар.',
        actuality:'Өзектілігі',
        actualityp:'Ағымдағы ауа-райы туралы ақпарат ықтимал қауіптер мен тәуекелдерді анықтауға, сондай-ақ әртүрлі іс-шараларды жоспарлау және ұйымдастыру туралы шешім қабылдауға көмектеседі.Ауа-райы туралы ақпаратты жаңартып отыру үшін біз оны нақты уақытта жаңартамыз. Бүгінгі таңда заманауи технологиялар мен байланыс желілерінің арқасында ауа-райы туралы деректерді бірден алуға болады. Бұл бізге ауа-райының өзгеруіне жедел әрекет етуге және адамдар мен мүлікті қорғау үшін уақтылы шаралар қабылдауға мүмкіндік береді.',
        сlarity:'Түсіністік',
        title:'Дыбысты тоқтату',
        par:'Ауа-райы деректерінің сапасы көптеген салалар үшін, соның ішінде ауыл шаруашылығы, әуе тасымалы, туризм және апаттарды болжау және төтенше жағдайларды басқару үшін маңызды фактор болып табылады. Ауа-райы деректерінің жоғары сапасын қамтамасыз ету үшін бірнеше факторларды ескеру қажет.',
        parli1:'Біріншіден, деректер дәл болуы керек. Бұл оларды өлшеудің жоғары дәлдігін қамтамасыз ететін сенімді және дәлелденген әдістермен жинау керек дегенді білдіреді. Сонымен қатар, ақпараттың өзектілігін қамтамасыз ету үшін деректер уақтылы және үнемі жаңартылып отыруы керек.',
        parli2:'Екіншіден, деректер стандартталған болуы керек. Бұл әр түрлі деректер көздері арасындағы үйлесімділік пен үйлесімділікті қамтамасыз ету үшін оларды біртұтас түрде жинау керек дегенді білдіреді. Бұл деректерді салыстыруды және талдауды жеңілдетеді және оны болжам жасау үшін пайдаланады.',
        parli3:'Үшіншіден, деректер сенімді болуы керек. Бұл ақпараттың дұрыстығын қамтамасыз ету үшін оларды сарапшылар тексеріп, растауы керек дегенді білдіреді. Мұндай тексеруден өтпеген деректер толық емес немесе дұрыс емес болуы мүмкін, бұл дұрыс емес шешімдер мен болжамдарға әкелуі мүмкін.',
        parli4:'Соңында, деректер қол жетімді және түсінікті болуы керек. Бұл дегеніміз, олар метеорология бойынша арнайы білімі жоқ адамдарды қоса алғанда, кең аудиторияға түсінікті форматта ұсынылуы керек. Сонымен қатар, пайдаланушылар оларға оңай қол жеткізе алатындай деректер әртүрлі құрылғылар мен платформаларда қол жетімді болуы керек.',
        parend:'Жалпы, ауа-райы деректерінің сапасы қоғамның қауіпсіздігі мен өркендеуін қамтамасыз етуде маңызды рөл атқарады. Деректердің жоғары сапасына қол жеткізу үшін дәлелденген жинау әдістерін, стандартталған форматтарды және деректерді тексерудің сенімді процестерін қолдану қажет.',
        humidity:'Ылғалдылық',
        pressure:'Қысым',
        wind_direction:'Жел бағыты',
        wind_speed:'Желдің жылдамдығы',
        wind_speedE:'м/с',
        feels_like:'Бұл сезім',
        сlarityp:'Ауа-райы деректерінің түсінігі оларды тиімді пайдалануда маңызды рөл атқарады. Ауа-райы туралы ақпарат неғұрлым қарапайым және түсінікті болса, адамдарға оның негізінде шарлау және шешім қабылдау оңайырақ болады.Жалпы, ауа-райы туралы мәліметтердің түсінігі оларды тиімді пайдаланудың маңызды факторы болып табылады. Ауа-райы туралы мәліметтердің түсінікті болуын қамтамасыз ету үшін біз мақсатты аудиторияның қажеттіліктері мен білім деңгейін ескереміз, ақпаратты ұсынудың әртүрлі форматтарын қолданамыз және жоғары сапалы және көрнекі материалдар жасаймыз.',
    }
}

const defaultState = {
    language: lang['kz'],
    audio_lang:'kz',
    city:''
}


const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "SWITCH_LANG":
            return {...state, language:lang[action.lang], audio_lang:action.lang}
        case "SWITCH_CITY":
            return {...state, city:action.city}
        default:
            return state
    }
}

export const actions = {
    setCity:(city) => ({type:"SWITCH_CITY",city})
}

export const store = createStore(reducer);
export default store;