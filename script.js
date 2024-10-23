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

//1
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