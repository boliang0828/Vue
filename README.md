# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




### vuex
1. state 中定义需要存储的变量
    (1) computed 中 ...mapState(["方法名"]) 映射到data中直接使用
    (2) this.$store.state.变量名 获取值
2. mutations 定义方法 更改state中的值  同步操作
    (1)  methods 中 ...mapMutations(["方法名"]) 映射到methods中直接使用
    (2)  this.$store.commit(方法名,参数)
3.actions 定义方法 触发mutations中的方法 异步操作 映射到methods中直接使用
    (1)  methods 中 ...mapActions(["方法名"]),
    (2)  this.$store.dispatch(方法名, 参数);