var number = prompt("Введите число для возведения в степень", "");
var degree = prompt("Введите степень числа", "");
function isNumeric(a){//проверка на число
    if(a.match(/^[-\+]?\d+/) === null) return false;
    else return true;
}
function pow(a,b){
    if(!isNumeric(a)){
        console.log("Не число");
        return;
    }
    if(!isNumeric(b)){
        console.log("Не число");
        return;
    }
    if(b===0){
        return 1;
     }
    var rezult = 1;
     if(b<0){
         b*= -1;
         for (var i = 0; i < b; i++) {
             rezult*=a;
         }
         rezult = 1 / rezult;
      }else {
         for(var i = 0; i<degree; i++){
             rezult*= number;
         }
      }
    return rezult;
}
var rezult = pow(number,degree);
console.log("Ваш результат: "+rezult);
