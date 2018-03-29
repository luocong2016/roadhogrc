import { Redirect } from 'react-router-dom';

// ...
handleOnClick = () => {
  this.setState({ redirect: true });
}

render() {
  if (this.state.redirect) {
    return <Redirect
      to={{
        pathname: '/login',
        search: '?utm=a&b=c',
        state: { data: 'data'}
      }}
    />
  }
}
//...
