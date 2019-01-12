<template>
  <div class="demo-section">
    <ui-form
      :model="ruleForm"
      ref="ruleForm"
    >
      <ui-form-item
        label="手机号码"
        prop="mobile"
        :rules="[
          {required:true,message:'请输入手机号码'},
          {}
        ]"
      >
        <ui-input
          v-model="ruleForm.mobile"
        ></ui-input>
      </ui-form-item>
      <ui-form-item
        label="地址"
        prop="address"
        :rules="[
          {required:true,message:'请输入地址'},
          {min:6,message:'用户名需不少于6个字符'},
          {max:20,message:'用户名需不超过20个字符'}
        ]"
      >
        <ui-input
          v-model="ruleForm.address"
        ></ui-input>
      </ui-form-item>
      <ui-form-item
        label="姓名"
        prop="userName"
        :rules="[
          {required:true,message:'请输入姓名与身份证保持一致'},
          {}
        ]"
      >
        <ui-input
          v-model="ruleForm.userName"
        ></ui-input>
      </ui-form-item>
      <ui-form-item
        label="身份证号码"
        prop="idCard"
        :rules="[
          {required:true,message:'根据国家相关规定，需要您输入身份证号码'},
          {}
        ]"
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
      return{
        ruleForm:{
          mobile:"",
          address:"",
          userName:"",
          idCard:""
        }
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

      },
      resetForm(formName){
        console.log('reset');
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
