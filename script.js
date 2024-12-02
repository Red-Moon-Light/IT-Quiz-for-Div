"use strict";

let questionsList = [

{   
    questionNumber: 1,
    questionText: 'Что такое операционная система?',
    variantsList: [
        'Это просто программа на компьютере, как и другие - Word или Chrome.',
        'Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный.',
        'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем.',
        'Нет такого понятия, есть понятие "файловая система".'
    ],
    rightAnswer: 'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем.',
},

{
    questionNumber: 2,
    questionText: 'Является ли Android операционной системой?',
    variantsList: [
        'Да, это такая же ОС, как и другие, просто для мобильных девайсов.',
        'Нет, операционные системы бывают только для ПК.',
        'Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные.',
        'Это домашняя страничка в настройках вашего браузера.'
    ],
    rightAnswer: 'Да, это такая же ОС, как и другие, просто для мобильных девайсов.',
},

{
    questionNumber: 3,
    questionText: 'Что такое процессор компьютера?',
    variantsList: [
        'Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки.',
        'Это общее название всех комплектующих компьютера.',
        'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств.',
        'Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц.'
    ],
    rightAnswer: 'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств.',
},

{
    questionNumber: 4,
    questionText: 'Какие бывают разрядности у современных процессоров?',
    variantsList: [
        '32 и 64 бита.',
        '12 и 32 бита.',
        '15 и 32 бита.',
        '86 и 64 бита.'
    ],
    rightAnswer: '32 и 64 бита.',
},

{
    questionNumber: 5,
    questionText: 'Какой тип процессора чаще всего используют мобильные девайсы?',
    variantsList: [
        'iOS использует Intel, остальные используют AMD.',
        'Чаще всего используют Intel.',
        'Чаще всего используют AMD.',
        'Чаще всего используют ARM.'
    ],
    rightAnswer: 'Чаще всего используют ARM.',
},

{
    questionNumber: 6,
    questionText: 'Для чего компьютеру нужна RAM?',
    variantsList: [
        'Для быстрого доступа к данным.',
        'Для долгосрочного хранения данных.',
        'Для правильной фрагментации памяти.',
        'Для дефрагментации данных.'
    ],
    rightAnswer: 'Для быстрого доступа к данным.',
},

{
    questionNumber: 7,
    questionText: 'Чем отличается HDD от SSD?',
    variantsList: [
        'HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее.',
        'HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее.',
        'SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее.',
        'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее.'
    ],
    rightAnswer: 'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее.',
},

{
    questionNumber: 8,
    questionText: 'Как отличаются между собой USB?',
    variantsList: [
        'Бывают только USB 2.0 и 3.2.',
        'Бывают только micro-USB и mini-USB.',
        'USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).',
        'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2).'
    ],
    rightAnswer: 'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2).',
},

{
    questionNumber: 9,
    questionText: 'Какой файловой системы не существует?',
    variantsList: [
        'Fat.',
        'NTFS.',
        'APFS.',
        'BolSFS.'
    ],
    rightAnswer: 'BolSFS.',
},

];


createResultsBlocks()
function createResultsBlocks() {
    // Создание на панели результатов в html отдельных блоков на
    // каждый вопрос
    let resultsQuestionBlocksList = 
        document.getElementsByClassName(
            'results__block-questions-list')[0];

    let parentResultsQuestionBlock = 
        document.getElementsByClassName('results__block-question')[0];

    for(let i = 0; i < (questionsList.length - 1); i++) {
        resultsQuestionBlocksList.appendChild(
            parentResultsQuestionBlock.cloneNode(true));
    }
}

// Переменные блока вопросов
let htmlQuestionContainer =
    document.getElementById('question__container');

let htmlQuestionText = 
    document.getElementById('question__question-text');

let htmlVariantsList = 
    document.getElementsByClassName('question__p-variants');

let radioBtnList = 
    document.getElementsByClassName('question__radio-variants');
    
// Переменные прогресс-бара
let progressBarEndNumber = document.getElementById('progress-bar__end-number');
progressBarEndNumber.innerHTML = questionsList.length;

let progressBarNumber = 
    document.querySelector('.progress-bar__current-question-number');

let progressBarFill = 
    document.querySelector('.progress-bar__filled-line');    


// Переменные блока результатов
let htmlResultsContainer =
    document.getElementById('results__container')

let htmlResultsQuestionBlocks = 
    document.getElementsByClassName('results__block-question');

let htmlResultsQuestions = 
    document.getElementsByClassName('results__question-text');

let htmlResultsAnswers = 
    document.getElementsByClassName('results__answer-text');

let htmlTextResultsTitle = 
    document.getElementById('results__text-title');

let htmlTextCorrectAnswers = 
    document.getElementById('results__correct-answers-counter');

let htmlTextResultsComment = 
    document.getElementById('results__text-comment');

let restartButton =
    document.getElementById('results__restart-btn');


let mixedQuestionsList = [];
let mixedVariantsList = [];

mixedQuestionsList = createNewOrder(questionsList);
let currentQuestionNumber = 0;
let correctAnswersCounter = 0;

showQuestion();

function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createNewOrder(list) {
    //Создание списка с перемешанными в случайном порядке элементами
    //из заданного списка
    let listCopy = list.slice();
    let newList = [];
    for(let i = 0; listCopy.length > 0; i++){
        let generatedInt = generateRandomInt(1, listCopy.length);
        let newResult = listCopy[generatedInt - 1];
        listCopy.splice(generatedInt - 1, 1);
        newList.push(newResult);
    }
    return newList;
    return list;
}

function showQuestion(){
    // Замена текущего текста вопроса на текст вопроса из списка
    htmlQuestionText.innerHTML = 
    mixedQuestionsList[currentQuestionNumber].questionText;

    // Создание списка текстовых значений вариантов ответа 
    let valueVariantsList = [];
    for(let k=0; k in htmlVariantsList; k++){
        valueVariantsList.push(htmlVariantsList[k].innerHTML );
    }

    // Перемешивание вариантов ответа в случайном порядке
    //с выводом в HTML
    mixedVariantsList = createNewOrder(valueVariantsList);
    for(let l=0; l in htmlVariantsList; l++){
        htmlVariantsList[l].innerHTML = mixedVariantsList[l];
    }

    // Замена текста вариантов ответа на текст ответов из списка
    for(let j=0; j in htmlVariantsList; j++){
        let variantComponents = (htmlVariantsList[j].innerHTML).split('> ');
        htmlVariantsList[j].innerHTML = variantComponents[0] + '> ' +
            (mixedQuestionsList[currentQuestionNumber].variantsList)[
            +(radioBtnList[j].value) - 1];
    }

    updateProgressBar();

    for(let radioBtn of radioBtnList) {
        radioBtn.addEventListener('click', checkAnswer);
    }

}


function updateProgressBar() {
    let progressBarWidthPercent = (currentQuestionNumber / (questionsList.length - 1)) * 100;

    // Заполнение шкалы на прогресс-баре
    progressBarNumber.innerText = currentQuestionNumber + 1;
    if(currentQuestionNumber == 0) {
        progressBarFill.style.width = `2%`;
        progressBarNumber.classList.remove('translate-left');
    } else {
        progressBarNumber.classList.add('translate-left');
        progressBarFill.style.width = `${progressBarWidthPercent}%`;    
        progressBarNumber.style.left = `${progressBarWidthPercent}%`;
    }

    // Убрать номер вопроса снизу, если вопрос последний
    if(currentQuestionNumber + 1 == questionsList.length) {
        progressBarNumber.innerText = '';
    }
}


function checkAnswer() {
    // Предотвращение повторных вызовов функций по нажатию
    // до окончания обработки
    for(let radioBtn of radioBtnList) {
        radioBtn.removeEventListener('click', checkAnswer);
    }

    // Определение текста, соответствующего нажатой радиокнопке 
    let ClickedRadioBtnValue = 
    +document.querySelector('input[type="radio"]:checked').value - 1;
    let ClickedRadioBtnText = mixedQuestionsList[
        currentQuestionNumber].variantsList[ClickedRadioBtnValue];

    // Отображение текста вопроса и выбранного ответа на панели результатов
    htmlResultsQuestions[currentQuestionNumber].innerHTML = 
        mixedQuestionsList[currentQuestionNumber].questionText;
    htmlResultsAnswers[currentQuestionNumber].innerHTML = 
        ClickedRadioBtnText;    

    // Определение верности ответа и добавление соответствующего класса
    // к блоку данного вопроса на панели резлуьтатов
    if(ClickedRadioBtnText ==
        mixedQuestionsList[currentQuestionNumber].rightAnswer) {

            correctAnswersCounter++;
            htmlResultsQuestionBlocks[
                currentQuestionNumber].classList.add('correct-answer'); 
    } else {
        htmlResultsQuestionBlocks[
            currentQuestionNumber].classList.add('incorrect-answer'); 
    };

    setTimeout(() => moveToNextQuestion(), 1000);
}

function moveToNextQuestion() {
    // Переход к следующему вопросу теста
    currentQuestionNumber++;
    if(currentQuestionNumber in mixedQuestionsList){
        showQuestion();
    }
    else {showResults()};
}

function showResults() {
    // Скрытие блока вопросов и отображение блока результатов
    htmlQuestionContainer.classList.add('hidden');
    htmlResultsContainer.classList.remove('hidden');

    // Если число правильных ответов > 0 и < максимума :
    if(0 < correctAnswersCounter && correctAnswersCounter < 
        questionsList.length) {

        // Если число правильных ответов МЕНЬШЕ ПОЛОВИНЫ от максимума :
        if(correctAnswersCounter < (questionsList.length)/2) {
            htmlTextResultsTitle.innerHTML = 'Слабовато!';
            htmlTextResultsComment.innerHTML = 'Попробуйте ещё раз!';
        // Если число правильных ответов БОЛЬШЕ ПОЛОВИНЫ от максимума :    
        } else {
            htmlTextResultsTitle.innerHTML = 'Хороший результат!';
            htmlTextResultsComment.innerHTML = 'Так держать!';
        }

        // Если число правильных ответов оканчивается на 1 :
        if(correctAnswersCounter % 10 == 1) {
            htmlTextCorrectAnswers.innerHTML =
                'Вы ответили правильно на ' + correctAnswersCounter + 
                ' вопрос.';
        
        // Если число правильных ответов оканчивается на 2, 3 или 4 :
        } else if(correctAnswersCounter % 10 == 2 ||
            correctAnswersCounter % 10 == 3 ||
            correctAnswersCounter % 10 == 4
        ) {
            htmlTextCorrectAnswers.innerHTML =
                'Вы ответили правильно на ' + correctAnswersCounter +
                ' вопроса.';
        
        // Если число правильных ответов оканчивается на другие цифры :
        } else {
            htmlTextCorrectAnswers.innerHTML =
                'Вы ответили правильно на ' + correctAnswersCounter + 
                ' вопросов.';
        }

    // Если правильных ответов 0 :        
    } else if(correctAnswersCounter == 0){
        htmlTextResultsTitle.innerHTML = 'Упс :(';
        htmlTextCorrectAnswers.innerHTML =
        'Вы неправильно ответили на все вопросы.';
        htmlTextResultsComment.innerHTML =
        'Нужно подучить теорию.';

    // Если все ответы правильные : 
    } else {
        htmlTextResultsTitle.innerHTML = 'Поздравляем!';
        htmlTextCorrectAnswers.innerHTML =
        'Вы правильно ответили на все вопросы.';
        htmlTextResultsComment.innerHTML =
        'Вы действительно отлично разбираетесь в IT.';
        restartButton.classList.add('hidden-restart-btn');

    }

}

// Перезапуск теста по нажатию кнопки внизу панели результатов
restartButton.onclick = restartTest;
function restartTest() {
    mixedQuestionsList = createNewOrder(questionsList);
    currentQuestionNumber = 0;
    correctAnswersCounter = 0;

    progressBarNumber.style.left = `0%`;
    progressBarNumber.innerText = '';

    // Удаление классов, определяющих корректность ответа
    for(let i = 0; i in htmlResultsQuestionBlocks; i++){
        htmlResultsQuestionBlocks[i].classList.remove('incorrect-answer'); 
        htmlResultsQuestionBlocks[i].classList.remove('correct-answer'); 
    }

    showQuestion();

    // Скрытие блока результатов и отображение блока вопросов
    htmlQuestionContainer.classList.remove('hidden');
    htmlResultsContainer.classList.add('hidden');
}