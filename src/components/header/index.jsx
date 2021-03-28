import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    goProblom(e) {
        console.log(e);
        console.log('meiriyiti');
        
    }

    render() {

        return(
            <>
                <div className="titleFather">
                        <Link style={{ textDecoration:'none'}} to={{pathname:'/'}}>
                            <li className="title">主页</li>
                        </Link>
                        <Link style={{ textDecoration:'none'}} to={{ pathname:'/every' }}>
                            <li className="title">每日一题 </li>
                        </Link>
                        <Link style={{ textDecoration:'none'}} to={{ pathname:'/hot' }}>
                            <li className="title">热门题目</li>
                        </Link>
                        <Link style={{ textDecoration:'none'}} to={{ pathname: '/proType' }}>
                            <li className="title">题目类型</li>
                        </Link>
                        <Link style={{ textDecoration:'none'}} to={{ pathname: '/lovers' }}>
                            <li className="title">收藏</li>
                        </Link>
                        <Link style={{ textDecoration:'none'}} to={{ pathname: '/userInfo' }}>
                            <div style={{height: '60px',width: '60px',borderRadius: '50%',backgroundColor: 'black',marginTop: '20px'}}></div>
                        </Link>
                </div>
            </>
        )
    }
}

export default Header;