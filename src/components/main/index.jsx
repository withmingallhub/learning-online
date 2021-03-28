import React from 'react';
import './index.css';
// import { changeUserName } from '../../store/action.ts/userInfo';
// import { changeuserName } from '../../store/index';
import { connect } from 'react-redux';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    changeUserName(e) {
        console.log('aaa')
        mapDispatchToProps()
        // changeuserName();
    }

    render() {
        return (
            <div className="main">
                aaaa
                <input onChange={(e) => this.changeUserName(e)}  />
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
// 必须返回一个纯对象
    return { // prop : state.xxx | 意思是将state中的某个数据映射到props中 
            state: state 
    } 
}  // 渲染的时候就可以使用this.props.foo
    
    
const mapDispatchToProps = (dispatch) => { 
    // 默认传递参数就是dispatch 
    // return { onClick: () => { dispatch(changeUserName()); 
    // } 
}; 
// }
// 然后render中直接通过this.props.onClick来调用dispatch,这样子就不需要在代码中来进行store.dispatch了
connect(mapStateToProps, mapDispatchToProps)(Main);

export default Main;