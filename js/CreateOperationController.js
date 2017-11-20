angular.module('telefonicaMexico', []);
  angular.module('telefonicaMexico').controller('CreateOperationController', 
    function($scope, $http){
      
         
    var files = [];
    $scope.uploadedFile = function(file){
      console.log(file.files[0]);
      files.splice(0, 1, file.files[0]);
      $("#BtnFinalizar").show("slow");
      //window.scrollTo(0,document.body.scrollHeight);
    };

    $scope.creatOperation = function (user) {
      //console.log(user.primerNom);
      var url = 'http://localhost:8081/scotiabank_ocr_luis/';
      var fd = new FormData();
     
      angular.forEach(files,function(file, index){
        fd.append('file', file);
      });
      fd.append("datos", JSON.stringify(user));
      $("#Searching_Modal").modal('show');

      $.ajax({
        url: url,
        data: fd,
        processData: false,
        contentType: false,
        timeout:15000,
        type: 'POST',
        success: function(data){
          console.log("Datos enviados: "+data);
          alert("Operacion exitosa");
          $("#Searching_Modal").modal('hide');
          
        },
        error: function (err){
          console.log(JSON.stringify(err));
          if( err.status = 200){
            $("#myModalFinalizar").modal('show');
            //alert("!Se han guardado correctamente los datos!");
            //window.location.assign("solicitud.html");  
          }
          else{
            console.log(err.status);
            alert("Operacion fallida");
          }          
          $("#Searching_Modal").modal('hide');
          
        }
      });
    };





  });

