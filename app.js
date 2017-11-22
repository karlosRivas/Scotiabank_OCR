
//*************************** Conversacion ***********************

(function() {

    'use strict';
    //var app = angular.module('formlyApp', ['formly', 'formlyBootstrap', 'irontec.simpleChat', 'ngIdle']);
        var app = angular.module('scotiabank', ['scotiabank', 'formlyBootstrap', 'irontec.simpleChat', 'ngIdle']);
    app.config(function ($httpProvider) {
        //uncommenting the following line makes GET requests fail as well
        $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
        //$httpProvider.defaults.headers.common = {};
        //$httpProvider.defaults.headers.post = {};
        //$httpProvider.defaults.headers.put = {};
        //$httpProvider.defaults.headers.patch = {};
    });



    app.controller('Shell', Shell);

    function Shell($rootScope, $scope, $http, Idle) {

        //Credenciales  //
        var contextPath = 'https://bot-conversation-bluemix-rest-api.mybluemix.net'
        var usernameConversation = 'f8252c67-e56b-4165-a657-c0f35afc6be8'
        var passwordConversation = 'pVsZsAElMK1f'
        //var workspace_id = '283b0dd0-ab0f-4f21-808d-a9a2fc8553e4' //CLA
        var workspace_id = 'b3fe7ea2-9a9b-4303-a7b5-92f424a1a5ec' //Scotiabank- OCR
        var vm = this;

        vm.messages = [];

        
        vm.conversationContext = null;
        $scope.current_product_name = null;
        $scope.current_section_name = null;

        /* $rootScope.$on("openChatParent", function(){
         $rootScope.$broadcast('initConversation',{message: $scope.product, username: $scope.username})
         });*/

        vm.sendMessage = function (message, username, product_name, section_name) {
            if (message && message !== '' && $scope.username !== '') {

                //console.info('llamando al api')
                $http.post(contextPath + '/api/sendMessage', {
                    workspace_id: workspace_id,
                    message: message,
                    context: vm.conversationContext,
                    username: usernameConversation,
                    password: passwordConversation
                }, {})
                    .then(vm.successCallbackSendMessage, vm.errorCallbackSendMessage);
                if (message != 'conversation_start') {
                    vm.messages.push({
                        'username': $scope.username,
                        'content': [message]
                    });
                }
            }

            //$scope.current_product_name = product_name;
            //$scope.current_section_name = section_name;
        };


        vm.successCallbackSendMessage = function (response) {
            // console.debug(response.data.data.context.system.dialog_stack[10000])
            // console.debug(response.data.data.involvesAsesor)
            // console.info(response)
            vm.conversationContext = response.data.data.context
            var content = new Array()
            //var NombreMsg = "WATSON";
            var NombreMsg = "Liza";

            angular.forEach(response.data.data.text, function (value, key) {
                var text = value.replace('username', $scope.username)
                    .replace('product_name', $scope.product_name)
                    .replace('section_name', $scope.section_name);
                if (text.indexOf('new-line') > 0) {
                    var lines = text.split('new-line')
                    angular.forEach(lines, function (line, key_line) {
                        content.push(line)
                    })
                } else {
                    var c=0 ;
                    if (text == '') {

                        content.push('Soy tu Asesor Cognitivo Legal, en que puedo ayudarte?')
                    }

                    if (text != '') {
                        content.push(text)
                    }

                }


            });

            vm.messages.push({
                'username': NombreMsg,
                'content': content

            });

            $('#chat-container-master').show()

        }

        vm.errorCallbackSendMessage = function () {
            console.error()
        }

    }
})();

