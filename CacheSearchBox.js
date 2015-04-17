var CacheSearchBox = (function(){
    var cache = [],
        count = [];
    return {
        attachSearchBox:function(dsid){
            if(dsid in cache)
                return cache[dsid];
            var fsb = new uikit.webctrl.SearchBox(dsid);
            cache[dsid] = fsb;
            if(count.length > 100)
                delete cache[count.shift()];
            return fsb;
        },
        clearSearchBox:function(dsid){
            if(dsid in cache)
                cache[dsid].clearSelection();
        }
    };
})();
CacheSearchBox.attachSearchBox('input1')
//当第二次调用这个方法时，我们就可以从缓存中取出该对象，而不用再去创建一个新的searchbox对象
