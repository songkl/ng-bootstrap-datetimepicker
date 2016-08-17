angular.module('ngDatetimePicker',[])
    .directive('ngdatetimepicker', function (ngDatetimePicker, $timeout) {

        var dateFormatter = new DateFormatter();

        $.datetimepicker.setLocale('zh');

        return {
          restrict : 'AE',
          scope : {
              ngdatetimepicker : '=',
              options : '='
          },
          link : function (scope, element, attr, ngModelCtrl) {
              var changed;

              changed = function (current) {
                  $timeout(function () {
                      scope.ngdatetimepicker = current.getTime();
                  }, 0);
              };

              if(!scope.options){
                  $(element).datetimepicker(ngDatetimePicker.config);
              } else {
                  $(element).datetimepicker(angular.extend(scope.options, ngDatetimePicker.config));
              }

              if(scope.ngdatetimepicker) {
               angular.element(element).val(dateFormatter.formatDate(new Date(scope.ngdatetimepicker),$.fn.datetimepicker.defaults.format));
              }
              element.on('change', function () {
                  changed(new Date($(this).val()));
              });
          }
        };

    })
    .provider('ngDatetimePicker',function ngDatetimePickerProvider () {

        var config = {
          lang : 'zh',
          step : 1
        };

        var extendConfig = function (newConfig) {
            config = angular.extend(config, newConfig);
        }

        return {
          $get : function (){
              return {
                  config : config,
                  extendConfig : extendConfig
              }
          }
        };

    });