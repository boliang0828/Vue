### vuex
1. state 中定义需要存储的变量
    * (1) computed 中 ```...mapState(["方法名"]) ```映射到data中直接使用
    * (2) ```this.$store.state.变量名``` 获取值
2. mutations 定义方法 更改state中的值  同步操作
    * (1)  methods 中 ```...mapMutations(["方法名"])``` 映射到methods中直接使用  
    * (2) ``` this.$store.commit(方法名,参数)  ``` 
3. actions 定义方法 触发mutations中的方法 异步操作 映射到methods中直接使用
    * (1)  methods 中 ```...mapActions(["方法名"])```,
    * (2)  ```this.$store.dispatch(方法名, 参数)```;

### vue 基础难点
> v-model
>> - .trim 去除首尾空白字符
>> - .number 以parseFloat转成数字类型
>> - .lazy 失去焦点时触发更改而非input时

```javascript
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
```