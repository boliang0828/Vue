// 定义变量
const state = {
    baseInfo: []
}

// 提交更改 一定是 mutations
const mutations = {
    SET_BASE_INFO: (state, data) => {
        state.baseInfo = data
    }
}

// 异步更改提交
const actions = {
    getBaseInfo({commit,state}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = 'actions异步操作结束返回数据'
                commit("SET_BASE_INFO", data)
                resolve(data)
            }, 2000);
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}