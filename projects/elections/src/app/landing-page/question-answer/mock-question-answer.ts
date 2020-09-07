import { QuestionAnswer } from './question-answer';

export const QUESTIONANSWER: QuestionAnswer[] = [
    {
        question: 'Кому доступно дистанционное электронное голосование (ДЭГ)?',
        answer: '<p>Вы можете подать заявление для участия в дистанционном электронном голосовании через портал Госуслуг, если:</p>\n' +
            '                        <ul>\n' +
            '                            <li>Являетесь гражданином РФ;</li>\n' +
            '                            <li>Являетесь жителем Курской или Ярославской области и зарегистрированы на территории Сеймского одномандатного избирательного округа №&nbsp;110 или Ярославского одномандатного избирательного округа №&nbsp;194;</li>\n' +
            '                            <li>Хотите принять участие в ДЭГ на дополнительных выборах депутатов Государственной Думы Федерального Собрания Российской Федерации седьмого созыва по одномандатным избирательным округам;</li>\n' +
            '                            <li>Достигнете на день голосования возраста 18&nbsp;лет;</li>\n' +
            '                            <li>Данные, указанные в личном кабинете на <span>портале Госуслуг</span>, соответствуют сведениям, содержащимся в списке избирателей, составленном ЦИК России (ГАС «Выборы»). В этом случае в вашем личном кабинете в разделе «Мои выборы» отобразится номер избирательного участка по адресу регистрации;</li>\n' +
            '                            <li>У вас подтверждена учетная запись Госуслуг;</li>\n' +
            '                            <li>Вы указали и подтвердили номер телефона в своем <span>профиле в ЕСИА</span>.</li>\n' +
            '                        </ul>'
    },
    {
        question: 'Где будет проходить дистанционное электронное голосование?',
        answer: '<p>Дистанционное электронное голосование будет проходить на , расположенном по адресу <span>http://vybory.gov.ru</span></p>\n' +
            '                        <p>Для участия в дистанционном электронном голосование в обязательном порядке необходимо заранее подать соответствующее заявление через <span>портал Госуслуг</span>.</p>\n' +
            '                        <p>Вы сможете перейти на портал дистанционного голосования любым из перечисленных способов:</p>\n' +
            '                        <ul>\n' +
            '                            <li>Перейдя по ссылке из письма с информацией о порядке голосования, которое будет направлено Вам после успешного рассмотрения ЦИК России Вашего заявления.</li>\n' +
            '                            <li>Перейдя по ссылке из личного кабинета <span>портала Госуслуг</span> в блоке «Мои выборы», если Ваше заявление ранее было успешно учтено ЦИК России</li>\n' +
            '                            <li>Набрав <span>vybory.gov.ru</span> в адресной строке вашего браузера на стационарном компьютере или Вашем мобильном устройстве</li>\n' +
            '                        </ul>'
    },
    {
        question: 'Потребуются ли мне какие-то технические средства или специальные программы для дистанционного электронного голосования?',
        answer: '<p>Для взаимодействия с системой дистанционного электронного голосования вам понадобится персональный компьютер или ноутбук, подключенный к интернету с установленным веб-браузером. Также вы сможете проголосовать с планшета или смартфона под управлением iOS (iPhone) или Android с актуальной версией операционной системы.</p>\n' +
            '                        <p>Рекомендуется для голосования использовать личные устройства, доступ к которым контролируете только вы.</p>\n' +
            '                        <p>В качестве веб-браузера рекомендуется использование браузеров российского производства, таких как Яндекс браузер или Браузер спутник</p>\n' +
            '                        <p>При голосовании потребуется устойчивое соединение с Интернетом. Не используйте систему в процессе движения на автомобиле или в поезде, а также если вы находитесь в зоне неустойчивого приема сигнала сотовой сети или WiFi.</p>'
    },
    {
        question: 'Как я смогу проголосовать на портале vybory.gov.ru?',
        answer: '<p>С 8-00&nbsp;утра 11&nbsp;сентября по 20-00 13&nbsp;сентября 2020&nbsp;года на главной странице портала <span>vybory.gov.ru</span> будет доступна кнопка «Принять участие в голосовании». При ее нажатии пользователь пользователю будет предложено пройти процедуру идентификации, полностью аналогичную процедуре идентификации при входе на <span>портал Госуслуг</span>. Вам потребуется ввести Ваш пароль от Личного кабинета <span>портала Госуслуг</span>, поэтому держите его под рукой, или сохраните в браузере на своем устройстве.</p>\n' +
            '                        <p>После успешного прохождения идентификации Вы увидите голосования на дополнительных выборах депутатов Государственной Думы Федерального Собрания Российской Федерации седьмого созыва по одномандатным избирательным округам. В зависимости от того, где Вы обладаете активным избирательным правом, будет отображено голосование в Курской области – Сеймский одномандатный избирательный округ №&nbsp;110 или Ярославской области – Ярославский одномандатный избирательный округ №&nbsp;194.</p>'
    },
    {
        question: 'Если при голосовании у меня произойдёт сбой (пропадет Интернет, разрядится телефон), я смогу сделать это еще раз?',
        answer: '<p>Если технический сбой произойдет до ввода кода из СМС, подтверждающей ваше участие в голосовании, вы сможете повторить процесс на любом устройстве.</p>\n' +
            '                        <p>Если сбой произойдет после ввода кода из СМС, вы сможете попробовать пройти процесс еще раз, но только на том устройстве и в том веб-браузере, где был введен такой код изначально. В этом случае на странице с доступными Вам голосованиями у такого голосования будет указано:</p>\n' +
            '                        <p>Вы получили доступ к бюллетеню на этом голосовании. Вы сможете вернуться к бюллетеню, если используете тот-же браузер на том же устройстве и не проголосовали ранее.</p>\n' +
            '                        <p>Вы не сможете проголосовать повторно, если ранее уже использовали доступ к бюллетеню для голосования (подтвердили волеизъявление и отправили бюллетень)</p>'
    }
];