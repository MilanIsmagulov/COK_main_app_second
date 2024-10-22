// Тема ЦОК отображается во многих элементах
const themeOfDEC = 'Основы стандартизации'
// Номер ФГОС и Тескт ФГОС
const numFgos = '09.02.07 '
const numFgosTxt = 'Информационные системы и программирование'
// Номер МДК и Текст МДК
const numMDK = 'ОП.09 '
const numMDKTxt = 'Стандартизация, сертификация и техническое документоведение'
const razdel = 'Стандартизация'
// Массив с рекомендациями
const textOfMethodMaterials = [
    `1 Ознакомьтесь с теоретическими материалами по теме «Эксплуатация и ремонт силового электрооборудования»
    Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
    При необходимости прослушайте/просмотрите материал еще раз. Возвращайтесь к наиболее сложным аспектам темы.
    Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз`,
    `2 Ознакомьтесь с теоретическими материалами по теме «Эксплуатация и ремонт силового электрооборудования».
    Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
    При необходимости прослушайте/просмотрите материал еще раз. Возвращайтесь к наиболее сложным аспектам темы.
    Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз`,
    `3 Ознакомьтесь с теоретическими материалами по теме «Эксплуатация и ремонт силового электрооборудования».
    Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
    При необходимости прослушайте/просмотрите материал еще раз. Возвращайтесь к наиболее сложным аспектам темы.
    Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз`
];
// Ключевые слова
const keyWords = `Lorem ipsum \n dolor sit, amet consectetur adipisicing elit. Rerum, numquam maiores iure est quas aliquam! Labore beatae et repellat voluptas ullam natus dolorum fuga possimus!
Lorem ipsum dolor sit amet consectetur \n adipisicing elit. Quod error doloremque recusandae magni, natus magnam modi rem cum animi odit eaque aut fugiat est iusto, maiores dolor illum ipsa. Architecto sunt mollitia beatae veritatis eum. Sed omnis reiciendis maiores vero error perspiciatis similique. Provident nostrum tempora temporibus veniam, asperiores omnis?
Lorem ipsum \n dolor sit, amet consectetur adipisicing elit. Rerum, numquam maiores iure est quas aliquam! Labore beatae et repellat voluptas ullam natus dolorum fuga possimus!
Lorem ipsum \n dolor sit, amet consectetur adipisicing elit. Rerum, numquam maiores iure est quas aliquam! Labore beatae et repellat voluptas ullam natus dolorum fuga possimus!
Lorem ipsum dolor sit amet consectetur \n adipisicing elit. Quod error doloremque recusandae magni, natus magnam modi rem cum animi odit eaque aut fugiat est iusto, maiores dolor illum ipsa. Architecto sunt mollitia beatae veritatis eum. Sed omnis reiciendis maiores vero error perspiciatis similique. Provident nostrum tempora temporibus veniam, asperiores omnis?
Lorem ipsum \n dolor sit, amet consectetur adipisicing elit. Rerum, numquam maiores iure est quas aliquam! Labore beatae et repellat voluptas ullam natus dolorum fuga possimus!`
/* 1) ФГОС СПО
2) ПООП Профессионалитета
3) Профессиональный модуль
4) МДК
5) Раздел
6) Тема*/
const infoContent = 
`${numFgos} ${numFgosTxt}
${numFgos} ${numFgosTxt}
-
${numMDK} ${numMDKTxt}
${razdel}
${themeOfDEC}`
const blockButtonEOM2 = 0; // "Это для разработки и отладки удобно, блокирует кнопки назад и далее в ЭОМ_2 1 true 0 false"
const typeOfEOM3 = 0; // Если 1 то это тест если что то иное то мини-игра
const typeOfEOM1 = 1; // Если 1 то это video если что то иное то dynamic_info