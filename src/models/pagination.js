import { PAGECURRENT, PAGESIZE } from '../utils/constants';

export default {
  namespace: 'pagination',

  state: {
    list: [],
    pagination: {
      showTotal: total => `共 ${total} 条`,
      showQuickJumper: true,
      current: 1,
      total: null,
      pageSize: 10,
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  effects: {
    * fetch({ payload }, { call, put, select }) {
      const { pageCurrent = PAGECURRENT, pageSize = PAGESIZE } = payload;
      payload = { ...payload, pageCurrent, pageSize };
      const result = {}; // yield call(getNewsList, payload);
      
      if (!(result.status === true)) {
        // error('警告', result.message);
        return;
      }

      yield put({
        type: 'save',
        payload: {
          list: result.data.list,
          pagination: {
            showTotal: total => `共 ${total} 条`,
            showQuickJumper: true,
            current: result.data.page.current,
            total: result.data.page.total,
            pageSize: result.data.pageSize,
          },
        },
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ hash, pathname, search, state }) => {
        // ...
      });
    },
  },
};