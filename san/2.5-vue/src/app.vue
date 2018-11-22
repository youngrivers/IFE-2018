<template>
    <div>
        <input type="text" name="" id="" v-model="msg" placeholder="put in">
        <p>{{msg}}</p>
        <textarea name="" id="" cols="30" rows="4" v-model="msg" placeholder="多行"></textarea>
        <div id="example-1">
            <input type="checkbox" name="" id="checkbox" v-model="checked">
            <label for="checkbox">{{checked}}</label>
        </div>
        <div id="example-2">
            <input type="checkbox" name="" id="jack" v-model="checkedNames" value="jack">
            <label for="jack">jack</label>
            <input type="checkbox" name="" id="lacy" v-model="checkedNames" value="lacy">
            <label for="lacy">lacy</label>
            <input type="checkbox" name="" id="bob" v-model="checkedNames" value="bob">
            <label for="bob">bob</label>
            <br>
            <span>选中的名字是：{{checkedNames}}</span>
        </div>
        <div id="example-3">
            <input type="radio" name="" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <input type="radio" name="" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <span>选中的是：{{picked}}</span>
        </div>
        <div id="example-4" class="form-group">
            <select v-model="selected" class="col-md-2 custom-select" required>
                <option disabled value="">请选择：</option>
                <option >A</option>
                <option >B</option>
                <option >C</option>
                <option >D</option>
                <option >E</option>
            </select>
            <div class="invalid-feedback">Example invalid custom select feedback</div>
            <span>选中的是：{{selected}}</span>
        </div>
        <div id="example-5">

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'我也静静等待用户输入',
                checked:true,
                checkedNames:[],
                picked:'',
                selected:''
            }
        },
    }
</script>
