var unit = {
    GCD: function(a, b) {
        if (a == b && a == 0) {
			return 'NaN';
        } else if (a / Math.floor(a) != 1 || b / Math.floor(b) != 1) {
			return 'undefined';
        } else if (a / Math.floor(a) == 1 && b / Math.floor(b) == 1 && a != 0 && b != 0) {
            a = Math.abs(a);
            b = Math.abs(b);
            while (a && b) a >= b ? a %= b : b %= a;
			return a||b;
        }
    },
    factor: function(n) {
        if (n / Math.floor(n) == 1 && n > 1) {
            var j = 0;
            var i = 2;
            var a = new Array();
            do {

                if (n % i == 0) {
                    a[j] = i;
                    j++;
                    n = n / i;
                } else {
                    i++;
                }
            }
            while (i < n);
            a[j] = i;
            var res = {};
            a.forEach(function(e) {
                res[e] = 1 + ~~res[e];
            })
            return a;

        } else {
            return 'Null';
        }
    },
    sort: function(array) {
        var count = array.length - 1;
        for (var i = 0; i < count; i++)
            for (var j = 0; j < count - i; j++)
                if (array[j] > array[j + 1]) {
                    var max = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = max;
                }
        return array;
    }
};
module.exports=unit;
//unit.GCD(0.6,0.8);
//unit.factor(12);
//unit.sort();