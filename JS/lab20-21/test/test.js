var chai = require('chai');
var unit = require('../build/js/script');


describe("Testing of our functions:", function() {

  describe("Функция GCD принимает два аргумента, аргументы равны нулю", function() {
    function testGCDNaN(a,b) {
      it("Если оба аргумента равны нулю, то результат - NaN", function() {
        chai.assert.equal(unit.GCD(a,b), 'NaN');
      });
    }
	testGCDNaN(0,0);
  }
  );

  describe("один из аргументов для функции GCD не целое число", function() {
    function testGCDUndefined(a,b) {
      it("аргумент А равен " + a + ", результат - undefined", function() {
        chai.assert.equal(unit.GCD(a,b), 'undefined');
      });
    }
	testGCDUndefined(6,7.6);
  });

  
  
    describe("Функция factor принимает один аргумент:", function() {
    function testFactorAccess(a) {
      var expected = unit.factor(a);
      it("аргумент равен " + a + " ,результат - массив со значениями: " + expected, function() {
        chai.assert.isArray(unit.factor(a));
      });
    } 
	testFactorAccess(50);	
  });
  
  describe("если аргумент функции factor меньше еденицы, то результат - Null:", function() {
    function testFactorNull(a) {
      var expected = unit.factor(a);
      it("аргумент равен " + a + ", результат: " + expected, function() {
        chai.assert.isNotArray(unit.factor(a));
      });
    } 
	testFactorNull(0);	
  });
  
  describe("Функция Sort принимает массив элементарных типов и сортирует его по возрастанию", function() {
    function testSort(a) {
      var expected = [0,1,3,5,6];
      it("аргумент равен " + a + ", результат: " + expected, function() {
        chai.assert.notStrictEqual(unit.sort(a),expected);
      });
    } 
	testSort([1,5,3,6,0]);	
  });

  
}
);
