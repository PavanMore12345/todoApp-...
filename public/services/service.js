app.service('todoService',function($http){
  this.app=function(url,method,data){
    return $http({
      url:url,
      method:method,
      data:data,
    })
  };
});
