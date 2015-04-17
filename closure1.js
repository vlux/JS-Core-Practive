var outter = [];
function clouseTest(){
    var array = [];
    for (var i = 0; i < array.length; ++i){
        var x = {};
        x.no = i;
        x.text = array[i];
        x.invoke = function(no){
            return function(){
                print(no);
            }
        }(i);
        outter.push(x);
    }
}
clouseTest();

x.invoke = function(){print(0);}
//As above
