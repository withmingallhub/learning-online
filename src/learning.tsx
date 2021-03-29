import react from 'react';
import Rout  from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

class Learning extends react.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return(
        <Router>
            <div onClick={() => console.log(this.props)}>
                <Rout></Rout>
            </div>
        </Router>
    )
  }
}

const mapStateToProps = (state: any) => { 
    // 必须返回一个纯对象
        return { // prop : state.xxx | 意思是将state中的某个数据映射到props中 
            info: state.name 
        } 
    }  // 渲染的时候就可以使用this.props.foo
        
        
// 然后render中直接通过this.props.onClick来调用dispatch,这样子就不需要在代码中来进行store.dispatch了
connect(mapStateToProps)(Learning);

export default Learning;