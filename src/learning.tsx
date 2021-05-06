import react from 'react';
import Rout from './router';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';

class Learning extends react.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Router>
        <div>
          <Rout></Rout>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    store: state,
  };
};
const Learnings = connect(mapStateToProps)(Learning);

export default Learnings;
