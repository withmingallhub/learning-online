import { connect } from 'react-redux';
import React from 'react';
import './index.css';
import { changeUserName } from '../../store/action/userInfo';
// import { changeuserName } from '../../store/index';

interface MainState {
    name?: string;
}

interface MainProps {
    name?: string
}

class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {

        }
    }

    toChangeUserName = (e: any) => {
        console.log('aaa');
        mapDispatchToProps('aaa');
        // changeuserName();
    };

    render() {
        return (
            <div className="main">
                aaaa
                <input onChange={(e) => this.toChangeUserName(e)}  />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => { 
// 必须返回一个纯对象
    return { // prop : state.xxx | 意思是将state中的某个数据映射到props中 
            state: state 
    } 
}  // 渲染的时候就可以使用this.props.foo
    
    
const mapDispatchToProps = (dispatch: any) => { 
    // 默认传递参数就是dispatch 
    return { 
        changeUserName(data: any) {
        return dispatch(changeUserName(data)); 
        } 
    }; 
}
// 然后render中直接通过this.props.onClick来调用dispatch,这样子就不需要在代码中来进行store.dispatch了
connect(mapStateToProps, mapDispatchToProps)(Main);

export default Main;