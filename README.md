#### use datetimepicker see [datetimepicker](https://github.com/xdan/datetimepicker)

```javascript
bower install ng.datetimepicker
```

```
angular.module('yourapp',['ngDatetimePicker'])
```

```html

<input ngdatetimepicker options="{minDate:'2017/1/1'}" />

```

### options

     	formatTime:'H:i'
      	formatDate:'d.m.Y'
      	defaultDate:'+03.01.1970'
      	defaultTime:'10:00'
      	timepickerScrollbar:false
      	step:5,
        inline:true
        mask:'9999/19/39 29:59'
        yearOffset:222
        lang:'ch'
        timepicker:false
        format:'d/m/Y'
        formatDate:'Y/m/d'
        minDate:'-1970/01/02'
        maxDate:'+1970/01/02'
      	