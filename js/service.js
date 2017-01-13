app.factory("replaceLine",function(){
    return {
         newFn:function(text){
            if(!text){
               return false;
            }
              return text.replace(/\n/g,'<br/>')
         }
    }
})

app.filter("getNewLine",["replaceLine",function(replaceLine){
    return function(str){
        if(!str){
         return "";
        }
            return replaceLine.newFn(str);
            }
}]);
