$(function(){
    var con = $("div#panel");
    this.id = "content";
    con.click(function(){
        alter(this.id);
    })
});
alter(this.id)//不会出content
//此处的this引用的是con这个jquery对象
//而匿名函数中的this.id = "content"是对匿名函数本身做的操作，两个this引用的并非同一个对象
//Changed
$(function(){
    var con = $("div#panel");
    this.id = "content";
    var self = this;
    con.click(function(){
        alter(self.id);
    })
});
