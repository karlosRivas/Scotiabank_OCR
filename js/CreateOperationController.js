// (function() {

//     'use strict';

angular
  .module('scotiabank')
  .controller('CreateOperationController', CreateOperationController)
  .config(function(IdleProvider, KeepaliveProvider) {
        // configure Idle settings
        IdleProvider.idle(1); // in seconds el tiempo
        IdleProvider.timeout(1); // in seconds
        KeepaliveProvider.interval(1); // in seconds
    })
    .run(function(Idle){
        // start watching when the app runs. also starts the Keepalive service by default.
        Idle.watch();
    });


    function CreateOperationController($scope, $http, $scope, $sce, $rootScope, Idle){


      //*************************** Funciones Chat***********************           

      $scope.callOpenChat = callOpenChat;
      $scope.changeSectionName = changeSectionName;
      $scope.startWatchIdle = startWatchIdle;

      function callOpenChat() {

          $scope.product = 'Scotia Travel'
          $scope.username = 'Usuario'
          $scope.section_name = $scope.section_name == undefined ? 'Plazo' : $scope.section_name
          //Versión abreviada de if Si se cumple la condición toma el valor que hay entre el signo de interrogación y los dos puntos, si no se cumple, toma el valor que hay a continuación de los dos puntos.
          $scope.product_name = 'Crédito personal'

              $rootScope.$broadcast('initConversation',{
                message: 'conversation_start',
                username: $scope.username,
                product_name: $scope.product_name,
                section_name: $scope.section_name
              })
      }

      function changeSectionName(section_name) {
        $scope.section_name = section_name
      }

      function startWatchIdle() {
        Idle.watch();
      }

      $scope.$on('IdleStart', function() {
        callOpenChat()              
      });

      $scope.$on('IdleWarn', function(e, countdown) {
        // follows after the IdleStart event, but includes a countdown until the user is considered timed out
        // the countdown arg is the number of seconds remaining until then.
        // you can change the title or display a warning dialog from here.
        // you can let them resume their session by calling Idle.watch()
      });

      $scope.$on('IdleTimeout', function() {
        //console.info('timeout')
        //Idle.watch();
        //Idle.watch();
        // the user has timed out (meaning idleDuration + timeout has passed without any activity)
        // this is where you'd log them
      });

      $scope.$on('IdleEnd', function() {
        //console.info('acaba la inactividad')
        //sIdle.watch();
        // the user has come back from AFK and is doing stuff. if you are warning them, you can use this to hide the dialog
      });

       $scope.$on('Keepalive', function() {
        // do something to keep the user's session alive
      });



      //*************************** FormData envio de datos***********************           
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
    };

// })();