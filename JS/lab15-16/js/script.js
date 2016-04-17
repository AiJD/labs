$(function() {
    
var human = {
    name: 'Julia',
    age: 23,
    sex: 'woman',
    height: '165',
    weight: 55
};

var worker = {
    workPlace: 'Eshko',
    salary: 4000,
    work: function() {
        alert('Опять работа(');
    }
};

var student = {
    studyPlace: 'GoIT',
    grants: 750,
    watchTV: function() {
        alert('Скоро новый сезон Игры престолов!!!!');
    }
};

Object.setPrototypeOf(worker, human);
Object.setPrototypeOf(student, human);

var Oksana = Object.create(student);
    Oksana.name = 'Oksana';
    Oksana.age = 23;
    Oksana.weight = 50;

var Pyotr = Object.create(worker, {
    name: {value: 'Pyotr'},
    sex: {value: 'man'},
    salary: {value: 10000},
    age: {value: 45}
});

console.log('human', human);
console.log('student ', student);
console.log('worker ', worker);
console.log('Student ', Oksana.name + ', sex = '  + Oksana.sex + ' studying in ' + Oksana.studyPlace + ' and receiving ' + Oksana.grants + ' grants, his/her age ' + Oksana.age + ' and height is ' + Oksana.height);
console.log('Worker ', Pyotr.name + ', Age = ' + Pyotr.age + ', sex = '  + Pyotr.sex + ', working at ' + Pyotr.workPlace + ', receiving salary ' + Pyotr.salary + ' and has height = ' + Pyotr.height);

});
