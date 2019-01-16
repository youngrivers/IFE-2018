<template>
  <section class="todo">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" placeholder="What needs to be done?" class="new-todo" v-model="newTodo" @keyup="addTodo">
    </header>
    <section class="main">
      <input type="checkbox" class="toggle-all" v-model="allDone">
      <label for="" @click="allTodo()"></label>
      <ul class="todo-list">
        <li v-for="(todo,index) in todos" :key="todo.id" :class="[todo.completed?'completed':'']">
          <div class="view">
            <input type="checkbox" class="toggle" @click="selectTodo(index,todo)" :checked="todo.completed">
            <label for="">{{todo.title}}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input type="text" class="edit">
        </li>
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count"><strong>{{remaining}}</strong>item left</span>
      <ul class="filters">
        <li><a href="#/all" :class="[visibility=='all'?'selected':null]">All</a></li>
        <li><a href="#/active" :class="[visibility=='active'?'selected':null]">Active</a></li>
        <li><a href="#/completed" :class="[visibility=='completed'?'selected':null]">Completed</a></li>
      </ul>
      <button class="clear" @click="removeCompleted()">Clear completed</button>
    </footer>
  </section>
</template>
<script>
import "../utils/todo.scss"

var STORAGE_KEY='todos-vue'
//存储
var todoStorage={
  //取
  fetch:function(){
    var todos=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]')
    todos.forEach((todo,index) => {
      todo.id=index
    });
    todoStorage.uid=todos.length
    return todos
  },
  //存
  save:function(todos){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(todos))
  }
}
//过滤器
var filters={
  all:function (todos) {
    return todos
  },
  active:function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  Completed:function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}
function onHashChange () {
  var visibility = window.location.hash.replace(/#\/?/, '')
  if (filters[visibility]) {
    this.data.visibility = visibility
  } else {
    window.location.hash = ''
    this.data.visibility = 'all'
  }
}

//window.addEventListener('hashchange',onHashChange)
//onHashChange()
export default {
  data() {
    return {
      todos:todoStorage.fetch(),
      newTodo:'',
      //todoList:[{title:'rask1',completed: true},{title:'rask2',completed: false}],
      visibility: 'all',
      editedTodo:null,
    }
  },
  //监控todos在本地储存的变化
  watch: {
    todos:{
      handler:function (todos) {
        todoStorage.save(todos)
      },
      deep:true
    },
    //监控路由变化
  },
  computed: {
    filteredTodos(){
      return filters[this.visibility](this.todos)
    },
    remaining(){
      //return 3;
      return filters.active(this.todos).length
    },
    allDone:{
      get:function () {
        return this.remaining===0
      },
      set:function (value) {
        this.todos.forEach(function (todo) {
          todo.completed=value
        })
      }
    }
  },
  //过滤
  filters:{
    //变复数
    pluralize:function (n) {
      return n===1?'item':'items'
    }
  },
  created() {
    /* var todoList=[{id:0,title:'rask1',completed: true},{id:1,title:'rask2',completed: false}]
      todoList.forEach(todo => {
        this.todos.push({
          id:todo.id,
          title:todo.title,
          completed:todo.completed
        })
      }); */
    /* let that=this
    var visibility=window.location.hash.replace(/#\/?/, '')
      if (filters[visibility]) {
        that.visibility=visibility  
      }else{
        window.location.hash=''
        that.visibility='all'
      }
    console.log(visibility) */
    //window.addEventListener('hashchange',onHashChange)
    //onHashChange()
  },
  mounted() {
    //window.addEventListener('hashchange',onHashChange)
    //onHashChange()
  },
  methods: {
    //全选todo
    allTodo(){
      /* for (const todo in this.todos) {
        if (this.todos.hasOwnProperty(todo)) {
          const element = this.todos[todo];
          
        }
      } */
      if (this.remaining===0) {
        this.todos.forEach((todo)=>{
          todo.completed=false
        })
      }else{
        for (const todo of this.todos) {
          if (!todo.completed) {
            todo.completed=true
          }
        }
      }
      /* this.todos.forEach(todo => {
        todo.completed=true
      }); */
      //this.allDone.set=!this.allDone.get

    },
    //添加todo
    addTodo(e){
      if (e.keyCode!==13) {
        return
      }
      var value=this.newTodo && this.newTodo.trim();
      if (!value) {
        console.log('1111');
        return
      }
      /* this.todoList.push({
        title:value,
        completed:false
      }), */
      this.todos.push({
        id:todoStorage.uid++,
        title:value,
        completed:false
      })
      this.newTodo=''
    },
    //✔todo
    selectTodo(index,todo){
      console.log(todo.completed);
      console.log(this.todos[index].title);
      //return todo.completed=!todo.completed
      return this.todos[index].completed=!todo.completed;
    },
    //移除todo
    removeTodo(todo){
      //return this.todos.splice(index,1)
      this.todos.splice(this.todos.indexOf(todo),1)
    },
    //编辑
    editTodo(todo){
      this.editedTodo=todo
    },
    //清除已完成
    removeCompleted(){
      /* 不能移除全部
      this.todos.forEach((todo) => {
        if (todo.completed==true) {
          this.removeTodo(todo)
        }
      }); */
      this.todos=filters.active(this.todos)
    },
    //路由处理
    onHashChange() {
      //获取或设置页面的标签值
      
    }
  },
}
</script>