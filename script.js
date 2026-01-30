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
        description: "Тут я тебе никак не помогу",
        code: null
    },
    4: {
        title: "Задание 4",
        description: "Это надо уметь решать",
        code: null
    },
    5: {
        title: "Задание 5",
        description: "Почти универсальный код для 5",
        task: `На вход алгоритма подаётся натуральное число N. Алгоритм строит по нему новое число R следующим образом.
1. Строится запись числа N в системе счисления с основанием 12.
2. Далее эта запись обрабатывается по следующему правилу:
а) если число N делится на 3, то слева к нему приписывается «1», а справа «B»;
б) если число N на 3 не делится, то слева к нему приписывается «2», а справа «0». Полученная таким образом запись является двенадцатеричной записью искомого числа R. 3. Результат переводится в десятичную систему и выводится на экран.
Например, для исходного числа 11 = B12 результатом является число 2B012= 420, а для исходного числа 12 = 1012 это число 110B12 = 1883.
Укажите максимальное число R, меньшее 1996, которое может быть получено с помощью описанного алгоритма. В ответе запишите это число в десятичной системе счисления.`,
        code: `from string import *
#переводим в нужную систему, тут можно хоть в 2 чтобы мозги не манать
def s12(x):
    if x==0: return '0'
    s = ''
    while x>0:
        s = printable[x%12]+s
        x//=12
    return s

m = []
#перебираем учитывая условие
for n in range(1,2000):
    b = s12(n)
#это уже пишем строго по условию
    if n%3==0:
        b = '1'+b+'B'
    else:
        b = '2'+b+'0'
    r = int(b,12)
#условие - меньше 1996, но максимальное, значит нужен список куда добавим все и после выведем максимальное
    if r<1996:
        m.append(r)
print(max(m))
#если бы нужное было минимальное, то просто break`
    },
    6: {
        title: "Задание 6",
        description: "С помощью пайтона также",
        task: `Черепаха выполнила следующую программу:
Повтори 2 [Вперёд 24 Направо 90 Вперёд 10 Направо 90]
Вперёд 3 Налево 90 Вперёд 13 Направо 90
Повтори 2 [Вперёд 9 Направо 90 Вперёд 32 Направо 90]
Полученный при выполнении этой программы рисунок можно рассматривать как набор непересекающихся прямоугольников. Определите наибольшую из площадей этих прямоугольников. В ответе запишите только число – наибольшую площадь в условных единицах`,
        code: `#вот это база, везде также пишем
from turtle import *
tracer(0)
screensize(10000,10000)
r = 20
#вот это уже зависит от условия задачи
for i in range(2):
 # Двигаемся вперёд на 24 единицы, поворачиваем направо на 90 градусов
    fd(24*r)
 # двигаемся вперёд на 10 единиц, снова поворачиваем направо на 90 градусов
    rt(90)
    fd(10*r)
    rt(90)
 # двигаемся вперёд на 3 единицы, поворачиваем налево на 90 градусов
fd(3*r)
lt(90)
# двигаемся вперёд на 13 единиц, поворачиваем направо на 90 градусов
fd(13*r)
rt(90)
for i in range(2):
    fd(9*r)
    rt(90)
    fd(32*r)
    rt(90)
up()
#Создаём точечки, это тоже одна из баз
for x in range(-50,50):
    for y in range(-50,50):
 # Перемещаемся к координатам (x*r, y*r)
        goto(x*r,y*r)
 # Рисуем красную точку радиусом 4 пикселя
        dot(4,'red')
update()`,
        additionalCode: `#дополнительный код с canvas
#в душе не чаю как этим пользоваться, но умным понадобится вдруг
from turtle import *

left(90)
speed(10)
l = 20

begin_fill()
for i in range(8):
forward(6*l)
right(120)
end_fill()

canvas = getcanvas()
count = 0
for x in range(-100*l, 100*l, l):
for y in range(-100*l, 100*l, l):
item = canvas.find_overlapping(x, y, x, y)
if len(item) == 1 and item[0] == 5:
count += 1
print(count)

done()`
    },
    7: {
        title: "Задание 7",
        description: "Это решаем либо руками, либо простым циклом",
        code: null
    },
    8: {
        title: "Задание 8",
        description: "Простейшее задание, вот некоторые коды для него",
        task: `Все шестибуквенные слова, составленные из букв С, О, Л, Н, Ц, Е, записаны в алфавитном порядке и пронумерованы. Ниже приведено начало списка.
1. ЕЕЕЕЕЕ
2. ЕЕЕЕЕЛ
3. ЕЕЕЕЕН
4. ЕЕЕЕЕО
5. ЕЕЕЕЕС
6. ЕЕЕЕЕЦ
Определите в этом списке количество слов с чётными номерами, которые не начинаются с гласной буквы и при этом содержат в своей записи ровно две буквы Ц.`,
        code: `from itertools import *
 #два счетчика нужны из за условия
k = 0
k2 = 0

for x in product('ЕЛНОСЦ',repeat=6):
    s = ''.join(x)
    k += 1
#это мы делаем учитывая условие
    if k%2==0 and s[0] not in 'ЕО' and s.count('Ц')==2:
        k2 += 1
print(k2)`,
        additionalTask: `Аня составляет слова, переставляя буквы в слове ОДЕКОЛОН, избегая слов, где соседние буквы — одинаковые. Сколько различных слов, включая исходное, может составить Аня?`,
        additionalCode: `from itertools import *
 #тут уже один счетчик
k = 0

for x in set(permutations('ОДЕКОЛОН')):
    s = ''.join(x)
#ну условие тут легкое
    if 'ОО' not in s:
        k += 1
print(k)`
    },
    9: {
        title: "Задание 9",
        description: "Это задание делаем через питон, хоть можно и через таблицы",
        task: `В каждой строке электронной таблицы записаны шесть целых чисел. Определите, сколько в таблице строк, для которых выполнены следующие условия:
– в строке есть как повторяющиеся, так и неповторяющиеся числа;
– среднее арифметическое всех неповторяющихся чисел строки меньше, чем среднее арифметическое всех повторяющихся чисел этой строки.
При вычислении средних значений каждое число учитывается столько раз, сколько оно встречается в строке. В ответе запишите число – количество строк, для которых выполнены эти условия.`,
        code: `k = 0
 #перед этим надо создать тхт файл с числами под названием 9
for s in open('9.txt'):
#это условие база - переводит в нужный формат
    a = [int(x) for x in s.split()]
# это условие заносит в список только если число не повторяется
    a1 = [x for x in a if a.count(x)==1]
#это если повторяется
    a2 = [x for x in a if a.count(x)>1]
    if len(a1)>0 and len(a2)>0 and sum(a1)/len(a1) < sum(a2)/len(a2):
        k += 1
print(k)`
    },
    10: {
        title: "Задание 10",
        description: "Тут делаем либо руками либо простым циклом с math",
        code: null
    }
};

// Заполняем данные для всех 27 заданий
for (let i = 11; i <= 27; i++) {
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

    // Формируем HTML с текстом задачи, если он есть
    let taskHTML = '';
    if (task.task) {
        taskHTML = `
            <div class="task-box">
                <h3>Текст задачи</h3>
                <p>${task.task.replace(/\n/g, '<br>')}</p>
            </div>
        `;
    }

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

    // Формируем HTML с дополнительной задачей, если она есть
    let additionalTaskHTML = '';
    if (task.additionalTask) {
        additionalTaskHTML = `
            <div class="task-box">
                <h3>Другая задача</h3>
                <p>${task.additionalTask.replace(/\n/g, '<br>')}</p>
            </div>
        `;
    }

    // Формируем HTML с дополнительным кодом, если он есть
    let additionalCodeHTML = '';
    if (task.additionalCode) {
        additionalCodeHTML = `
            <div class="code-container">
                <div class="code-header">
                    <span>Python${task.additionalTask ? '' : ' (дополнительный код)'}</span>
                    <button class="copy-btn" onclick="copyCode(this, 'code-additional-${taskNumber}')">Копировать</button>
                </div>
                <div class="code-block">
                    <pre id="code-additional-${taskNumber}">${task.additionalCode}</pre>
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
                <h3>Пояснение</h3>
                <p>${task.description}</p>
            </div>

            ${taskHTML}
            ${codeHTML}
            ${additionalTaskHTML}
            ${additionalCodeHTML}
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
