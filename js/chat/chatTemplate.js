angular.module("irontec.simpleChat").run(["$templateCache", function($templateCache) {
    $templateCache.put("chatTemplate.html",
        "<div ng-show=\"visible\" style=\"border: 1px solid #797878;  box-shadow: -7px -7px 6px #a0a0a0; -moz-box-shadow:-7px -7px 6px #a0a0a0; -webkit-box-shadow:-7px -7px 6px #a0a0a0;\" class=\"row chat-window col-xs-5 col-md-3 {{vm.theme}}\" ng-class=\"{minimized: vm.isHidden}\">\r\n    " +
          "<div class=\"col-xs-12 col-md-12\">\r\n" +
            "<div class=\"panel\">\r\n" +
              "<div style='background-color:#dd271d; color:white;'  class=\"panel-heading chat-top-bar\">\r\n" +

                "<div class=\"col-md-8 col-xs-8\">\r\n" +
                  "<h3 class=\"panel-title\">{{vm.title}}</h3>\r\n" +
                "</div>\r\n" +

                "<div class=\"col-md-4 col-xs-4 window-actions\" style=\"text-align: right;\">\r\n" +
                  "<span class=\"fa\" ng-class=\"vm.chatButtonClass\" ng-click=\"vm.toggle()\"></span>\r\n" +
                "</div>\r\n" +

              "</div>\r\n " +
              "<div class=\"panel-body\" style='padding:0px;' ng-style=\"vm.panelStyle\">\r\n" +

                "<div class=\"msg-container-base\">\r\n" +
                  "<div style='padding-right 2em;' class=\"row msg-container\" ng-repeat=\"message in vm.messages\" ng-init=\"selfAuthored = vm.myUserId == message.fromUserId\">\r\n" +
                    "<div class=\"col-md-12 col-xs-12\">\r\n" +
                      "<div  style='margin-top:1em; -moz-border-radius:20px 20px 0px 20px; -webkit-border-radius:20px 20px 0px 20px; border-radius:20px 20px 0px 20px; padding: 5px' class=\" chat-msg\"  ng-class=\"{\'chat-msg-sent\': selfAuthored, \'chat-msg-recieved\': !selfAuthored}\">\r\n " +
                        "<span class=\"hide\">myUserId:{{vm.myUserId}}</span>\r\n " +
                        "<img ng-if=\"message.imageUrl\" class=\"profile\" ng-class=\"{\'pull-right\': selfAuthored, \'pull-left\': !selfAuthored}\" ng-src=\"{{message.imageUrl}}\" />\r\n " +
                        "<p ng-repeat='item in message.content'>{{item}}</p>\r\n " +
                        
                        " <div class=\"chat-msg-author\">\r\n" +
                          "<strong>{{message.username}}</strong>&nbsp;\r\n " +
                          "<span class=\"date\">{{message.date|date:hh:mm:a}}</span>\r\n " +
                        "</div>\r\n " +

                      "</div>\r\n " +
                    "</div>\r\n " +
                  "</div>\r\n " +
                "</div>\r\n " +

                "<div class=\"chat-bottom-bar\">\r\n " +
                  "<form style=\"display:inherit\" ng-submit=\"vm.submitFunction()\">\r\n " +
                    "<div class=\"input-group\" >\r\n " +
                      "<input type=\"text\" class=\"input-enviar form-control input-sm chat-input\" placeholder=\"{{vm.inputPlaceholderText}}\" ng-model=\"vm.writingMessage\" />\r\n " +
                        "<span class=\"input-group-btn\">\r\n " +
                            "<input type=\"submit\" style='border: 2px solid #cea8a8; background-color: #dd271d; color: white; border-radius: 20px;' class=\"btn btn-sm chat-submit-button\" value=\"{{vm.submitButtonText}}\" />\r\n " +
                        "</span>\r\n " +
                      "</div>\r\n " +
                  "</form>\r\n " +
                "</div>\r\n " +
        "</div>\r\n " +
        "</div>\r\n " +
        "</div>\r\n" +
        "</div>\r\n");}]);
