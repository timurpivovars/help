// Данные для каждого задания
const tasksData = {
    1: {
        title: "Задание 1",
        description: "Здесь будет описание задания 1",
        example: "Пример решения появится здесь"
    },
    2: {
        title: "Задание 2",
        description: "Здесь будет описание задания 2",
        example: "Пример решения появится здесь"
    },
    3: {
        title: "Задание 3",
        description: "Здесь будет описание задания 3",
        example: "Пример решения появится здесь"
    },
    // ... добавите остальные задания
};

// Заполняем данные для всех 27 заданий (пока шаблонные)
for (let i = 4; i <= 27; i++) {
    tasksData[i] = {
        title: `Задание ${i}`,
        description: `Здесь будет описание задания ${i}`,
        example: `Пример решения появится здесь`
    };
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

    // Отображаем содержимое задания
    content.innerHTML = `
        <div class="task-content">
            <div class="task-header">
                <h2>${task.title}</h2>
            </div>

            <div class="task-description">
                <h3>📝 Описание</h3>
                <p>${task.description}</p>
            </div>

            <div class="task-example">
                <h3>💡 Пример</h3>
                <p>${task.example}</p>
            </div>

            <button class="back-btn" onclick="goBack()">← Вернуться к списку заданий</button>
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
            <h2>Добро пожаловать!</h2>
            <p>Выберите номер задания из списка выше, чтобы начать подготовку.</p>
            <div class="info-box">
                <h3>Структура экзамена</h3>
                <p>Всего заданий: <strong>27</strong></p>
                <p>Максимальный балл: <strong>100</strong></p>
                <p>Время выполнения: <strong>3 часа 55 минут</strong></p>
            </div>
        </div>
    `;
}