<template>
  <div>
    <h2 v-show="false">vuex demo</h2>
    <p>{{ info }}</p>
    <p>{{ $store.getters.showInfo }}</p>
    <p>{{ showInfo }}</p>
    <button @click="btn1">改变info的值</button>
    <button @click="addInfo('这是一个参数')">这是addInfo方法</button>
    <button @click="btn3">这是异步commit方法</button>
    <button @click="asyncAdd('这是一个参数')">这是异步commit方法</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    /*
      1.通过  this.$store.state.info  获取store中的info值
      2.通过   ...mapState(['info'])  直接映射为当前的data
    */
    ...mapState(["info"]), //展开运算符 ...
    ...mapGetters(["showInfo"]), //展开运算符 ...
  },
  methods: {
    /*
      1.通过   ...mapMutations(['addInfo'])  直接映射为当前的methods
      1.通过   ...mapActions(['asyncAdd'])  直接映射为当前的methods
    */
   
    ...mapMutations(["addInfo"]),
    ...mapActions(["asyncAdd"]),

    /*
     通过 this.$store.commit() 提交store中的更改,调用mutations中的方法
     第一个参数为mutation中定义的方法，第二个参数为传参
    */
    btn1() {
      this.$store.commit("changeInfo", "这是传过来的参数");
    },

    // 触发 actions 的方式
    btn3() {
      this.$store.dispatch("asyncAdd", "异步传参");
    },
  },
};
</script>
