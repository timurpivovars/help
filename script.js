// Данные для каждого задания
const tasksData = {
    1: {
        title: "Задание 1",
        description: "Я очень надеюсь, что ты не будешь решать это задание кодом",
        code: null
    },
    2: {
        title: "Задание 2",
        description: "Решение задачи с помощью Python",
        code: `from itertools import *

def f(x,y,w,z):
 # Переписываем условие тут 
    return (z==(not x))<=((w<=(not y))and(y<=x))

for a1,a2,a3,a4,a5 in product([0,1], repeat=5):
#вот тут надо переписать таблицу
    t = [(1,1,1,0), (a1,a2,0,0), (a3,0,a4,a5)]
    if len(set(t))==3:
        for p in permutations('xywz'):
            if [f(**dict(zip(p,r))) for r in t]==[1,0,0]: # тут тоже не забываем
                print(p)`
    },
    3: {
        title: "Задание 3",
        description: "Здесь будет описание задания 3",
        code: null
    }
};

// Заполняем данные для всех 27 заданий
for (let i = 4; i <= 27; i++) {
    tasksData[i] = {
        title: `Задание ${i}`,
        description: `Здесь будет описание задания ${i}`,
        code: null
    };
}

// Функция копирования кода
function copyCode(button, codeId) {
    const codeBlock = document.getElementById(codeId);
    const code = codeBlock.textContent;

    navigator.clipboard.writeText(code).then(() => {
        button.textContent = '✓ Скопировано';
        button.classList.add('copied');

        setTimeout(() => {
            button.textContent = 'Копировать';
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Ошибка копирования:', err);
        button.textContent = '✗ Ошибка';
        setTimeout(() => {
            button.textContent = 'Копировать';
        }, 2000);
    });
}

// Функция открытия задания
function openTask(taskNumber) {
    const content = document.getElementById('content');
    const task = tasksData[taskNumber];

    // Убираем активный класс со всех кнопок
    document.querySelectorAll('.task-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Добавляем активный класс к выбранной кнопке
    document.querySelectorAll('.task-btn')[taskNumber - 1].classList.add('active');

    // Формируем HTML с кодом, если он есть
    let codeHTML = '';
    if (task.code) {
        codeHTML = `
            <div class="code-container">
                <div class="code-header">
                    <span>Python</span>
                    <button class="copy-btn" onclick="copyCode(this, 'code-${taskNumber}')">Копировать</button>
                </div>
                <div class="code-block">
                    <pre id="code-${taskNumber}">${task.code}</pre>
                </div>
            </div>
        `;
    }

    // Отображаем содержимое задания
    content.innerHTML = `
        <div class="task-content">
            <div class="task-header">
                <h2>${task.title}</h2>
            </div>

            <div class="task-description">
                <h3>Описание</h3>
                <p>${task.description}</p>
            </div>

            ${codeHTML}
        </div>
    `;

    // Плавная прокрутка наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Функция возврата к главной странице
function goBack() {
    const content = document.getElementById('content');

    // Убираем активный класс со всех кнопок
    document.querySelectorAll('.task-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    content.innerHTML = `
        <div class="welcome">
            <h2>Дарова</h2>
            <p>Сверху номера заданий, жми и получай код</p>
        </div>
    `;
}
