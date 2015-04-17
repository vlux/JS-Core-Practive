//JS中的引用始终指向最终的对象，而非引用本身
var obj = {};
var ref = obj;

obj.name = 'ObjectA'
print(ref.name);

obj = ["a",'b'];
print(ref.name)
print(obj.length)    //2
print(ref.length)    //undefined

//obj只是对一个匿名对象的引用，所以ref并非指向它，当obj指向另一个数组对象时
//引用ref并未改变，而始终指向那个后来添加了name属性的空对象
