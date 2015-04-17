function factorial(n){
    return (function factiter(product,counter,max){
        if(greater(counter,max))
            return product;
        else
            return factiter(mul(counter,product),inc(counter),max);
    })(1,1,n);
}
factorial(10);

//Y-结合子
var Y = function(f){
    return (function(g){
        return g(g);
    })(function(h){
        return function(){
            return f(h(h)).apply(null,arguments);
        };
    });
};

//Combine above
Y(function(func){
    return function(x){
        return x == 0 ? 1: x * func(x - 1);
    }
})(10);

//js implements
var fact = function(x){
    return x == 0 ? 1 : x * arguments.callee(x-1);
}
fact(10);
//arguments.callee表示函数自身，arguments.caller表示函数调用者
