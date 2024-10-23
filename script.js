// const productNew = {
//     name: 'Стол',
//     price: 2000,
//     count: 2,
//     userRegistred: false,
//     reg: function() {
//         this.userRegistred = true;
//     },
//     countProduct: function () {
//         if (this.count > 0) {
//             console.log('Вы можете купить данный товар');
//         } else {
//             console.log('Данный товар нельзя добавить в корзину');
//         }
        
//     },
//     buyProduct: function () {
//         if (this.userRegistred) {
//             console.log('Товар в корзине');
//         } else {
//             console.log('Вам необходимо зарегистрироваться (productReg)');
//         }
//     }
// }

// productNew.buyProduct();
// productNew.reg();
// productNew.buyProduct();
// const array = [1, 2, 3, 10, 15];
// console.log(array);
// array.map(item=>item*2);
// console.log(array);
// const arrayUp = array.map(item => item * 2);
// console.log(arrayUp);
// console.log(array.filter(item => item >= 10));
// console.log(array.some(item=> item>=10));
// console.log(array.reduce((a, b) => a + b)/array.length);

//seminar
// //1
// //1.1
// const weekDays = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье',
// }

// console.log(weekDays[2]);
// //1.2
// const user = {
//     'name': 'Petr',
//     'surname': 'Ivanov',
//     'age': 30
// }

// console.log(`${user.name}-${user.surname}-${user.age}`);
// //1.3
// user['patronymic'] = prompt('Введите отчество');

// console.log(user);
// //1.4
// delete user.surname;

// console.log(user);

//2
// const arr1 = ['пн','вт','ср','чт','пт','сб','вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const weekDays={};

// for (let i = 0; i < arr1.length; i++) {
//     weekDays[arr1[i]] = arr2[i];
// }

// console.log(weekDays);

// const obj = {
//     x:1, 
//     y:2, 
//     z:3,
// };

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         obj[key] = obj[key]**2;
        
//     }
// }

// console.log(obj);

// const obj = {
//     key1:{
//         key1:1,
//         key2:2,
//         key3:3,
//     },
//     key2:{
//         key1:4,
//         key2:5,
//         key3:6,
//     },
//     key3:{
//         key1:7,
//         key2:8,
//         key3:9,
//     },
// }

// let sum = 0;
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         for (const key in element) {
//             if (Object.prototype.hasOwnProperty.call(element, key)) {
//                 sum += element[key];
                
//             }
//         }
//     }
// }

// console.log(sum);



// const riddles = {
//     1:{
//         'question':'Зимой и летом одним цветом',
//         'answer':['ель','ёлка','елка'],
//         'tips':['имеет иголки','зимой и летом стройная'],
//     },
//     2:{
//         'question':'Цветное коромысло через реку повисло',
//         'answer':['радуга'],
//         'tips':['семь цветов','во время дождя и солнца'],
//     },
//     'askQuestion': function(riddleNum) {

//         const riddle = this[riddleNum];
//         let tipIndex = 0;
//         let ans = prompt(riddle.question).toLowerCase();
//         do{
//             if(riddle.answer.indexOf(ans) >= 0){
//                 alert('Угадал!');
//                 return 0;
//             }else{
//                 ans = prompt(`Не угадал.. Вот подсказка: ${riddle.tips[tipIndex]}`);
//                 tipIndex++;
//             }
            
//         }while(tipIndex < riddle.tips.length);
//         alert('Подсказки закончились. Попробуй в другой раз!')
//         return 1;
//     }
// };

// let num = 1 + Math.round(Math.random());
// riddles.askQuestion(num);

//Задание 1
// Описание задачи: Дан объект numbers. Необходимо вывести в консоль все значения,
// которые больше или равны 3.

const numbers = {
    'keyin1': 1,
    'keyin2': 2,
    'keyin3': 3,
    'keyin4': 4,
    'keyin5': 5,
    'keyin6': 6,
    'keyin7': 7,
}

for (const key in numbers) {
    if (Object.prototype.hasOwnProperty.call(numbers, key)) {
        if(numbers[key] >= 3){
            console.log(numbers[key]);
        }
    }
}

//Задание 2
// Описание задачи: Из объекта post, который задан в константе, выведите значения с
// комментариями в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
            likes: 10,
            dislikes: 2, // вывести это число
        },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
            likes: 3,
            dislikes: 1,
        },
        },
        ],
    };

    console.log(post.author);
    for (const key in post.comments) {
        if (Object.prototype.hasOwnProperty.call(post.comments, key)) {
            const element = post.comments[key];
            for (const key in element) {
                if (Object.prototype.hasOwnProperty.call(element, key)) {
                    console.log(element[key]);
                }
            }
        }
    }


//Задание 3
// Описание задачи: Дан массив products. Уменьшите цену каждого продукта на 15% с
// использованием метода forEach.

const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
];

products.forEach(element => {
    element.price*=0.85;
});
console.log(products);

// Задание 4
// Описание задачи:
// 1. Выведите в консоль массив продуктов, у которых есть хотя бы одна
// фотография, используя метод filter.
// 2. Отсортируйте массив products по цене

const productsNew = [
    {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
    },
    {
    id: 5,
    price: 499,
    photos: [],
    },
    {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
    },
    {
    id: 8,
    price: 78,
    },
    ];

    const productMoreZeroPhoto = productsNew.filter(prod => prod.photos && prod.photos.length > 0);

    
    console.log(`продукты с фото:`, productMoreZeroPhoto);