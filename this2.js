var global = this;
var tom = {
    name:"Tom",
    home:"desine",
    getInfo:function(){
        print(this.name + ",from" + this.home);
    }
};
tom.getInfo()    //Tom,from desine

var jerry = {
    name:"Jerry",
    getInfo:tom.getInfo
}

jerry.getInfo    //Jerry,from undefined

global.getInfo = tom.getInfo;
global.getInfo()    //undefined,from undefined
