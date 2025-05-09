////Функціяя виконується одразу
/*(function Exp(){
    console.log('Great jobs');
})();
*/
// Перевірка результату на число /////

/*console.log(isNaN(5));
console.log(isNaN(undefined)); // Цікаво. Все тому що цей тип не можна конвертувати в число
console.log(isNaN(NaN));
console.log(isNaN("qwerty"));*/

//Хотілось би також розібрати бібліотеку Math
//Округлення
/*console.log("floor: из 3.6 до " + Math.floor(3.6)); //вниз
console.log('ceil: из 3.1 до ' + Math.ceil(3.1)); //вгору
console.log('round: из 3.4 до ' + Math.round(3.4)); //до найближчого
console.log('round: из 3.7 до ' + Math.round(3.7)); //до найближчого*/

//заокруглення до заданого знака.
/*var n = 12.664676646766467664676646766467;
var str = n.toFixed(3); //скільки знаків після коми залишити
console.log(n + ' => ' + str);*/

//Генератор случайных чисел.
/*var rnd = Math.random();
console.log('rnd=' + rnd);
console.log('rnd=' + rnd.toFixed(2));*/

//Більш практична задача: ціле випадкове число від 1 до 10:

/*var rnd = Math.random();
rnd *= 100;
console.log(rnd)
rnd = Math.round(rnd);
console.log(rnd);*/

//Піднесення до ступення 
/*function PoW(){
    let a = Math.pow(2,3)
    return a;

}
console.log(PoW());*/

                                   //// Максимум і мінімум зі списку///////

/*let resultMIN = Math.min(3,56,34,23,7,12,1,89,156.8, 0.6)
console.log('Мінімальне число зі списку буде дорівнювати =' + resultMIN);
let resultMAX = Math.max(3,56,34,23,7,12,1,89,156.8, 0.6)
console.log('Максимальне  число зі списку буде дорівнювати =' +resultMAX);*/

//Пару слів про точність
/*var s = 0.1 + 0.2;
var round = s.toFixed(1);
console.log(s === 0.3);
console.log(round == 0.3);
console.log("До десятого знака: s =" + s.toFixed(10));
console.log("До двадцятого знака: s =" + s.toFixed(20));
console.log(0.3 === s.toFixed(1)); //а що не так ?
console.log(Number.isFinite(s.toFixed())); // Дуже цікаво
console.log(0.3 === Number.parseFloat(s.toFixed(1)));*/ 
//Усі математичні операції в JavaScript виконуються у двійковому вигляді.
// Не всякий десятковий дріб, що красиво виглядає в десятковому вигляді, так само красиво виглядає в бінарному.
//Спосіб "підвищити точність" обчислення:
/*var res = (0.1 * 10 + 0.2 * 10) / 10;
console.log(res);
console.log("Is it 0.3? " + (0.3 === res));
console.log(typeof(res))*/

                                                     // Методи String
//Найпростіший рядок
/*var str = "Бачиш лапки - значить це рядок";
console.log(str);
console.log('І не \r важливо, які \r саме лапки');
console.log(str);
console.log('І не \fважливо, які \f саме лапки');
console.log(str);
console.log('І не \fважливо, які  \u00A9 саме \u038C лапки ');
console.log(str);*/
/*
\b - backspace
\t - tab
\n - New line
\r - Carriage return
\f - Form feed
\u00A9 -символ юнікоду
*/

// length - вказує на кількість символів (для рядка)
/*const myString = "HelloHelloHelloHelloHelloHello";
console.log(myString.length);
console.log('Порахуємо кількість букв і це буде приблизно '+'Порахуємо кількість букв і це буде приблизно'.length + ' \n ось така вийде цифра цікава');*/


// charAt - дозволяє отримати символ за певним індексом у рядку.
/*const str = "Hello, world!";
console.log(str.charAt(0));
console.log(str.charAt(8));
console.log(str.charAt(13));*/ // Пустий рядок

//А тепер докладніше. charAt()
/*var str = "Якийсь рядок просто для прикладу";
console.log(str);
console.log("Символ номер три: " + str.charAt(32));
console.log("Те саме по іншому: " + str[32]);*/

