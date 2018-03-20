import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'dva';

class IndexPage extends React.Component {
  render() {
    const { timer, dispatch } = this.props;
    return (
      <button onClick={() => dispatch({ type: 'indexPage/add' })}>
        Seconds passed: { timer }
      </button>
    );
  }
}

function mapStateToProps({indexPage}) {
  return indexPage;
}

export default withRouter(connect(mapStateToProps)(IndexPage));