var adder = function (num){
    return function(y){
        return num + y;
    }
}

var inc = adder(1);
var dec = adder(-1);

print(inc(100))

print(adder(100)(2))
