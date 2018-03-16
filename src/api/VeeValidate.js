import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN';


Validator.localize(zh_CN);

const config = {
  errorBagName: 'errors',
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
};

Vue.use(VeeValidate,config);

// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      required: ( field )=> "请输入" + field
    },
    attributes:{
      email:'邮箱',
      password:'密码',
      username: '账号',
      phone: '手机',
      address:'地址',
      name:'姓名',

    }
  }
};

Validator.localize(dictionary);


Validator.extend('phone', {
  getMessage: field => field + '必须是11位手机号码',
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});
