console.log('Hello World!');    /*вывели в терминал строку 'Hello World!'*/


const age = 25;
/*создали переменную <age> типа "Числа"*/ 
console.log(age);
/*вывели в консоль созданную переменную <age>*/
console.log(typeof age);
/*вывели тип переменной <age> через оператор typeof*/
console.log(typeof(age));
/*вывели тип переменной <age> через функцию typeof*/


const name = 'Nastya';
/*создали переменную <name> типа "Строки"*/
console.log(name);
/*вывели в консоль созданную переменную <name>*/
console.log(typeof name);
/*вывели тип переменной <name> через оператор typeof*/
console.log(typeof(name));
/*вывели тип переменной <name> через функцию typeof*/


const isPeople = true;
/*создали переменную <isPeople> типа "Булевый"*/
console.log(isPeople);
/*вывели в консоль созданную переменную <isPeople>*/
console.log(typeof isPeople);
/*вывели тип переменной <isPeople> через оператор typeof*/
console.log(typeof(isPeople));
/*вывели тип переменной <isPeople> через функцию typeof*/


const children = null;
/*создали переменную <children> типа "Значение null"*/
console.log(children);
/*вывели в консоль созданную переменную <children>*/
console.log(typeof children);
/*вывели тип переменной <children> через оператор typeof*/
console.log(typeof(children));
/*вывели тип переменной <children> через функцию typeof*/


const price;
/*создали переменную <price> типа "Значение undefined"*/
console.log(price);
/*вывели в консоль созданную переменную <price>*/
console.log(typeof price);
/*вывели тип переменной <price> через оператор typeof*/
console.log(typeof(price));
/*вывели тип переменной <price> через функцию typeof*/


const user = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
};
/*создали переменную <user> типа "Объекты"*/
console.log(user);
/*вывели в консоль созданную переменную <user>*/
console.log(typeof user);
/*вывели тип переменной <user> через оператор typeof*/
console.log(typeof(user));
/*вывели тип переменной <user> через функцию typeof*/


const bigint = 123456789012345n;
/*создали переменную <bigint> типа "Тип - bigint"*/
console.log(bigint);
/*вывели в консоль созданную переменную <bigint>*/
console.log(typeof bigint);
/*вывели тип переменной <bigint> через оператор typeof*/
console.log(typeof(bigint));
/*вывели тип переменной <bigint> через функцию typeof*/


const id = Symbol();
/*создали переменную <id> типа "Символы"*/
console.log(id);
/*вывели в консоль созданную переменную <id>*/
console.log(typeof id);
/*вывели тип переменной <id> через оператор typeof*/
console.log(typeof(id));
/*вывели тип переменной <id> через функцию typeof*/


const date = {
    day: 27,
    month: 'September',
    year: 2024
};
/*объявили переменную <date> типа "Объекты" через const*/
date.day = 26;
/*изменили объявленную через const переменную <date> типа "Объекты"*/
console.log(date);
/*вывели в консоль измененную переменную <date>*/


let address = {
    city: 'Moscow',
    street: 'Krasnaya',
    office: 65
};
/*объявили переменную <address> типа "Объекты" через let*/
address.street = 'Kensington';
/*изменили объявленную через let переменную <address> типа "Объекты"*/
console.log(address);
/*вывели в консоль измененную переменную <address>*/


var dogBob = {
    nickname: 'Bob',
    color: 'black',
    breed: 'bulldog'
};
/*объявили переменную <dogBob> типа "Объекты" через var*/
dogBob.color = 'brown';
/*изменили объявленную через var переменную <dogBob> типа "Объекты"*/
console.log(dogBob);
/*вывели в консоль измененную переменную <dogBob>*/


const userName = 'Alex';
/*объявили переменную <userName> типа "Строки" через const*/
userName = 'Sony';
/*изменили объявленную через const переменную <userName> типа "Строки"*/
console.log(userName);
/*вывели в консоль измененную переменную <userName>*/