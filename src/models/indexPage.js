
export default {

  namespace: 'indexPage',

  state: {
    timer: 0,
    productsList: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((({ hash, pathname, search, state }) => {
        // if (pathname === '/') {
        //   dispatch({
        //     type: 'add',
        //     payload: {},
        //   });
        // }
      }))
    },
  },

  effects: {
    *fetch({ payload }, { call, put, select }) {  // eslint-disable-line
      yield put({
        type: 'save',
      });
    },

    *add({ payload }, { call, put, select}) {
      const state = yield select(({ indexPage }) => indexPage) || {};
      const { timer } = state;

      yield put({
        type: 'save',
        payload: {
          timer: timer + 1,
        },
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },

    filter(state, { payload }) {
      const { productsList = [] } = state;
      const { id } = payload;

      return {
        ...state,
        productsList: productsList.filter(item => item.id !== id)
      };
    },
  },

};
