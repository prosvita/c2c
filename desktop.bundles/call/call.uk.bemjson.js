module.exports = {
    block: 'page',
    title: "Зв'язок з Кримом",
    head: [
        { elem: 'meta', i18n: true },
        //TODO: Все винести в блок page з i18n, та вмикати модифікаторами чи модами
        //{ elem: 'meta', attrs: { property: "og:updated_time", content: "1455259798" } }, //TODO: Генерувати
        { elem: 'meta', attrs: { name: 'description', content: "Всі можливості зв'язку з Кримом. Ми порівняли популярні тарифи, їх вартість та засоби зв'язку, щоб вам було легше обрати зручний спосіб і частіше спілкуватися з вашими родичами." } },
        { elem: 'meta', attrs: { name: 'keywords', content: "як подзвонити в Крим з України, зателефонувати в Крим, дзвонити в Крим, як подзвонити з Криму в Україну, як подзвонити з Криму в Київ, зателефонувати в Україну, дзвонити в Україну, встановити український номер в Криму, встановити український телефон в Криму, ip-телефон в Криму, інтернет-телефон у Криму, крим коди міст, сплатити skype, сплатити скайп, сплатити вайбер, сплатити viber" } },
        { elem: 'meta', attrs: { property: "og:type", content: "website" } },
        { elem: 'meta', attrs: { property: "og:title", content: "Зв'язок з Кримом" } },
        { elem: 'meta', attrs: { property: "og:description", content: "Всі можливості зв'язку з Кримом. Ми порівняли популярні тарифи, їх вартість та засоби зв'язку, щоб вам було легше обрати зручний спосіб і частіше спілкуватися з вашими родичами." } },
        { elem: 'meta', attrs: { property: "og:url", content: "http://connect.crimea.ua/uk/" } },
        { elem: 'meta', attrs: { property: "og:image", content: "https://img-fotki.yandex.ru/get/108697/204961608.0/0_12694e_4d33a55e_orig" } },
        { elem: 'meta', attrs: { property: "og:locale", content: "uk_UA" } },
        { elem: 'meta', attrs: { property: "fb:app_id", content: "1093711844024689" } },
        { elem: 'meta', attrs: { property: "twitter:card", content: "summary" } },
        { elem: 'meta', attrs: { property: "twitter:title", content: "Зв'язок з Кримом" } },
        { elem: 'meta', attrs: { property: "twitter:description", content: "Всі можливості зв'язку з Кримом. Ми порівняли популярні тарифи, їх вартість та засоби зв'язку, щоб вам було легше обрати зручний спосіб і частіше спілкуватися з вашими родичами." } },
        { elem: 'meta', attrs: { property: "twitter:url", content: "http://connect.crimea.ua/uk/" } },
        { elem: 'meta', attrs: { property: "twitter:image", content: "https://img-fotki.yandex.ru/get/174352/204961608.0/0_12694f_f77ce585_orig" } }
    ],
    styles: [
        //TODO: Збирати один css для всіх мов
        { elem: 'css', url: 'call.min.css', i18n: true },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Scada:400,700&subset=latin,cyrillic' }
    ],
    scripts: [
        { elem: 'js', url: 'call.min.js', i18n: true },
        { elem: 'js', url: 'https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js' },
        { elem: 'js', url: 'https://yastatic.net/share2/share.js', attrs: { async: 'async' }}
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    elem: 'logo'
                },
                {
                    elem: 'nav',
                    content: [
                        { url: '#from', content: 'З Криму' },
                        { url: '#to', content: 'До Криму' },
                        { url: '#internet', content: 'Комунікатори' },
                        { url: '#sip', content: 'Інтернет-телефонія' }
                    ]
                },
                {
                    elem: 'langs',
                    bundle: 'call', // FIXIT: Витягати автоматично
                    // TODO: Передавати тільки моду lang: [ 'uk', 'crh', 'ru' ]
                    // В шаблоні додаємо назву бандлу і робимо з цього посилання.
                    // Назви кладемо у i18n
                    content: [
                        { url: '/uk', content: 'Українська' },
                        { url: '/crh', content: 'Qırımtatarca' },
                        { url: '/ru', content: 'Русский' }
                    ]
                }
            ]
        },
        {
            block: 'article',
            content: [
                {
                    block: 'section',
                    specific: 0,
                    level: 1,
                    title: "Зв'язок з Кримом",
                    content: [
                        {
                            elem: 'paragraph',
                            content: "В наш час, ми не уявляємо собі життя без спілкування. Окупація Криму розділила людей, обірвавши зв'язок між півостровом та материком. Практично припинена комунікація почала руйнувати родинні зв'язки. Особливо це вдарило по літнім людям."
                        },
                        {
                            elem: 'paragraph',
                            content: "На цій сторінці ми хочемо зібрати всі доступні способи зв'язку. Опишемо, яким чином спілкуватися дешевше, що для цього потрібно зробити."
                        },
                        {
                            elem: 'paragraph',
                            content: "Якщо ви вважаєте інформацію на цій сторінці корисною, допоможіть іншим дізнатися про неї. Поділіться цією сторінкою у своїй соціальній мережі, це допоможе іншим дізнатися про способи зв'язку між Кримом і Україною."
                        },
                        { block: 'ya-share2' }
                    ]
                },
                {
                    block: 'section',
                    specific: 1,
                    level: 2,
                    title: "Дзвінки з Криму на територію материкової України",
                    anchor: 'from',
                    content: [
                        {
                            block: 'table',
                            mods: { gap: 'm' },
                            content: [
                                {
                                    elem: 'head',
                                    content: [
                                        { elem: 'cell', content: "Оператор, Тариф" },
                                        { elem: 'cell', content: "На мобільні" },
                                        { elem: 'cell', content: "На міські телефони" },
                                        { elem: 'cell', content: "За з'єднання" },
                                        { elem: 'cell', content: "Абонплата" }
                                    ]
                                },
                                {
                                    elem: 'body',
                                    content: [
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.kuban.mts.ru/',
                                                            content: 'МТС'
                                                        },
                                                        ', «',
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.kuban.mts.ru/mob_connect/tariffs/tariffs/supermts/',
                                                            content: 'Супер МТС'
                                                        },
                                                        '»'
                                                    ]
                                                },
                                                { elem: 'cell', content: "10 руб/хв**, 15 руб/хв" },
                                                { elem: 'cell', content: "15 руб/хв" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "—" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        block: 'link',
                                                        url: 'http://ktkru.ru/',
                                                        content: 'Крымтелеком'
                                                    }
                                                },
                                                { elem: 'cell', content: "21,59 руб/хв" },
                                                { elem: 'cell', content: "21,59 руб/хв" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "Згідно тарифів" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        block: 'link',
                                                        url: 'https://skype.com',
                                                        content: 'Skype'
                                                    }
                                                },
                                                { elem: 'cell', content: "20 ¢/хв" },
                                                { elem: 'cell', content: "10 ¢/хв" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "—" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        block: 'link',
                                                        url: 'https://viber.com',
                                                        content: 'Viber'
                                                    }
                                                },
                                                { elem: 'cell', content: "23 ¢/хв" },
                                                { elem: 'cell', content: "15 ¢/хв" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "—" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        block: 'link',
                                                        url: '#sip',
                                                        content: 'Інтернет-телефонія'
                                                    }
                                                },
                                                { elem: 'cell', content: "від 0,75 грн/хв" },
                                                { elem: 'cell', content: "від 0 грн" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "Згідно тарифів обраного оператора зв’язку" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'paragraph',
                            content: "** На телефони МТС Україна"
                        }
                    ]
                },
                {
                    block: 'section',
                    specific: 2,
                    level: 2,
                    title: "Дзвінки з території материкової України до Криму",
                    anchor: 'to',
                    content: [
                        {
                            block: 'table',
                            mods: { gap: 'm' },
                            content: [
                                {
                                    elem: 'head',
                                    content: [
                                        { elem: 'cell', content: "Оператор, Тариф" },
                                        { elem: 'cell', content: "На МТС (+7)" },
                                        { elem: 'cell', content: "На міські телефони" },
                                        { elem: 'cell', content: "За з'єднання" },
                                        { elem: 'cell', content: "Абонплата" }
                                    ]
                                },
                                {
                                    elem: 'body',
                                    content: [
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.ukrtelecom.ua/',
                                                            content: 'Укртелеком'
                                                        }
                                                    ]
                                                },
                                                { elem: 'cell', content: "24 ¢/хв" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "Згідно тарифів" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.mts.ua/',
                                                            content: 'MTS'
                                                        },
                                                        ', «',
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.mts.ua/ua/services/dlya-ekonomii/zvonki/0-za-granicu',
                                                            content: "0 за кордон"
                                                        },
                                                        '»'
                                                    ]
                                                },
                                                { elem: 'cell', content: "1 грн/хв" },
                                                { elem: 'cell', content: "?" },
                                                { elem: 'cell', content: "1 грн" },
                                                { elem: 'cell', content: "3 грн під час першого за добу вихідного дзвінка за кордон" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.mts.ua/',
                                                            content: 'MTS'
                                                        },
                                                        ', «',
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.mts.ua/ua/mobile/tariffs/turist-mts',
                                                            content: 'Турист МТС'
                                                        },
                                                        '»'
                                                    ]
                                                },
                                                { elem: 'cell', content: "1 грн/хв" },
                                                { elem: 'cell', content: "?" },
                                                { elem: 'cell', content: "2 грн" },
                                                { elem: 'cell', content: "Щомісячна плата за збереження номера — 0,01 грн" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.lifecell.com.ua/',
                                                            content: 'Lifecell'
                                                        },
                                                        ', «',
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.lifecell.com.ua/uk/mobilnij-zvyazok/taryfy/Calls_abroad/',
                                                            content: 'Дзвінки за кордон'
                                                        },
                                                        '»'
                                                    ]
                                                },
                                                { elem: 'cell', content: "2,69 грн/хв" },
                                                { elem: 'cell', content: "?" },
                                                { elem: 'cell', content: "1,99 грн" },
                                                { elem: 'cell', content: "—" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.kyivstar.ua',
                                                            content: 'Київстар'
                                                        },
                                                        ', «',
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.kyivstar.ua/kr-620/mm/services/other_counries/favoritecountry/',
                                                            content: 'Послуга «Улюблені країни»'
                                                        },
                                                        '»'
                                                    ]
                                                },
                                                { elem: 'cell', content: "3 грн/хв" },
                                                { elem: 'cell', content: "?" },
                                                { elem: 'cell', content: "2 грн" },
                                                { elem: 'cell', content: "—" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'https://viber.com',
                                                            content: 'Viber'
                                                        }
                                                    ]
                                                },
                                                { elem: 'cell', content: "9.5 ¢/хв" },
                                                { elem: 'cell', content: "4.9 ¢/хв" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "—" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'https://skype.com',
                                                            content: 'Skype'
                                                        }
                                                    ]
                                                },
                                                { elem: 'cell', content: "10 ¢/хв" },
                                                { elem: 'cell', content: "2.3 ¢/хв" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "—" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#sip',
                                                            content: 'Інтернет-телефонія'
                                                        }
                                                    ]
                                                },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "від 0 грн" },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "Згідно тарифів обраного оператора зв’язку" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        { elem: 'h', content: "Телефонні коди міст Криму" },
                        {
                            elem: 'paragraph',
                            content: "Після окупації Криму був перерван міжміський зв'язок між півостровом та материковою Україною. Зараз, щоб зателефонувати на міський телефон в Криму, потрібно використовувати міжнародний код Росії і змінений код міста."
                        },
                        {
                            elem: 'paragraph',
                            content: "Для дзвінка в міста Криму потрібно поміняти в телефонному коді першу цифру `0` на `0073`. Було `065XXXXXXX`, стало `007365XXXXXXX`. З мобільного телефону, Skype чи Viber `+7365XXXXXXX`."
                        },
                        {
                            elem: 'paragraph',
                            content: "Для дзвінка в місто Севастополь потрібно поміняти в телефонному коді першу цифру `0` на `0078`. Було `0692XXXXXX`, стало `0078692XXXXXX`. З мобільного телефону, Skype чи Viber `+78692XXXXXX`."
                        },
                        {
                            elem: 'paragraph',
                            content: "Так як територія Криму не визнається як частина Росії, то українськи оператори не відкривають зв'язок на змінені телефонні коди міст в Криму на російськи. За зміненими кодами міст Криму гарантовано можливо дзвонити лише через Skype та Viber. Ми не можемо перевірити всіх операторів зв'язку, тому надаємо інформацію про зміну кодів міст повністю."
                        }
                    ]
                },
                {
                    block: 'section',
                    specific: 3,
                    level: 2,
                    title: "Спілкування через комунікатори",
                    anchor: 'internet',
                    content: [
                        { elem: 'h', content: "Skype" },
                        { elem: 'h', content: "Viber" },
                        {
                            elem: 'paragraph',
                            content: [
                                {
                                    block: 'link',
                                    url: 'http://www.viber.com/',
                                    content: "Viber"
                                },
                                " дозволяє відправляти текстові повідомлення і дзвонити іншим користувачам Viber безкоштовно. Також є можливість дзвонити на міські і мобільні номери в ",
                                {
                                    block: 'link',
                                    url: 'https://account.viber.com/',
                                    content: "будь-яку точку планети"
                                },
                                "."
                            ]
                        },
                        {
                            elem: 'paragraph',
                            content: "Додаток Viber встановлюється на мобільний телефон або планшет. Є версії для роботи на персональному комп'ютері. Для роботи Viber необхідно підключення вашого пристрою до інтернет використовуючи WiFi або 3G."
                        },
                        {
                            elem: 'paragraph',
                            content: "В якості ідентифікатора Viber використовує номер вашого телефону. Його ви вказуєте при реєстрації, після чого, по СМС або зворотним дзвінком отримаєте код доступу."
                        },
                        {
                            elem: 'paragraph',
                            content: "Перевагою Viber є те, що ви одразу отримуєте список контактів які використовують Viber зі свого списку контактів телефону."
                        },
                        {
                            elem: 'paragraph',
                            content: "З поповненням рахунку Viber в Криму можуть виникнути проблеми. Ми не знайшли жодного платіжного терміналу в Криму з можливістю поповнити рахунок Viber. На даний момент є два можливих варіанти: попросити поповнити рахунок Viber знайомих або родичів, за межами окупованої території; поповнити рахунок через Інтернет-банкінг, якщо у вас є пластикова карта Visa або MasterCard емітована російським банком (на території Криму банки не видають пластикові карти Visa і MasterCard)."
                        },
                    ]
                },
                {
                    block: 'section',
                    specific: 4,
                    level: 2,
                    title: "Інтернет-телефонія",
                    anchor: 'sip',
                    content: [
                        {
                            elem: 'paragraph',
                            content: "Інтернет-телефон чи IP-телефон це такий самий телефон як і міський, але замість дротів він працює через інтернет. Це дозволяє використовувати такий телефон у будь-якому місці, навіть в Криму, бо інтернет там є."
                        },
                        { elem: 'h', content: "IP-телефон з міським номером" },
                        {
                            elem: 'paragraph',
                            content: "Тобто, ви можете придбати такий телефонний номер у своєму місці, передати налаштування у Крим, там цей номер підключать і ви можете зі свого міста розмовляти з Кримом за міським тарифом. З Криму з цього номера також можна телефонувати у ваше місто за місцевим тарифом."
                        },
                        {
                            elem: 'paragraph',
                            content: "Оформлювати такий номер дозволяється законом за місцем вашого проживання, але ніхто вам не може заборонити використовувати його з будь-якої точки світу. Зазвичай, тарифи на такий номер такі самі як і за місцевий провідний номер."
                        },
                        {
                            elem: 'paragraph',
                            content: "Але, при оформленні такого телефона у оператора важливо уточнити, що ви купуєте міський номер, не номадичний."
                        },
                        {
                            elem: 'paragraph',
                            content: "З Криму неможливо буде сплачувати за цей телефон, тому це доведеться робити з материкової частини України. Щоб уникнути ситуації з рахунком за розмови які ви не можете контролювати, запитуйте при підключенні послугу «передоплата». Це дозволить не виходити за рамки тієї суми, якою ви будете періодично поповнювати телефон."
                        },
                        { elem: 'h', content: "Номадичний номер" },
                        {
                            elem: 'paragraph',
                            content: "Номадичний номер теж буде працювати у Криму. Він відрізняється тим, що відв'язаний від будь-якого міста та зазвичай має фіксовані тарифи на міські номери будь-якого міста, та на мобільні номери. Дзвінок на такий номер коштує як на міжміський."
                        },
                        {
                            elem: 'paragraph',
                            content: "Такі номери були створені спеціально для IP-телефонії. Телефон з номадічним номером більш підійде тим, кому потрібно часто дзвонити у різні міста, та на мобільні мережі."
                        },
                        {
                            elem: 'paragraph',
                            content: "Придбати та сплачувати такий номер можливо через Інтернет, але у Криму не працюють платіжні системи. Зараз проробляється можливість сплачувати за такий телефон з Криму. Про це буде додатково повідомлено."
                        },
                        { elem: 'h', content: "Тарифи" },
                        {
                            block: 'table',
                            mods: { gap: 'm' },
                            content: [
                                {
                                    elem: 'head',
                                    content: [
                                        { elem: 'cell', content: "Оператор, Тариф" },
                                        { elem: 'cell', content: "На місцеві" },
                                        { elem: 'cell', content: "На міжміськи" },
                                        { elem: 'cell', content: "На мобільні" },
                                        { elem: 'cell', content: "Тип номеру" },
                                        { elem: 'cell', content: "Абонплата" }
                                    ]
                                },
                                {
                                    elem: 'body',
                                    content: [
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.vegatele.com/ukr/for_home',
                                                            content: 'Vega'
                                                        },
                                                        ', «',
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.vegatele.com/ukr/for_home/phone/offers/ip_line',
                                                            content: 'МініФон IP'
                                                        },
                                                        '»'
                                                    ]
                                                },
                                                { elem: 'cell', content: "від 0 грн **" },
                                                { elem: 'cell', content: "0,60 грн/хв" },
                                                { elem: 'cell', content: "1,20 грн/хв" },
                                                { elem: 'cell', content: "міський ***" },
                                                { elem: 'cell', content: "42,17 грн" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.ukrtelecom.ua/',
                                                            content: 'Укртелеком'
                                                        },
                                                        ', «',
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.ukrtelecom.ua/services/customers/phone/base',
                                                            content: 'Інтернет-телефон Базовий'
                                                        },
                                                        '»'
                                                    ]
                                                },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "0 грн ** , 0,43 грн/хв" },
                                                { elem: 'cell', content: "1,20 грн/хв" },
                                                { elem: 'cell', content: "номадичний" },
                                                { elem: 'cell', content: "39,91 грн" }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://atelecom.biz/ukr/uhome',
                                                            content: 'Атлантис Телеком'
                                                        }
                                                    ]
                                                },
                                                { elem: 'cell', content: "—" },
                                                { elem: 'cell', content: "0,5 грн/хв" },
                                                { elem: 'cell', content: "0,75 грн/хв" },
                                                { elem: 'cell', content: "номадичний" },
                                                { elem: 'cell', content: "—" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'paragraph',
                            content: "** 500 хвилин"
                        },
                        {
                            elem: 'paragraph',
                            content: "*** У оператора Vega можливо придбати телефонні номери міст: Біла Церква, Чернігів, Вінниця, Київ, Бориспіль, Харків, Слов'янськ, Дружківка, Шахтарськ, Харцизк, Донецьк, Макіївка, Маріуполь, Луганськ, Дніпропетровськ, Дніпродзержинськ, Запоріжжя, Кривий Ріг, Новомосковськ, Херсон, Миколаїв, Южний, Іллічівськ, Одеса, Львів, Тернопіль, Чернівці, Коломия, Калуш, Івано-Франківськ."
                        },
                        { elem: 'h', content: "Обладнання" },
                        {
                            elem: 'paragraph',
                            content: "Є декілька способів використовувати IP-телефон."
                        },
                        {
                            elem: 'paragraph',
                            content: "Для літніх людей підійде звичайний телефон з тоновим набором, який вмикається у VoIP-шлюз, про який вони можуть нічого не знати. VoIP-шлюз підключається до мережі Інтернет."
                        },
                        {
                            elem: 'paragraph',
                            content: "Для тих хто користується сучасним мобільним телефоном буде зручно налаштувати IP-телефон у мобільному, встановивши одну з спеціальних програм."
                        },
                        {
                            elem: 'paragraph',
                            content: "Також можливо встановити такий телефон в комп'ютер, який приєднаний до мережі Інтернет. Вам буде потрібна лише гарнітура."
                        },
                        {
                            elem: 'paragraph',
                            content: "Є і інші варіанти, наприклад придбати спеціальний WiFi-телефон чи налаштувати такий номер у міні-АТС."
                        },
                        {
                            elem: 'paragraph',
                            content: "При виборі обладнання рекомендуємо звернутися за консультацією до провайдера Інтернет у Криму та до оператора, який надає телефонний номер."
                        },
                        {
                            elem: 'paragraph',
                            content: "Інструкції з налаштування обладнання зазвичай розміщені на сайті оператора зв'язку у якого придбаний IP-телефон."
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer'
        },
/*        {
            block: 'yandex-metrica',
            params: {
                id: 35297225,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            }
        },
        {
            block: 'statcounter',
            params: {
                project: 10810946,
                security: '11cd22e7'
            }
        } */
    ]
};
