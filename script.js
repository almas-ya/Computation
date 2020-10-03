while (true) {
    var name = prompt('Введите свое имя');
    if (isNaN(name)) {
        console.log(name);
        break
    }
}
while (true) {
   var birth = +prompt('Введите год рождения');
   if (!isNaN(birth)) {
       console.log(birth);
       break
   }
}
while (true) {
    var year = +prompt('Введите нынешний год');
    if (!isNaN(year)) {
        console.log(year);
        break
    }
}
function age(name, birth, year) {
    var str = year - birth
    return name + ', Ваш возраст ' + str;
}
console.log(age(name, birth, year));