import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 仓库
  state: {
    info:"state中存储的信息",
    changeInfo:"改变的信息"
  },
  getters:{
    showInfo(state){
      return `当前传递的最新消息是：${state.info}`
    }
  },
  // 只能通过提交mutation变更数据
  // 不在mutation中，执行异步操作
  mutations: {
    changeInfo(state,payload){
      state.info = `通过mutation提交后更改的值 + .${payload}`
    },
    addInfo(state,payload){
      state.info = `这是addInfo + ${payload}`
    }
  },
  // 处理异步操作 ， 不能直接修改，只能通过触发mutations中的方法
  actions: {
    asyncAdd(context,payload){
      setTimeout(() => {
        // commit触发mutation中的函数
        context.commit("addInfo",payload)
      }, 1000);
    }
  },
  modules: {
  }
})
