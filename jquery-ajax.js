var list = $("div#itemlist")
$.ajax({
    url : 'queryitems.php',
    type:'GET',
    error:function(xhr){
        alert(xhr);
    },
    success:function(obj){
        obj = eval('(' + obj + ')');
        var dataset = obj.dataset;
        for(var i = 0;i < dataset.length; ++i){
            var current = dataset[i];
            var newitem = $('<div></div>').text(current.desc)
                            .attr({
                                "id":current.itemid,
                                "time":current.ctime
                            })
                            .addClass('item');
                newitem.appendTo(list);
        }
    }
});
