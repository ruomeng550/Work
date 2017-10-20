/**
 * Created by DELL on 2017/10/19.
 */
/*
app.factory("carServer",["ajaxServer",function(ajaxServer){
   /!* var carInfo={
        getcar:function(){
            return ajaxServer.ajax("get","./Data/car.json");
        }
    };
    return carInfo;*!/
    var Carous = {
        getcarou: function () {
            return ajaxServer.ajax("get", "./Data/car.json");
        }
    };
    return Carous;
}]);*/
app.factory("carServer", ['ajaxServer', function (ajaxServer) {
    var Carous = {
        getcarou: function () {
            return ajaxServer.ajax("get", "./Data/car.json");
        }
    };
    return Carous;
}]);