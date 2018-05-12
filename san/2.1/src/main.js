import san from 'san';
var MyApp = san.defineComponent({
    template: '<template>\
    <input type="text" placeholder="姓名（string）" value="{= person.name =}">\
    <input type="number" value="{= person.age =}">\
    <input type="text" value="{= person.des =}">\
    <input type="button" on-click="clear" value="移出">\
    <p>姓名：<span>{{person.name}}</span></p>\
    <p>年龄：<span>{{person.age | number}}</span></p>\
    <p>简介：<span>{{person.des}}</span></p>\
    </template>',
    initData: function() { //初始化数据
        return {
            person: {
                name: '',
                age: 'undefined',
                des: ''
            }
        };
    },
    clear: function() {
        this.data.set('person', {
            name: '',
            age: 'undefined',
            des: ''
        })
    }
});
var myApp = new MyApp();
myApp.attach(document.body)