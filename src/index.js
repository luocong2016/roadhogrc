import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import './index.css';

export const history = createHistory();

// 1. Initialize
const app = dva({ history });

// 2. Plugins
// app.use({});

// 3. Model [move to router]
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
