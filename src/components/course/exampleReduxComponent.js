import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ComponentName extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

CoursesPage.propTypes = {
  //myProp: PropTypes.object(string,array,func).isRequired,
};

function mapStateToProps(state, ownProps) {
  return{
    state: state
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ACTIONS FILENAME, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentName);
