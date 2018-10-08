import actions from './actions'
import mutations from './mutations'

const index = {
  namespace: true,
  state: {
    mainLoader: false,
    query: {

    },
    page: 0,
    mainLogs: [],
    updateMainStatus: false
  },
  actions,
  mutations
}

export default index
