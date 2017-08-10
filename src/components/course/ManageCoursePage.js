import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  //myProp: PropTypes.object(string,array,func).isRequired,
};

function mapStateToProps(state, ownProps) {
  return{
    state: state
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
