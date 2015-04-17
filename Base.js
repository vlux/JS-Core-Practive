//Base.extend 方法传入一个JSON对象，方法访问自身的成员时需要加this关键字
var EventListener = Base.extend({
    constructor:function(sense){
        this.sense = sense;
    },
    sense:null,
    handle:function(){
        print(this.sense +' occured');
    }
});

var Task = Base.extend({
    constructor:function(name){
        this.name = name;
    },
    name : null,
    listener:null,
    execute:function(){
        print(this.name);
        this.listener.handle();
    },
    setListener : function(listener){
        this.listener = listener;
    }
});

var HttpRequester = Task.extend({
    constructor:function(name,host,port){
        this.base(name);
        this.host = host;
        this.port = port;
    },
    host:"127.0.0.1",
    port:"8000",
    execute:function(){
        this.listener.handle();
    }
})

var requester = new HttpRequester('requester1',"127.0.0.1",9752);
var listener = new EventListener("http_request")
requester.setListener(listener);
requester.execute();
