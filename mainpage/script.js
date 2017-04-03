/* alert('Привет');
"use strict";
var articles = [
  {
    id: '1',
    title: 'Акула откусила руку Милле Йовович!!',
    summary: 'Беспощадная акула откусила руку любимой актриссе миллионов.',
    createdAt: new Date('2017-02-27T23:00:01'),
    author: 'Спуди',
    content: 'Беспощадная акула откусила руку любимой актриссе миллионов. К счастью руку нашли и пришили обратно, а акулу поместили в следственный изолятор. Акула ждет суда по многим статьям уголовного кодекса.'
   },
  
   {
     id: '2',
     title: 'Как найти пару белорусскому мужику. Учимся правильно выбирать носки вместе с экспертом по стилю',
    summary: 'Мужской носок не так прост, как может показаться на первый взгляд. А если их пара, можно вообще прилично заморочиться. Настолько, что в поисках достойной придется потратить несколько часов и попалить прилично бензина. ',
    createdAt: new Date('2017-02-27T23:00:02'),
    author: 'Джейсон Стетхем',
    content: 'Мужской носок не так прост, как может показаться на первый взгляд. А если их пара, можно вообще прилично заморочиться. Настолько, что в поисках достойной придется потратить несколько часов и попалить прилично бензина. Примерно этим корреспонденты Onliner.by и занялись, заручившись поддержкой модного эксперта. Мужская дискриминация, тенденция голой щиколотки, зависть к Папе Римскому и почти полный запрет на черный цвет — в нашем обзоре.' +
'Нырять в глубокий мир отечественных и не только носков без подготовки несколько боязно. Страхуемся стильным парнем, которого зовут Юра Ярошик. На нем приталенный костюм, лоферы и пара фриковатых носков, бьющих в глаз своей яркостью. Помимо того, что Ярошик — обладатель очевидно глубокого гардероба, он еще и режиссер, ведущий, а также создатель влога «Умный и красивый».'
   },
   {
   id: '3',
   title: 'Абоненты продолжают жаловаться на подписки без их согласия. Разбираемся, кто виноват и что делать',
   summary: 'Впервые тему со странными подписками на не менее странные сервисы мы поднимали еще полтора года назад. За прошедшее время, судя по жалобам пользователей, ситуация не разрешилась, а даже усугубилась. ',
   createdAt: new Date('2017-02-27T23:00:04'),
   author: 'Инкогнито',
   content: 'Впервые тему со странными подписками на не менее странные сервисы мы поднимали еще полтора года назад. За прошедшее время, судя по жалобам пользователей, ситуация не разрешилась, а даже усугубилась. Onliner.by решил подробнее разобраться, какое отношение ко всему этому имеют velcom, МТС и life:). Мы взяли комментарии у всех трех операторов, а также подумали, как можно себя обезопасить от непредвиденных расходов. Увы, последнее сделать оказалось не так-то просто.' +
'Кратко напомним, из-за чего вот уже не первый год весь этот сыр-бор. В один прекрасный момент абонент обнаруживает, что ежемесячно с его счета настойчиво списываются небольшие, но так нужные всем деньги. Сталкиваются с этим люди любых профессий и возрастов. Неприятность настигает и программистов, и студентов, и бабушек, и детей. '
},
{
id: '4',
title: 'Есть ли жизнь после смерти? Репортаж из итальянского города-призрака',
summary: 'Где-то внизу у самого синего моря шумит Сан-Ремо — известная итальянская здравница, песенный фестиваль которой долгие годы оживлял бытие советских любителей мелодий и ритмов зарубежной эстрады.',
createdAt: new Date('2017-02-27T23:00:03'),
author: 'Чипполино',
content: 'Где-то внизу у самого синего моря шумит Сан-Ремо — известная итальянская здравница, песенный фестиваль которой долгие годы оживлял бытие советских любителей мелодий и ритмов зарубежной эстрады. На безымянной горе, нависающей над курортной долиной и ощетинившейся частоколом древних зданий, зевают коты да бродят редкие в низкий сезон туристы. Местные жители покинули этот город, где их предки жили столетиями, век с лишним назад, но у Буссаны Веккья, казалось бы, приговоренной природой к забвению, появился шанс на воскрешение. То, что мертво, умереть не может — формула из популярного телесериала нашла именно здесь удивительное подтверждение, только место игры престолов в данном случае заняла долгая борьба творческой богемы с равнодушной ко всему живому системой. Onliner.by при содействии xistore.by побывал в самобытнейшем из городов-призраков Европы.' +
'Эти полтора десятка километров от Сан-Ремо, скорее всего, запомнятся вам надолго. Дорога узким серпантином взбирается по крутому холму, глаза наслаждаются типичным лигурийским пейзажем с оливковыми рощами и бесконечными парниками, а нервы систематически будоражат выскакивающие из-за очередного слепого поворота автомобили. Заканчивается путь тупиком, но череда припаркованных на обочине машин намекает, что впереди нечто интересное. Добро пожаловать в Буссану Веккья — очень типичный и одновременно абсолютно оригинальный итальянский заброшенный город.'
},
{
id: '5',
title: '«Кнопочный телефон может стать поводом для травли». Психотерапевт о гонке гаджетов и статусе среди детей"',
summary: 'Взрослые предпочитают считать, что понятия «достаток» и «нищеброд» недоступны пониманию младших школьников.',
createdAt: new Date('2017-02-27T23:00:05'),
author: 'Инкогнито',
content: 'Взрослые предпочитают считать, что понятия «достаток» и «нищеброд» недоступны пониманию младших школьников. Но с тех пор, как похожая на кирпич Nokia сменилась лопатообразным iPhone, гаджеты стали мерилом статуса, что особенно заметно в детских сообществах. Каково пользоваться кнопочным телефоном, когда одноклассники давно обзавелись смартфонами? Что делать, чтобы ребенок не чувствовал себя участником конкурса на самое крутое устройство? Об этом врач-психотерапевт, который работает с детьми, директор престижной минской школы и ее ученики рассказали Onliner.by.' +
'Социальный портрет ученика 36-й гимназии довольно пестрый. Здесь учатся дети непростых родителей наравне со школьниками из семей скромного достатка. Руководство школы прилагает массу усилий к тому, чтобы гаджеты не определяли статус ребенка в детском коллективе. Для оценки того, что из этого вышло, у нас было слишком мало времени.'
},
{
id: '6',
title: '«Многие спрашивают: как вы тут вообще живете?» Минчане о единственной в Минске многоэтажке с дворами-«колодцами»',
summary: 'У жителей дома на улице Червякова есть один общий секрет. С улицы его заметить невозможно, но стоит только подняться по ступенькам и попасть на дворовую территорию, как он открывается во всей красе. ',
createdAt: new Date('2017-02-27T23:00:09'),
author: 'Инкогнито',
content: 'У жителей дома на улице Червякова есть один общий секрет. С улицы его заметить невозможно, но стоит только подняться по ступенькам и попасть на дворовую территорию, как он открывается во всей красе. Новостройка сконструирована таким образом, что прячет в себе пространство, напоминающее колодцы. Смотря вверх, ощущаешь себя на дне какой-то ямы с окнами-мозаиками. Наружный шум утихает, голос и шаги раздаются эхом. В Минске это единственный дом с такой нестандартной архитектурой. На этапе покупки квартир будущие жильцы вряд ли осознавали, каково это — жить с видом на расположенные кругом «соты» соседских окон. Какие впечатления у них от таких архитектурных новаций сегодня?' +
'Новостройкой в прямом смысле слова дом на Червякова, 55, не является: строить его начали в 2007 году, три подъезда ввели в эксплуатацию в 2010-м, остальные — до 2014-го. Однако квартиры там застройщик продает по сей день.'
}]

function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        return filterArtilces(articlesStorage, filterConfig).slice(skip, skip + top);
    }

    function getArticlesCount(filterConfig) {
        return filterArtilces(articlesStorage, filterConfig).length;
    }

    // todo: rename function, typo
    function filterArtilces(articles, filterConfig) {
        if (filterConfig && filterConfig.author) {
            return articles.filter(function (article) {
                return filterConfig.author === article.author;
            })
        } else {
            return articles;
        }
    }

    return {
        getArticles: getArticles,
        getArticlesCount: getArticlesCount
    };
}())

var articleRenderer = (function () {
    var aritcleTemplate;
    var articleListNode;

    function init() {
        /!* DOM Загрузился.
           Можно найти в нем нужные элементы и сохранить в переменные *!/
        aritcleTemplate = document.querySelector('#template-article-list-item');
        articleListNode = document.querySelector('.article-list');
    }

    function insertArticlesInDOM(articles) {
        /!* для массива объектов статей получим соотвествующие HTML элементы *!/
        var articlesNodes = renderArticles(articles);
        /!* вставим HTML элементы в '.article-list' элемент в DOM. *!/
        articlesNodes.forEach(function (node) {
            articleListNode.appendChild(node);
        });
    }

    function removeArticlesFromDom() {
        articleListNode.innerHTML = '';
    }

    function renderArticles(articles) {
        /!* каждый объект article из массива преобразуем в HTML элемент *!/
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        /!*
         Используем template из DOM, заполним его данными конкретной статьи - article.
         Этот код можно сделать лучше ...
        *!/
        var template = aritcleTemplate;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
       template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);

        /!*
         Склонируем полученный контент из template и вернем как результат
        *!/
        return template.content.querySelector('.article-list-item').cloneNode(true);
    }

    /!* Date -> 16/05/2015 09:50 *!/
    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());

/!*
    Этот модуль будет использоваться для пагинации:
        1. Содержит в себе данные о текущей странице, сколько всего статей на странице
        2. Содержит ссылку на кнопку "Показать еще", отбрабатывает клики на кнопку. Прячет кнопку, если больше статей начнет
*!/

var pagination = (function () {
    var ITEMS_PER_PAGE = 3; // статей на 1-ой странице
    var total; // всего статей
    var currentPage; // текущая страница
    var showMoreButton;
    var showMoreCallback; // функция, которую вызывать, когда произошел клик по кнопке

    /!*
        Total: Всего статей в ArticleModel. (Надо будет еще учесть, что total меняется при применении фильтров)
        showMoreCb: функция, которую надо вызвать при клике на кнопку "Показать Еще"
    *!/
    function init(_total, _showMoreCallback) {
        currentPage = 1;
        total = _total;
        showMoreCallback = _showMoreCallback;
        showMoreButton = document.getElementById('pagination-show-more');
        showMoreButton.addEventListener('click', handleShowMoreClick);

        /!* Не показывать кнопку если статей нет *!/
        showOrHideMoreButton();

        /!* Вернуть skip, top для начальной отрисовки статей *!/
        return getParams();
    }

    function handleShowMoreClick() {
        var paginationParams = nextPage();
        showMoreCallback(paginationParams.skip, paginationParams.top);
    }

    function getTotalPages() {
        return Math.ceil(total / ITEMS_PER_PAGE);
    }

    function nextPage() {
        currentPage = currentPage + 1;
        /!* возможно, статей больше нет, спрятать кнопку *!/
        showOrHideMoreButton();

        return getParams();
    }

    function getParams() {
        return {
            top: ITEMS_PER_PAGE,
            skip: (currentPage - 1) * ITEMS_PER_PAGE
        };
    }

    function showOrHideMoreButton() {
        showMoreButton.hidden = getTotalPages() <= currentPage;
    }

    return {
        init: init
    }

}());

/!*
    Этот модуль контролирует форму Filter.
    Собирает все данные из элементов в один объект filterConfig
    Он вызывает перерисовку статей, когда пользователь применил новый фильтр.
*!/
var filter = (function () {
    var form;
    var submitButton;
    var filterChangedCallback;

    function init(_filterChangedCallback) {
        form = document.forms.filter;
        submitButton = form.elements.submit;
        submitButton.addEventListener('click', handleSubmitClick);
        filterChangedCallback = _filterChangedCallback;

        return getFilter();
    }

    function getFilter() {
        /!* Тут происходит сбор всех фильтров: АВТОР + ДАТА + ТЕГИ. Потом этот объект передадим в функцию getArticles как fitlerConfig *!/
        var authorSelect = form.elements.author;
        if (authorSelect.value === 'all') {
            return {};
        } else {
            return {
                author: authorSelect.value
            }
        }
    }

    function handleSubmitClick() {
        return filterChangedCallback(getFilter());
    }

    return {
        init: init,
        getFilterConfig: getFilter
    };

}());

/!*
    Функция startApp вызовется, когда браузер полностью загрузит и распарсит исходный HTML (index.html)
    DOMContentLoaded – означает, что все DOM-элементы разметки уже созданы,
    можно их искать, вешать обработчики, создавать интерфейс, но при этом, возможно,
    ещё не догрузились какие-то картинки или стили.
*!/
document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    /!* DOM Загрузился.
       Можно найти в нем нужные элементы и сохранить в переменные *!/
    articleRenderer.init();
    /!*
        Инициализация фильтра. Это самое важное, потому что от него зависит и пагинация и статьи
        Функция renderArticlesWithFilterConfig будет вызываться, когда пользователь применит новый фильтр.
        Она удалит все статьи из DOM. Заново проинициализурет пагинацию. Нарисует нужные статьи
    *!/
    var filterConfig = filter.init(renderArticlesWithFilterConfig);
    /!* Отрисовать статьи с начальным фильтром *!/
    renderArticlesWithFilterConfig(filterConfig);

    function renderArticlesWithFilterConfig(filterConfig) {
        /!* Перед отображением статей с новым фильтром. Удалим из дома старые статьи *!/
        articleRenderer.removeArticlesFromDom();
        /!*
            Инициализируем пагинацию.
            Для этого передаем сколько всего статей: total
            и функцию, которую вызывать при клике на кнопку "Показать Еще":
            анонимную функцию, которая, кроме переденных из pagination параметров skip и top, учтет текущий фильтр filterConfig.
        *!/
        var total = articleModel.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });

        /!* Нарисуем статьи из массива articles в DOM используя полученный фильтр и начальную пагинацию *!/
        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }

    /!* Свяжем модель и отображение списка статей. Функция добавит новые статьи в конец списка *!/
    function renderArticles(skip, top, filterConfig) {
        // 1. Достанем нужные статьи из модели
        var articles = articleModel.getArticles(skip, top, filterConfig);

        // 2. Отобразим статьи
        articleRenderer.insertArticlesInDOM(articles);
    }
}


];*/