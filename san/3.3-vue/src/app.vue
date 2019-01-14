<template>
  <div class="demo-section">
    <ui-form
      :model="ruleForm"
      ref="ruleForm"
      :rules="rules"
    >
      <ui-form-item
        label="手机号码"
        prop="mobile"
        :rules="rules.mobile"
      >
        <ui-input
          v-model="ruleForm.mobile"
        ></ui-input>
      </ui-form-item>
      <ui-form-item
        label="地址"
        prop="address"
        :rules="rules.address"
      >
        <ui-input
          v-model="ruleForm.address"
        ></ui-input>
      </ui-form-item>
      <ui-form-item
        label="姓名"
        prop="userName"
        :rules="rules.userName"
      >
        <ui-input
          v-model="ruleForm.userName"
        ></ui-input>
      </ui-form-item>
      <ui-form-item
        label="身份证号码"
        prop="idCard"
        :rules="rules.idCard"
      >
        <ui-input
          v-model="ruleForm.idCard"
        ></ui-input>
      </ui-form-item>
      <ui-form-item>
        <ui-button type="primary" @click="submitForm(ruleForm)">提交</ui-button>
        <ui-button @click="resetForm(ruleForm)">重置</ui-button>
      </ui-form-item>
    </ui-form>
  </div>
</template>
<script>
//import Datepicker from './components/DatePicker.vue'
import Form from './components/Form.vue'
import FormItem from './components/FormItem.vue'
import Input from './components/Input.vue'
import Button from './components/Button.vue'
  export default{
    data(){
      var checkMobile=(rule,value,callback)=>{
        /* if (value==='') {
          callback(new Error('请输入手机号码'))
        } */
        if (value) {
          if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
            callback(new Error('请输入正确的手机号码!'))
          }
          else{
            callback([])
          }
        }else{
          callback(new Error('请输入手机号码'))
        }
      };
      var checkAddress=(rule,value,callback)=>{
        if (value==='') {
          callback(new Error('请输入地址'))
        }
        setTimeout(() => {
          if (value.length<6) {
            callback(new Error('用户名需不少于6个字符'))
          }else if (value.length>20) {
            callback(new Error('用户名需不超过20个字符'))
          }
        }, 1000);
      };
      var checkUserName=(rule,value,callback)=>{
        if (value==='') {
          callback(new Error('请输入姓名与身份证保持一致'))
        }
      };
      var idCardValidate=(rule,value,callback)=>{
        if (value) {
          // 异步、远程验证
          let userName = this.data.get('formModel.userName');
          console.log({
            userName,
            idCard: value
          });
          // 将用户名和身份证号码作为参数发送异步请求，到服务端验证
          setTimeout(function() {
            callback([new Error('您输入的身份信息不匹配')]);
          }, 1000);
        }
        else {
          setTimeout(function() {
            callback(['请输入身份证号码']);
          }, 1000);
        }
      };
      return{
        ruleForm:{
          mobile:"",
          address:"",
          userName:"",
          idCard:""
        },
        rules:{
          mobile:[
            //{required:true,message:'',type:'String'},
            {validator:checkMobile}
          ],
          address:[
            /* {required:true,message:'请输入地址'},
            {min:6,message:'用户名需不少于6个字符'},
            {max:20,message:'用户名需不超过20个字符'} */
            {validator:checkAddress}
          ],
          userName:[
            //{required:true,message:'请输入姓名与身份证保持一致'},
            {validator:checkUserName}
          ],
          idCard:[
            //{required:true,message:'根据国家相关规定，需要您输入身份证号码'},
            {validator:idCardValidate}
          ],
        },
      }
    },
    components:{
      'uiForm':Form,
      'uiFormItem':FormItem,
      'uiInput':Input,
      'uiButton':Button,
    },
    methods: {
      submitForm(formName){
        console.log('submit');
        this.$refs[formName].validate()
      },
      resetForm(formName){
        console.log('reset');
        this.$refs[formName].resetFields()
      }
    },
  }
</script>
<style>
bady{
  margin: 0;
  padding: 0;
}
</style>
