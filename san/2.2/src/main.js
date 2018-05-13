//console.log([1, 2, 3, 4].map(x => x * x));
import san from 'san';
var MyApp = san.defineComponent({
    template: '<template>\
    <input type="button" value="添加" class="btn btn-primary" on-click="addUser">\
    <table class="table">\
        <thead>\
            <tr>\
                <th scope="col">姓名{{name}}</th>\
                <th scope="col">审核状态</th>\
                <th scope="col">操作</th>\
            </tr>\
        </thead>\
        <tbody>\
            <tr s-for="p,index in persons">\
                <th>{{p.name}}</th>\
                <th>\
                    <span s-if="p.condition==1">合格</span>\
                    <span s-elif="p.condition==-1">不合格</span>\
                    <span s-else>待审核</span>\
                </th>\
                <th>\
                    <input s-if="p.operation==1" type="button" value="删除" class="btn btn-primary" on-click="clear">\
                    <input s-else type="button" value="审核" class="btn btn-primary" on-click="change(index)">\
                </th>\
            </tr>\
        </tbody>\
    </table>\
    </template>',
    initData: function() {
        return {
            persons: [
                { name: '张三', condition: 1, operation: 1 },
                { name: '李四', condition: -1, operation: 1 },
                { name: '王五', condition: 0, operation: 0 },
                { name: '赵六', condition: 0, operation: 0 },
                { name: '孙七', condition: 0, operation: 0 },
            ]
        };
    },
    addUser: function() {
        this.data.push('persons', { name: '添加', condition: 0, operation: 0 })
    },
    clear: function(index) { //删除该条数据
        this.data.removeAt('persons', index)
    },
    change: function(index) { //修改数据
        //let name=this.data.get('persons.name')
        //console.log(this.data.raw.persons[index].name)
        //this.data.pop('persons')//删除末尾数据
        this.data.set('persons[index]', { condition: 1, operation: 1 })
    }
});


var myApp = new MyApp();
myApp.attach(document.body);
/**
router.add({
    rule: '/',
    Component: San,
    target: '#app'
});
router.start();**/