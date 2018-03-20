import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';

const router = [
  {
    path: '/',
    models: () => [import ('./models/indexPage.js')],
    component: () => import ('./routes/IndexPage.js'),
  }, {
    path: '/basic',
    models: () => [],
    component: () => import ('./reactRouter/Basic.js'),
  }, {
    path: '/urlParameters',
    models: () => [],
    component: () => import ('./reactRouter/URLParameters.js'),
  }, {
    path: '/redirects',
    models: () => [],
    component: () => import ('./reactRouter/Redirects.js'),
  }
];

function RouterConfig({ app, history }) {
  return (
    <Router history={history}>
      <Switch>
        {
          router.map(
            ({ path, ...dynamics }, index) => (
              <Route
                exact
                key={`router-${index}`}
                path={path}
                component={dynamic({ app, ...dynamics })}
              />
            )
          )
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
