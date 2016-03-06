var myArray=[];
var flag=true;
for(var i = 0;i<5;i++){
        var name=prompt("Введите имя "+(i+1),"");
        if((name=='') || (name==null)){
            alert("Введено пустое поле");
            flag=false;
            break;
        }else myArray.push(name);
}
if(flag){
    var myName=prompt("Введите ВАШЕ имя ","");
    var flagEnter=false;
    for(var i = 0;i<5;i++){
        if(myName === myArray[i]){
            flagEnter = true;
            alert(myName+ ", вы успешно вошли!");
            break;
        }
    }
    if(!flagEnter) alert("ОШИБКА! НЕТ СОВПАДЕНИЙ");
}