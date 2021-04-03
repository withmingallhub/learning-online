import {connect} from 'react-redux';
import React from 'react';
import './index.css';
import {changeUserName} from '../../store/action/userInfo';
// import { changeuserName } from '../../store/index';

interface MainState {
  name?: string;
}

interface MainProps {
  name?: string;
  changeUserName: (data: any) => any;
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {};
  }

  toChangeUserName = (e: any) => {
    console.log('aaa');
    const a = 'a';
    this.props.changeUserName('aaa');
    // changeuserName();
  };

  render() {
    return (
      <div className="main">
        aaaa
        <input onChange={(e) => this.toChangeUserName(e)} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state, 'state');
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeUserName(data: any) {
      return dispatch(changeUserName(data));
    },
  };
};

// connect是返回一个新的组件，而不是改变你原来的组件，所有需要将新生成的组件抛出去，
// 所以要export connect之后组件才行
export default connect(mapStateToProps, mapDispatchToProps)(Main);
