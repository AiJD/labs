var unit = require('../build/js/script');

  describe("two whole numbers and are not equal to zero ", function() {
      var expected = 10;
	  var a=10;
	  var b=50;
      it("two whole numbers " + a + " ,второй = "+b+", результат: " + expected, function() {
        expect(unit.GCD(a,b)).toEqual(expected);
      });
  });
  
  describe("Функция GCD принимает два аргумента, аргументы равны нулю", function() {
		var a=0;
		var b=0;
      it("Если оба аргумента равны нулю, то результат - NaN", function() {
        expect(unit.GCD(a,b)).toEqual('NaN');
      });

  }
  );

  describe("один из аргументов для функции GCD не целое число", function() {
	  		var a=88;
		var b=6.7;
      it("аргумент А равен " + a + ", результат - undefined", function() {
        expect(unit.GCD(a,b)).toEqual('undefined');
      });

  });