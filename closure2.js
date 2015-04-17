var datamodel = {
    table : [],
    tree : {}
};
(function(dm){
    for(var i = 0 ;i < dm.length; ++i){
        var row = dm.table.row[i];
        for(var j = 0 ;j < row.cells;++i)
            drawCell(i,j)
    }
})(datamodel);
