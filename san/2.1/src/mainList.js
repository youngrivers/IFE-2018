import san from 'san';
import { router } from "san-router";
var MyApp = san.defineComponent({
    template: '<p>Hello{{x}}</p>',
    initData: function() {
        return {
            x: ' 213'
        };
    }
});
var myApp = new MyApp();
myApp.attach(document.body)
var MyApp2 = san.defineComponent({
    template: '<ul><li s-for="item in list">{{item}}</li></ul>',

    attached: function() {
        this.data.set('list', ['san', 'er', 'esui', 'etpl', 'esl']);
    }
});

var myApp2 = new MyApp2();
myApp2.attach(document.body);
var MyApp3 = san.defineComponent({
    template: '' +
        '<div>' +
        '<input value="{= name =}" placeholder="please input">' +
        'Hello {{name}}!' +
        '</div>'
});
var myApp3 = new MyApp3();
myApp3.attach(document.body);